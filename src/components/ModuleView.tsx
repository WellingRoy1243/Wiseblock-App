import type { Module } from '../types'
import { useProgress } from '../state/progress'
import { navigate } from '../router'
import ProgressBar from './ProgressBar'

export default function ModuleView({ mod }: { mod: Module }) {
  const progress = useProgress()
  const doneCount = mod.lessons.filter((l) => progress.completedLessons.includes(l.id)).length
  const hasBadge = progress.badges.includes(mod.id)

  return (
    <div>
      <div className="lesson-top">
        <button className="btn ghost small" onClick={() => navigate('/')}>
          ← All modules
        </button>
        <span>Module {mod.index} of 5</span>
      </div>

      <div className="card">
        <div className="module-head">
          <span className="module-index" style={{ borderColor: mod.accent }}>
            {mod.index}
          </span>
          <div>
            <div className="eyebrow">{mod.subtitle}</div>
            <h1 style={{ margin: 0, fontSize: '1.7rem' }}>{mod.title}</h1>
          </div>
        </div>
        <p className="muted small" style={{ marginTop: 12 }}>
          {mod.description}
        </p>
        <div className="progress-head">
          <span>
            {doneCount} / {mod.lessons.length} lessons
          </span>
          <span style={{ color: hasBadge ? 'var(--mint)' : undefined }}>
            {hasBadge ? `${mod.badge.icon} ${mod.badge.name} earned` : `${mod.badge.icon} Badge locked`}
          </span>
        </div>
        <ProgressBar value={doneCount} total={mod.lessons.length} />
      </div>

      <div className="section-title">
        <h2>Lessons</h2>
      </div>
      <div className="stack">
        {mod.lessons.map((lesson, i) => {
          const done = progress.completedLessons.includes(lesson.id)
          return (
            <button
              key={lesson.id}
              className="module-card"
              onClick={() => navigate(`/lesson/${mod.id}/${lesson.id}`)}
            >
              <span
                className="module-index"
                style={{ color: done ? 'var(--mint)' : undefined, borderColor: done ? 'var(--mint)' : undefined }}
              >
                {done ? '✓' : i + 1}
              </span>
              <span>
                <span className="module-head">
                  <h3>{lesson.title}</h3>
                </span>
                <span className="module-sub" style={{ display: 'block' }}>
                  {lesson.intro.split('\n')[0].slice(0, 96)}…
                </span>
              </span>
              <span className="muted small module-cta">{done ? 'Review' : 'Start'} →</span>
            </button>
          )
        })}
      </div>

      {doneCount === mod.lessons.length && (
        <div className="card" style={{ marginTop: 16 }}>
          <div className="eyebrow">Module complete</div>
          <h3>
            {mod.badge.icon} {mod.badge.name}
          </h3>
          <p className="small muted">{mod.badge.description}</p>
          {mod.index < 5 ? (
            <button className="btn primary" onClick={() => navigate('/')}>
              Continue to Module {mod.index + 1} →
            </button>
          ) : (
            <button className="btn primary" onClick={() => navigate('/graduate')}>
              Your graduation →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
