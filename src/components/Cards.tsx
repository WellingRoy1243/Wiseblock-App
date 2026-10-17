import type { Card, Section } from '../types'

export function VisualCard({ card }: { card: Card }) {
  return (
    <div className="lesson-card visual">
      <div className="card-label">{card.label}</div>
      <h3>{card.title}</h3>
      <p style={{ margin: 0, color: '#dcf4f1' }}>{card.body}</p>
    </div>
  )
}

export function AnalogyCard({ card }: { card: Card }) {
  return (
    <div className="lesson-card analogy">
      <div className="card-label">{card.label}</div>
      <h3>{card.title}</h3>
      <p style={{ margin: 0, color: '#f3ead6' }}>{card.body}</p>
    </div>
  )
}

export function SectionBlock({ section }: { section: Section }) {
  return (
    <div>
      <h3>{section.heading}</h3>
      <ul className="lines">
        {section.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

export function RecapCard({ bullets }: { bullets: string[] }) {
  return (
    <div className="lesson-card recap">
      <div className="card-label">Recap</div>
      <ul className="lines">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}
