import { useState } from 'react'
import { redFlags } from '../content/extras'

const PRACTICE_WORDS = [
  'cougar',
  'bracket',
  'sunset',
  'harbour',
  'tunnel',
  'meadow',
  'lantern',
  'biscuit',
  'pepper',
  'anchor',
  'velvet',
  'kettle',
]

export function SeedCard({ title, body }: { title: string; body: string }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="seed-card">
      <div className="card-label" style={{ color: 'var(--amber)' }}>
        Interactive card
      </div>
      <h3>{title}</h3>
      <p className="small" style={{ color: '#ffe6b8' }}>
        {body}
      </p>
      <div className={`seed-words ${visible ? '' : 'hidden'}`} aria-hidden={!visible}>
        {PRACTICE_WORDS.map((w, i) => (
          <div className="seed-word" key={w}>
            {i + 1}. {w}
          </div>
        ))}
      </div>
      <button className="btn small" onClick={() => setVisible((v) => !v)}>
        {visible ? 'Cover the practice words' : 'Reveal practice words'}
      </button>
      <p className="small muted" style={{ margin: '10px 0 0' }}>
        Never reuse a phrase you have seen anywhere. Generate a real one inside your own wallet.
      </p>
    </div>
  )
}

export function RedFlagCards({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState<string | null>(redFlags[0]?.title ?? null)
  return (
    <div>
      <div className="card-label" style={{ color: 'var(--amber)' }}>
        Interactive cards
      </div>
      <h3>{title}</h3>
      <p className="small muted" style={{ marginTop: 0 }}>
        {body}
      </p>
      {redFlags.map((flag) => {
        const isOpen = open === flag.title
        return (
          <div className="redflag" key={flag.title}>
            <button onClick={() => setOpen(isOpen ? null : flag.title)} aria-expanded={isOpen}>
              <span>
                <span style={{ color: 'var(--amber)', marginRight: 8 }}>⚑</span>
                {flag.title}
              </span>
              <span className="muted small">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="redflag-body">
                <p style={{ marginBottom: 6 }}>{flag.body}</p>
                <p style={{ margin: 0 }}>
                  <strong>Response: </strong>
                  {flag.reaction}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
