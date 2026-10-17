import { useMemo, useState } from 'react'
import { spotterScenarios } from '../content/extras'
import { saveScamSpotter, useProgress } from '../state/progress'
import { navigate } from '../router'
import { toast } from '../state/toast'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ScamSpotter() {
  const progress = useProgress()
  const [round, setRound] = useState(0)
  const [picked, setPicked] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const deck = useMemo(() => shuffle(spotterScenarios), [])

  const current = deck[round]

  function answer(choice: boolean) {
    if (picked !== null) return
    setPicked(choice)
    if (choice === current.isScam) setScore((s) => s + 1)
  }

  function next() {
    if (round + 1 >= deck.length) {
      const finalScore = score
      saveScamSpotter(finalScore)
      toast(`Scam Spotter saved: ${finalScore}/${deck.length}`)
      setFinished(true)
      return
    }
    setRound((r) => r + 1)
    setPicked(null)
  }

  function restart() {
    setRound(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / deck.length) * 100)
    const verdict =
      pct >= 90
        ? 'Sharp eye. Your instincts match the lessons.'
        : pct >= 60
          ? 'Solid. Review the ones that caught you out.'
          : 'Good practice. Module 4 will sharpen these reflexes.'
    return (
      <div>
        <div className="lesson-top">
          <button className="btn ghost small" onClick={() => navigate('/')}>
            ← Home
          </button>
          <span>Mini-game</span>
        </div>
        <div className="card center">
          <div className="trophy" aria-hidden>
            🕵️
          </div>
          <h1>
            {score} / {deck.length}
          </h1>
          <p className="muted">{verdict}</p>
          <p className="small muted">
            Best score on this device: <b style={{ color: 'var(--mint)' }}>{progress.scamSpotterBest}</b>
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn primary" onClick={restart}>
              Play again
            </button>
            <button className="btn" onClick={() => navigate('/module/scam-proof-strategist')}>
              Review Module 4
            </button>
          </div>
        </div>
      </div>
    )
  }

  const correct = picked !== null && picked === current.isScam
  return (
    <div>
      <div className="lesson-top">
        <button className="btn ghost small" onClick={() => navigate('/')}>
          ← Home
        </button>
        <span>
          Message {round + 1} of {deck.length} · Score {score}
        </span>
      </div>

      <div className="card">
        <div className="eyebrow">Scam Spotter</div>
        <h2 style={{ marginBottom: 4 }}>{current.scenario}</h2>
        <p className="small muted">Is this a scam, or is it legitimate?</p>
        <div className="game-msg">
          <span className="who">{current.who}</span>
          {current.message}
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
          <button
            className="btn primary"
            disabled={picked !== null}
            onClick={() => answer(true)}
            style={{ flex: 1, minWidth: 130 }}
          >
            ⚑ This is a scam
          </button>
          <button
            className="btn"
            disabled={picked !== null}
            onClick={() => answer(false)}
            style={{ flex: 1, minWidth: 130 }}
          >
            ✓ This is legitimate
          </button>
        </div>
      </div>

      {picked !== null && (
        <div className={`feedback ${correct ? 'ok' : 'bad'}`} style={{ marginTop: 14 }}>
          <strong>{correct ? 'Correct. ' : 'Not quite. '}</strong>
          This is {current.isScam ? 'a scam' : 'legitimate'}. {current.explanation}
          <div style={{ marginTop: 12 }}>
            <button className="btn primary small" onClick={next}>
              {round + 1 >= deck.length ? 'See result' : 'Next message →'}
            </button>
          </div>
        </div>
      )}

      <p className="small muted" style={{ marginTop: 18 }}>
        Practice only. Nothing here asks for real funds, and no score affects your lessons.
      </p>
    </div>
  )
}
