import { useState } from 'react'
import type { QuizQuestion } from '../types'
import { recordQuiz } from '../state/progress'

type Props = {
  questions: QuizQuestion[]
  onAllAnswered?: (correct: number, total: number) => void
}

export default function Quiz({ questions, onAllAnswered }: Props) {
  const [answered, setAnswered] = useState<number[]>(() => questions.map(() => -1))
  const allAnswered = answered.every((a) => a >= 0)
  const correctCount = answered.filter((a, i) => a === questions[i].answerIndex).length

  function choose(qi: number, oi: number) {
    if (answered[qi] >= 0) return
    const next = [...answered]
    next[qi] = oi
    setAnswered(next)
    recordQuiz(oi === questions[qi].answerIndex ? 1 : 0, 1)
    if (next.every((a) => a >= 0) && onAllAnswered) {
      const correct = next.filter((a, i) => a === questions[i].answerIndex).length
      onAllAnswered(correct, questions.length)
    }
  }

  return (
    <div className="quiz">
      <div className="card-label">Micro-quiz</div>
      {questions.map((q, qi) => {
        const picked = answered[qi]
        return (
          <div key={q.question} style={{ marginBottom: qi === questions.length - 1 ? 0 : 18 }}>
            <div className="quiz-q">{q.question}</div>
            {q.options.map((opt, oi) => {
              const isPicked = picked === oi
              const isRight = oi === q.answerIndex
              const cls = picked < 0 ? '' : isRight ? 'correct' : isPicked ? 'wrong' : ''
              return (
                <button
                  key={opt}
                  className={`option ${cls}`}
                  disabled={picked >= 0}
                  onClick={() => choose(qi, oi)}
                >
                  <span className="key">{String.fromCharCode(65 + oi)}</span>
                  <span>{opt}</span>
                  {picked >= 0 && isRight ? <span style={{ marginLeft: 'auto' }}>✓</span> : null}
                </button>
              )
            })}
            {picked >= 0 && <div className="explain">{q.explanation}</div>}
          </div>
        )
      })}
      {allAnswered && (
        <p className="small muted" style={{ margin: '12px 0 0' }}>
          You answered {correctCount} of {questions.length} correctly. Review anything that surprised
          you.
        </p>
      )}
    </div>
  )
}
