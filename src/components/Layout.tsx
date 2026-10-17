import type { ReactNode } from 'react'
import { useProgress } from '../state/progress'
import { useToasts } from '../state/toast'
import { navigate, useRoute } from '../router'

const navItems = [
  { label: 'Home', path: '/', match: 'home' },
  { label: 'Modules', path: '/module/crypto-apprentice', match: 'module' },
  { label: 'Scam Spotter', path: '/game', match: 'game' },
  { label: 'Personality', path: '/personality', match: 'personality' },
  { label: 'Concierge', path: '/concierge', match: 'concierge' },
  { label: 'Badges', path: '/badges', match: 'badges' },
  { label: 'Graduate', path: '/graduate', match: 'graduate' },
]

export default function Layout({ children }: { children: ReactNode }) {
  const progress = useProgress()
  const route = useRoute()
  const toasts = useToasts()

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <button className="brand" onClick={() => navigate('/')}>
            <span className="brand-mark" aria-hidden>
              🛡️
            </span>
            <span className="brand-text">
              <span className="brand-name">WiseBlock</span>
              <span className="brand-tag">Scam-Proof Academy</span>
            </span>
          </button>
          <span className="topbar-spacer" />
          <div className="hud">
            <span className="chip flame" title="Daily streak">
              🔥 <b>{progress.streak}</b>
            </span>
            <span className="chip" title="Coins earned">
              🪙 <b>{progress.coins}</b>
            </span>
            <span className="chip" title="Modules completed">
              🏅 <b>{progress.badges.length}</b>
            </span>
          </div>
        </div>
        <nav className="nav-row" aria-label="Main">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`navlink ${route.name === item.match ? 'active' : ''}`}
              onClick={() => navigate(item.match === 'module' ? '/module/crypto-apprentice' : item.path)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="shell wide">{children}</main>
      {toasts.map((t, i) => (
        <div className="toast" key={t.id} style={{ bottom: 22 + i * 48 }}>
          {t.text}
        </div>
      ))}
    </>
  )
}
