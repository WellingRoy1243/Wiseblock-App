export default function ProgressBar({
  value,
  total,
  thin = false,
}: {
  value: number
  total: number
  thin?: boolean
}) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100)
  return (
    <div className={`bar ${thin ? 'thin' : ''}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <span style={{ width: `${pct}%` }} />
    </div>
  )
}
