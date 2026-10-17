import { useRef, useState } from 'react'
import { conciergeKnowledge, disclaimer } from '../content/extras'
import { useProgress } from '../state/progress'

type Msg = { from: 'bot' | 'me'; text: string }

const suggestions = [
  'What is a seed phrase?',
  'Is crypto anonymous?',
  'Someone asked for my keys',
  'What is a testnet?',
  'Should I buy now?',
  'How do fees work?',
]

function answerFor(input: string): string {
  const text = input.toLowerCase()
  let best: { score: number; entry: (typeof conciergeKnowledge)[number] | null } = {
    score: 0,
    entry: null,
  }
  for (const entry of conciergeKnowledge) {
    let score = 0
    for (const kw of entry.keywords) {
      if (text.includes(kw)) score += kw.length > 4 ? 2 : 1
    }
    if (score > best.score) best = { score, entry }
  }
  if (best.entry && best.score > 0) {
    return `${best.entry.title}\n\n${best.entry.answer}`
  }
  return (
    'I could not match that to a lesson yet. I only answer from the WiseBlock lessons, so try asking about:' +
    '\n\n• Keys and seed phrases\n• Wallets (hot and cold)\n• Exchanges and custody\n• Scams and red flags\n• Fees and confirmations\n• Testnets and practice'
  )
}

export default function Concierge() {
  const progress = useProgress()
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: 'bot',
      text: `Hello${progress.learnerName ? ` ${progress.learnerName}` : ''}. I am the WiseBlock Concierge.

I answer from the 50 lessons in this academy. I do not predict prices and I do not give financial advice.

What would you like to understand?`,
    },
  ])
  const [input, setInput] = useState('')
  const logRef = useRef<HTMLDivElement>(null)

  function send(text: string) {
    const clean = text.trim()
    if (!clean) return
    setMessages((m) => [...m, { from: 'me', text: clean }, { from: 'bot', text: answerFor(clean) }])
    setInput('')
    window.setTimeout(() => {
      logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
    }, 30)
  }

  return (
    <div>
      <div className="lesson-top">
        <span className="eyebrow" style={{ margin: 0 }}>
          WiseBlock Concierge
        </span>
        <span className="chip">Offline · lesson-based</span>
      </div>
      <h1>Ask a calm question</h1>
      <p className="small muted" style={{ marginTop: 0 }}>
        This concierge runs in your browser and answers only from the WiseBlock lessons. No account,
        no tracking, no advice.
      </p>

      <div className="card">
        <div className="chat-log" ref={logRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            placeholder="Type a question about crypto safety…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') send(input)
            }}
            aria-label="Your question"
          />
          <button className="btn primary" onClick={() => send(input)}>
            Ask
          </button>
        </div>
      </div>

      <div className="section-title">
        <h2>Try one of these</h2>
      </div>
      <div className="suggest-row">
        {suggestions.map((s) => (
          <button key={s} className="suggest" onClick={() => send(s)}>
            {s}
          </button>
        ))}
      </div>

      <div className="warn-note" style={{ marginTop: 18 }}>
        {disclaimer} If you think your wallet is compromised, stop sending funds and move what is
        left to a fresh wallet you control.
      </div>
    </div>
  )
}
