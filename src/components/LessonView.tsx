import { useState } from 'react'
import type { Module, Lesson } from '../types'
import Quiz from './Quiz'
import { AnalogyCard, RecapCard, SectionBlock, VisualCard } from './Cards'
import { RedFlagCards, SeedCard } from './Interactive'
import ProgressBar from './ProgressBar'
import { completeLesson, earnBadge, useProgress } from '../state/progress'
import { navigate } from '../router'
import { toast } from '../state/toast'

type Props = { mod: Module; lesson: Lesson; index: number }

export default function LessonView({ mod, lesson, index }: Props) {
  const progress = useProgress()
  const [quizDone, setQuizDone] = useState(false)
  const [quizScore, setQuizScore] = useState<string>('')
  const done = progress.completedLessons.includes(lesson.id)
  const isLast = index === mod.lessons.length - 1
  const nextLesson = mod.lessons[index + 1]

  const moduleCompleted = mod.lessons.filter((l) => progress.completedLessons.includes(l.id)).length

  function finish() {
    completeLesson(lesson.id)
    toast(done ? 'Lesson already complete.' : '+5 coins. Lesson complete.')
    const remaining = mod.lessons.filter(
      (l) => l.id !== lesson.id && !progress.completedLessons.includes(l.id),
    )
    if (remaining.length === 0 && !progress.badges.includes(mod.id)) {
      earnBadge(mod.id)
      toast(`Badge earned: ${mod.badge.name} ${mod.badge.icon}`)
    }
  }

  return (
    <div>
      <div className="lesson-top">
        <button className="btn ghost small" onClick={() => navigate(`/module/${mod.id}`)}>
          ← {mod.title}
        </button>
        <span>
          Lesson {index + 1} of {mod.lessons.length}
        </span>
      </div>

      <ProgressBar value={moduleCompleted} total={mod.lessons.length} thin />
      <div className="small muted" style={{ margin: '6px 0 18px' }}>
        {mod.badge.icon} {mod.title} — {moduleCompleted}/{mod.lessons.length} complete
      </div>

      <div className="stack">
        {/* 1. Lesson title + 2. Micro-intro */}
        <div>
          <div className="eyebrow">Lesson {index + 1}</div>
          <h1 style={{ marginBottom: 10 }}>{lesson.title}</h1>
          <p className="intro-text">
            {lesson.intro.split('\n').map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        {/* 3. Visual card */}
        <VisualCard card={lesson.visualCard} />

        {/* 4. Short section */}
        <SectionBlock section={lesson.sectionA} />

        {/* 5. Example / analogy card */}
        <AnalogyCard card={lesson.analogyCard} />

        {/* 6. Short section - why this matters */}
        <SectionBlock section={lesson.sectionB} />

        {/* Optional interactive extra (Seed Phrase 101 / Red flag cards) */}
        {lesson.interactive?.kind === 'seed' && (
          <SeedCard title={lesson.interactive.title} body={lesson.interactive.body} />
        )}
        {lesson.interactive?.kind === 'redflags' && (
          <RedFlagCards title={lesson.interactive.title} body={lesson.interactive.body} />
        )}

        {/* 7. Micro-quiz */}
        <Quiz
          questions={lesson.quiz}
          onAllAnswered={(correct, total) => {
            setQuizDone(true)
            setQuizScore(`${correct}/${total}`)
          }}
        />

        {/* 8. Recap card */}
        <RecapCard bullets={lesson.recap} />

        <div className="card flat">
          {!quizDone && !done && (
            <p className="small muted" style={{ marginTop: 0 }}>
              Answer the micro-quiz above to unlock completion.
            </p>
          )}
          {quizDone && (
            <p className="small muted" style={{ marginTop: 0 }}>
              Quiz score: <b style={{ color: 'var(--mint)' }}>{quizScore}</b>. A score below full
              marks is fine. Re-read anything unclear.
            </p>
          )}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn primary" disabled={!quizDone || done} onClick={finish}>
              {done ? '✓ Lesson complete' : 'Mark lesson complete'}
            </button>
            {done && !isLast && nextLesson && (
              <button
                className="btn"
                onClick={() => navigate(`/lesson/${mod.id}/${nextLesson.id}`)}
              >
                Next lesson →
              </button>
            )}
            {done && isLast && (
              <button className="btn" onClick={() => navigate(`/module/${mod.id}`)}>
                Back to module →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
