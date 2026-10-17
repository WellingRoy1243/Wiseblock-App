export type QuizQuestion = {
  question: string
  options: string[]
  answerIndex: number
  explanation: string
}

export type Card = {
  label: string
  title: string
  body: string
}

export type Section = {
  heading: string
  lines: string[]
}

/** One lesson = the WiseBlock Lesson Template (8 visual elements). */
export type Lesson = {
  id: string
  title: string
  /** Element 2 - micro-intro, 2-3 lines. */
  intro: string
  /** Element 3 - visual card: definition or key idea. */
  visualCard: Card
  /** Element 4 - short section, 3-5 lines. */
  sectionA: Section
  /** Element 5 - example / analogy card. */
  analogyCard: Card
  /** Element 6 - short section: why this matters (usefulness). */
  sectionB: Section
  /** Element 7 - micro-quiz, 1-2 questions. */
  quiz: QuizQuestion[]
  /** Element 8 - recap card, exactly 3 bullets. */
  recap: string[]
  /** Optional interactive extra (seed phrase card, red-flag card, ...). */
  interactive?: { kind: 'seed' | 'redflags'; title: string; body: string }
}

export type ModuleBadge = {
  id: string
  name: string
  icon: string
  description: string
}

export type Module = {
  id: string
  index: number
  title: string
  subtitle: string
  description: string
  accent: string
  badge: ModuleBadge
  lessons: Lesson[]
}
