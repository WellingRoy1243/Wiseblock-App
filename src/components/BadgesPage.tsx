import { modules, personalityTypes, totalLessonCount } from '../content'
import { useProgress } from '../state/progress'
import { navigate } from '../router'
import Badges from './Badges'
import ProgressBar from './ProgressBar'

export default function BadgesPage() {
  const progress = useProgress()
  const total = totalLessonCount()
  const personality = personalityTypes.find((t) => t.id === progress.personality)

  return (
    <div>
      <div className="lesson-top">
        <button className="btn ghost small" onClick={() => navigate('/')}>
          ← Home
        </button>
        <span>Badges</span>
      </div>
      <h1>Your badges</h1>
      <p className="small muted" style={{ marginTop: 0 }}>
        Each badge marks a set of habits, not just a score.
      </p>
      <Badges />

      <div className="section-title">
        <h2>Your numbers</h2>
      </div>
      <div className="card">
        <div className="progress-head">
          <span>Overall progress</span>
          <span>
            {progress.completedLessons.length} / {total}
          </span>
        </div>
        <ProgressBar value={progress.completedLessons.length} total={total} />
        <div className="module-meta" style={{ marginTop: 14 }}>
          <span className="chip">Modules complete <b>{progress.badges.length} / {modules.length}</b></span>
          <span className="chip flame">🔥 Streak <b>{progress.streak}</b></span>
          <span className="chip">🪙 Coins <b>{progress.coins}</b></span>
          <span className="chip">🧠 Quiz correct <b>{progress.quizCorrect}/{progress.quizTotal || 0}</b></span>
          <span className="chip">🕵️ Spotter best <b>{progress.scamSpotterBest}</b></span>
        </div>
        {personality && (
          <p className="small muted" style={{ marginTop: 14, marginBottom: 0 }}>
            Personality: <b style={{ color: 'var(--mint)' }}>{personality.icon} {personality.name}</b>
          </p>
        )}
      </div>

      <div className="card flat" style={{ marginTop: 16 }}>
        <div className="eyebrow">Next step</div>
        {progress.graduatedAt ? (
          <>
            <h3>Close your graduation screen</h3>
            <button className="btn primary" onClick={() => navigate('/graduate')}>
              🎓 View graduation
            </button>
          </>
        ) : (
          <>
            <h3>Keep going</h3>
            <button className="btn primary" onClick={() => navigate('/')}>
              Back to your path
            </button>
          </>
        )}
      </div>
    </div>
  )
}
