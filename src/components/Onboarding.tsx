import { useState } from 'react'
import { finishOnboarding } from '../state/progress'
import { disclaimer } from '../content/extras'

const promises = [
  'I will never share my seed phrase with anyone.',
  'I will check the source before I click or send.',
  'I will only use money I could afford to lose.',
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [checked, setChecked] = useState<boolean[]>(() => promises.map(() => false))
  const allChecked = checked.every(Boolean)

  return (
    <div className="shell">
      <div className="hero">
        <div className="mark" aria-hidden>
          🛡️
        </div>
        <div className="eyebrow">Scam-Proof Crypto Academy</div>
        <h1>Welcome to WiseBlock</h1>
        <div className="step-dots" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className={i <= step ? 'on' : ''} />
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="card">
          <h2 style={{ marginBottom: 8 }}>Learn crypto without the hype</h2>
          <ul className="lines">
            <li>Five modules, ten short lessons each.</li>
            <li>Every lesson fits one calm, scrollable page.</li>
            <li>Micro-quizzes, badges and a daily reward.</li>
            <li>Real scam examples so you can spot them early.</li>
          </ul>
          <p className="small muted" style={{ marginTop: 14 }}>
            WiseBlock teaches safety and fundamentals only. It never predicts prices.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn primary" onClick={() => setStep(1)}>
              Start gently →
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="card">
          <h2 style={{ marginBottom: 8 }}>What should we call you?</h2>
          <p className="small muted">
            {"Optional. It is stored only in this browser, and you can leave it blank."}
          </p>
          <input
            type="text"
            value={name}
            placeholder="First name or nickname"
            onChange={(e) => setName(e.target.value)}
            aria-label="Your name"
          />
          <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            <button className="btn primary" onClick={() => setStep(2)}>
              Continue →
            </button>
            <button className="btn ghost" onClick={() => setStep(0)}>
              ← Back
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="card">
          <h2 style={{ marginBottom: 8 }}>Three promises</h2>
          <p className="small muted">These keep you safe. Tick each one to begin.</p>
          <div className="stack" style={{ gap: 8 }}>
            {promises.map((p, i) => (
              <button
                key={p}
                className={`option ${checked[i] ? 'correct' : ''}`}
                onClick={() =>
                  setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)))
                }
              >
                <span className="key">{checked[i] ? '✓' : ''}</span>
                <span>{p}</span>
              </button>
            ))}
          </div>
          <div className="warn-note" style={{ marginTop: 14 }}>
            {disclaimer}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
            <button
              className="btn primary"
              disabled={!allChecked}
              onClick={() => finishOnboarding(name)}
            >
              Enter WiseBlock →
            </button>
            <button className="btn ghost" onClick={() => setStep(1)}>
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
