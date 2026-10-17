import { canCheckIn, checkIn, useProgress } from '../state/progress'
import { toast } from '../state/toast'

export default function DailyReward() {
  const progress = useProgress()
  const available = canCheckIn(progress)

  return (
    <div className="card flat" style={{ borderColor: 'rgba(255,200,97,0.35)' }}>
      <div className="eyebrow" style={{ color: 'var(--amber)' }}>
        Daily reward
      </div>
      <h3 style={{ marginBottom: 4 }}>Your steady check-in</h3>
      <p className="small muted">
        A short visit each day keeps the habits fresh. Check in for coins and a growing streak.
      </p>
      <div className="module-meta" style={{ marginBottom: 12 }}>
        <span className="chip flame">🔥 Streak <b>{progress.streak}</b></span>
        <span className="chip">🪙 Coins <b>{progress.coins}</b></span>
      </div>
      <button
        className="btn primary block"
        disabled={!available}
        onClick={() => {
          const { awarded, streak } = checkIn()
          if (awarded > 0) toast(`Checked in. +${awarded} coins, ${streak}-day streak.`)
        }}
      >
        {available ? 'Check in now' : 'Already checked in today'}
      </button>
    </div>
  )
}
