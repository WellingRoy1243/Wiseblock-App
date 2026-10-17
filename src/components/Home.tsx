import { modules, totalLessonCount, partnerLinks, disclaimer } from '../content'
import { useProgress } from '../state/progress'
import { navigate } from '../router'
import ProgressBar from './ProgressBar'
import DailyReward from './DailyReward'
import Badges from './Badges'
import { resetProgress } from '../state/progress'

export default function Home() {
  const progress = useProgress()
  const total = totalLessonCount()
  const done = progress.completedLessons.length
  const pct = Math.round((done / total) * 100)

  return (
    <div>
      <div className="hero">
        <div className="mark" aria-hidden>
          🛡️
        </div>
        <div className="eyebrow">Scam-Proof Crypto Academy</div>
        <h1>
          {progress.learnerName ? `Welcome back, ${progress.learnerName}.` : 'Welcome to WiseBlock.'}
        </h1>
        <p className="lead">
          Learn crypto calmly and safely. Short lessons, real scam examples, and habits that protect
          you. No hype, no predictions, ever.
        </p>
        <div style={{ maxWidth: 460, margin: '0 auto' }}>
          <div className="progress-head">
            <span>
              {done} of {total} lessons
            </span>
            <span>{pct}%</span>
          </div>
          <ProgressBar value={done} total={total} />
        </div>
      </div>

      <div className="grid two" style={{ marginTop: 22 }}>
        <DailyReward />
        <div className="card flat">
          <div className="eyebrow">Quick paths</div>
          <h3 style={{ marginBottom: 10 }}>Practise what you learned</h3>
          <div className="stack" style={{ gap: 9 }}>
            <button className="btn block" onClick={() => navigate('/game')}>
              🕵️ Scam Spotter mini-game
            </button>
            <button className="btn block" onClick={() => navigate('/personality')}>
              🧭 Crypto Personality Quiz
            </button>
            <button className="btn block" onClick={() => navigate('/concierge')}>
              💬 Ask the Concierge
            </button>
            <button className="btn block" onClick={() => navigate('/badges')}>
              🏅 Your badges
            </button>
          </div>
        </div>
      </div>

      <div className="section-title">
        <h2>Your path</h2>
      </div>
      <div className="stack">
        {modules.map((mod) => {
          const moduleDone = mod.lessons.filter((l) => progress.completedLessons.includes(l.id)).length
          const hasBadge = progress.badges.includes(mod.id)
          return (
            <button key={mod.id} className="module-card" onClick={() => navigate(`/module/${mod.id}`)}>
              <span className="module-index" style={{ borderColor: mod.accent, color: mod.accent }}>
                {mod.index}
              </span>
              <span>
                <span className="module-head">
                  <h3>{mod.title}</h3>
                  {hasBadge && <span className="chip">{mod.badge.icon} Badge</span>}
                </span>
                <span className="module-sub" style={{ display: 'block' }}>
                  {mod.subtitle}
                </span>
                <span className="module-meta">
                  <span>
                    {moduleDone}/{mod.lessons.length} lessons
                  </span>
                </span>
                <span style={{ display: 'block', marginTop: 8 }}>
                  <ProgressBar value={moduleDone} total={mod.lessons.length} thin />
                </span>
              </span>
              <span className="muted small module-cta">
                {moduleDone === 0 ? 'Start' : moduleDone === mod.lessons.length ? 'Review' : 'Continue'} →
              </span>
            </button>
          )
        })}
      </div>

      <div className="section-title">
        <h2>Badges</h2>
      </div>
      <Badges />

      <div className="section-title">
        <h2>Trusted tools</h2>
      </div>
      <p className="small muted" style={{ marginTop: 0 }}>
        Well-known places to check data. Reach them from official links. None of them needs your seed
        phrase.
      </p>
      <div className="link-row">
        {partnerLinks.map((p) => (
          <a className="partner" key={p.name} href={p.url} target="_blank" rel="noreferrer noopener">
            <b>{p.name} ↗</b>
            <span>{p.blurb}</span>
          </a>
        ))}
      </div>

      <div className="footer-note">
        <p>{disclaimer}</p>
        <button
          className="btn ghost small"
          onClick={() => {
            if (window.confirm('Reset all WiseBlock progress on this device?')) resetProgress()
          }}
        >
          Reset progress
        </button>
      </div>
    </div>
  )
}
