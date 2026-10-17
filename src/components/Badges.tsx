import { modules } from '../content'
import { useProgress } from '../state/progress'

export default function Badges() {
  const progress = useProgress()
  const earned = modules.filter((m) => progress.badges.includes(m.id))
  return (
    <div>
      <div className="progress-head">
        <span>Badges earned</span>
        <span>
          {earned.length} / {modules.length}
        </span>
      </div>
      <div className="badge-grid">
        {modules.map((m) => {
          const has = progress.badges.includes(m.id)
          return (
            <div className={`badge ${has ? 'earned' : ''}`} key={m.id}>
              <span className="ico" aria-hidden>
                {m.badge.icon}
              </span>
              <div className="nm" style={{ color: has ? 'var(--mint)' : undefined }}>
                {m.badge.name}
              </div>
              <div className="ds">{has ? m.badge.description : 'Locked'}</div>
            </div>
          )
        })}
        <div className={`badge ${progress.graduatedAt ? 'earned' : ''}`}>
          <span className="ico" aria-hidden>
            🎓
          </span>
          <div className="nm" style={{ color: progress.graduatedAt ? 'var(--mint)' : undefined }}>
            WiseBlock Graduate
          </div>
          <div className="ds">
            {progress.graduatedAt ? 'Complete every module and the game' : 'Locked'}
          </div>
        </div>
      </div>
    </div>
  )
}
