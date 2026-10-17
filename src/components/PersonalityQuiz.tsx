import { useState } from 'react'
import { personalityQuestions, personalityTypes } from '../content/extras'
import { setPersonality, useProgress } from '../state/progress'
import { navigate } from '../router'

export default function PersonalityQuiz() {
  const progress = useProgress()
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [result, setResult] = useState<string | null>(null)

  const type = personalityTypes.find((t) => t.id === result)

  function choose(t: string) {
    const next = { ...scores, [t]: (scores[t] ?? 0) + 1 }
    setScores(next)
    if (step + 1 >= personalityQuestions.length) {
      const winner = Object.entries(next).sort((a, b) => b[1] - a[1])[0][0]
      setResult(winner)
      setPersonality(winner)
    } else {
      setStep(step + 1)
    }
  }

  if (type) {
    return (
      <div>
        <div className="lesson-top">
          <button className="btn ghost small" onClick={() => navigate('/')}>
            ← Home
          </button>
          <span>Crypto personality</span>
        </div>
        <div className="card center">
          <div className="trophy" aria-hidden>
            {type.icon}
          </div>
          <h1>{type.name}</h1>
          <p className="muted">{type.summary}</p>
          <div className="card flat" style={{ textAlign: 'left', marginTop: 12 }}>
            <div className="eyebrow">Your next habit</div>
            <p style={{ margin: 0 }}>{type.habit}</p>
          </div>
          <div className="card flat" style={{ textAlign: 'left' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>
              Watch out for
            </div>
            <p style={{ margin: 0 }}>{type.watchOut}</p>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn primary" onClick={() => navigate('/concierge')}>
              Ask the Concierge →
            </button>
            <button
              className="btn"
              onClick={() => {
                setResult(null)
                setScores({})
                setStep(0)
              }}
            >
              Retake
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = personalityQuestions[step]
  return (
    <div>
      <div className="lesson-top">
        <button className="btn ghost small" onClick={() => navigate('/')}>
          ← Home
        </button>
        <span>
          Question {step + 1} of {personalityQuestions.length}
        </span>
      </div>
      <div className="card">
        <div className="eyebrow">Crypto Personality Quiz</div>
        <h2>{q.question}</h2>
        <div className="stack" style={{ gap: 9 }}>
          {q.options.map((opt) => (
            <button key={opt.label} className="option" onClick={() => choose(opt.type)}>
              <span className="key">›</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
        {progress.personality && (
          <p className="small muted" style={{ marginBottom: 0, marginTop: 12 }}>
            Previous result: {personalityTypes.find((t) => t.id === progress.personality)?.name}
          </p>
        )}
      </div>
    </div>
  )
}
