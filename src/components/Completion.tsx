import { useEffect } from 'react'
import { modules, totalLessonCount, partnerLinks, disclaimer } from '../content'
import { graduate, useProgress } from '../state/progress'
import { navigate } from '../router'
import ProgressBar from './ProgressBar'
import Badges from './Badges'

export default function Completion() {
  const progress = useProgress()
  const total = totalLessonCount()
  const done = progress.completedLessons.length
  const allDone = done >= total
  const personality = progress.personality

  useEffect(() => {
    if (allDone) graduate()
  }, [allDone])

  if (!allDone) {
    const remaining = modules.filter(
      (m) => m.lessons.some((l) => !progress.completedLessons.includes(l.id)),
    )
    return (
      <div>
        <div className="lesson-top">
          <button className="btn ghost small" onClick={() => navigate('/')}>
            ← Home
          </button>
          <span>Graduation</span>
        </div>
        <div className="card">
          <div className="eyebrow">Not long now</div>
          <h2>Your graduation unlocks when every lesson is complete</h2>
          <div className="progress-head">
            <span>
              {done} of {total} lessons
            </span>
            <span>{Math.round((done / total) * 100)}%</span>
          </div>
          <ProgressBar value={done} total={total} />
          <div className="divider" />
          <h3>Still to finish</h3>
          <div className="stack" style={{ gap: 9 }}>
            {remaining.map((m) => {
              const left = m.lessons.filter((l) => !progress.completedLessons.includes(l.id)).length
              return (
                <button
                  key={m.id}
                  className="module-card"
                  onClick={() => navigate(`/module/${m.id}`)}
                >
                  <span className="module-index" style={{ borderColor: m.accent, color: m.accent }}>
                    {m.index}
                  </span>
                  <span>
                    <span className="module-head">
                      <h3>{m.title}</h3>
                    </span>
                    <span className="module-sub" style={{ display: 'block' }}>
                      {left} lesson{left === 1 ? '' : 's'} left
                    </span>
                  </span>
                  <span className="muted small module-cta">Continue →</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="lesson-top">
        <span className="eyebrow" style={{ margin: 0 }}>
          Graduation
        </span>
        <span className="chip">🎓 WiseBlock Graduate</span>
      </div>

      <div className="card center">
        <div className="confetti" aria-hidden>
          🎉 🛡️ 🎉
        </div>
        <div className="trophy" aria-hidden>
          🎓
        </div>
        <h1>You finished the WiseBlock path.</h1>
        <p className="muted">
          {progress.learnerName ? `${progress.learnerName}, you` : 'You'} completed {total} lessons
          across five modules. That is real progress, built one calm page at a time.
        </p>
        <div className="progress-head" style={{ marginTop: 18 }}>
          <span>Lessons complete</span>
          <span>
            {done} / {total}
          </span>
        </div>
        <ProgressBar value={done} total={total} />
        <div className="module-meta" style={{ justifyContent: 'center', marginTop: 16 }}>
          <span className="chip">Badges <b>{progress.badges.length}</b></span>
          <span className="chip">Quiz answers <b>{progress.quizCorrect}/{progress.quizTotal || 0}</b></span>
          <span className="chip flame">🔥 Streak <b>{progress.streak}</b></span>
          <span className="chip">🪙 Coins <b>{progress.coins}</b></span>
          <span className="chip">🕵️ Best spotter <b>{progress.scamSpotterBest}</b></span>
        </div>
      </div>

      <div className="section-title">
        <h2>Your badges</h2>
      </div>
      <Badges />

      <div className="grid two" style={{ marginTop: 18 }}>
        <div className="card flat">
          <div className="eyebrow">Keep going</div>
          <h3>Sharpen your reflexes</h3>
          <p className="small muted">
            Play Scam Spotter again to keep the patterns fresh. Scores do not affect your lessons.
          </p>
          <button className="btn primary block" onClick={() => navigate('/game')}>
            🕵️ Play Scam Spotter
          </button>
        </div>
        <div className="card flat">
          <div className="eyebrow">Your profile</div>
          <h3>Personality result</h3>
          <p className="small muted">
            {personality
              ? 'Your style shapes which habits matter most to you.'
              : 'Take the short quiz to see which habits fit you best.'}
          </p>
          <button className="btn block" onClick={() => navigate('/personality')}>
            🧭 {personality ? 'Review your result' : 'Take the quiz'}
          </button>
        </div>
      </div>

      <div className="section-title">
        <h2>Where to look next</h2>
      </div>
      <div className="link-row">
        {partnerLinks.map((p) => (
          <a className="partner" key={p.name} href={p.url} target="_blank" rel="noreferrer noopener">
            <b>{p.name} ↗</b>
            <span>{p.blurb}</span>
          </a>
        ))}
      </div>

      <div className="card flat" style={{ marginTop: 18, borderColor: 'rgba(255,200,97,0.35)' }}>
        <div className="eyebrow" style={{ color: 'var(--amber)' }}>
          Staying safe is a routine
        </div>
        <ul className="lines">
          <li>Test backups monthly.</li>
          <li>Revoke permissions you no longer use.</li>
          <li>Keep learning materials separate from your funds.</li>
          <li>Ask the Concierge whenever a message feels off.</li>
        </ul>
        <button className="btn primary" onClick={() => navigate('/concierge')}>
          💬 Ask the Concierge
        </button>
      </div>

      <div className="footer-note">
        <p>{disclaimer}</p>
      </div>
    </div>
  )
}
