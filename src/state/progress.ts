import { useSyncExternalStore } from 'react'

export type ProgressState = {
  onboarded: boolean
  learnerName: string
  completedLessons: string[]
  quizCorrect: number
  quizTotal: number
  badges: string[]
  streak: number
  coins: number
  lastCheckIn: string | null
  scamSpotterBest: number
  personality: string | null
  graduatedAt: string | null
  soundOn: boolean
}

const STORAGE_KEY = 'wiseblock.progress.v1'

const initial: ProgressState = {
  onboarded: false,
  learnerName: '',
  completedLessons: [],
  quizCorrect: 0,
  quizTotal: 0,
  badges: [],
  streak: 0,
  coins: 0,
  lastCheckIn: null,
  scamSpotterBest: 0,
  personality: null,
  graduatedAt: null,
  soundOn: true,
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initial
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return { ...initial, ...parsed }
  } catch {
    return initial
  }
}

let state: ProgressState = load()
const listeners = new Set<() => void>()

function emit() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* storage unavailable - keep in memory */
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useProgress(): ProgressState {
  return useSyncExternalStore(subscribe, () => state, () => state)
}

export function todayKey(date = new Date()): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function daysBetween(a: string, b: string): number {
  const da = new Date(`${a}T00:00:00`)
  const db = new Date(`${b}T00:00:00`)
  return Math.round((db.getTime() - da.getTime()) / 86_400_000)
}

export function canCheckIn(s: ProgressState = state): boolean {
  return s.lastCheckIn !== todayKey()
}

export function checkIn(): { awarded: number; streak: number } {
  const today = todayKey()
  if (state.lastCheckIn === today) return { awarded: 0, streak: state.streak }

  let streak = 1
  if (state.lastCheckIn) {
    const gap = daysBetween(state.lastCheckIn, today)
    if (gap === 1) streak = state.streak + 1
    else if (gap <= 0) streak = state.streak
  }
  const awarded = 10 + Math.min(streak, 7) * 5
  state = { ...state, lastCheckIn: today, streak, coins: state.coins + awarded }
  emit()
  return { awarded, streak }
}

export function completeLesson(lessonId: string) {
  if (state.completedLessons.includes(lessonId)) return
  state = {
    ...state,
    completedLessons: [...state.completedLessons, lessonId],
    coins: state.coins + 5,
  }
  emit()
}

export function recordQuiz(correct: number, total: number) {
  state = {
    ...state,
    quizCorrect: state.quizCorrect + correct,
    quizTotal: state.quizTotal + total,
  }
  emit()
}

export function earnBadge(moduleId: string) {
  if (state.badges.includes(moduleId)) return
  state = { ...state, badges: [...state.badges, moduleId], coins: state.coins + 25 }
  emit()
}

export function saveScamSpotter(score: number) {
  state = {
    ...state,
    scamSpotterBest: Math.max(state.scamSpotterBest, score),
    coins: state.coins + Math.max(0, score),
  }
  emit()
}

export function setPersonality(result: string) {
  state = { ...state, personality: result }
  emit()
}

export function finishOnboarding(name: string) {
  state = { ...state, onboarded: true, learnerName: name.trim() }
  emit()
}

export function graduate() {
  if (state.graduatedAt) return
  state = { ...state, graduatedAt: new Date().toISOString(), coins: state.coins + 100 }
  emit()
}

export function toggleSound() {
  state = { ...state, soundOn: !state.soundOn }
  emit()
}

export function resetProgress() {
  state = { ...initial, onboarded: true, learnerName: state.learnerName }
  emit()
}
