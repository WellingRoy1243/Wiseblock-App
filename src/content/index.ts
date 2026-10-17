import type { Module } from '../types'
import { module1 } from './module1'
import { module2 } from './module2'
import { module3 } from './module3'
import { module4 } from './module4'
import { module5 } from './module5'

export const modules: Module[] = [module1, module2, module3, module4, module5]

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id)
}

export function getLesson(moduleId: string, lessonId: string) {
  const mod = getModule(moduleId)
  if (!mod) return undefined
  const index = mod.lessons.findIndex((l) => l.id === lessonId)
  if (index === -1) return undefined
  return { mod, lesson: mod.lessons[index], index }
}

export function allLessonIds(): string[] {
  return modules.flatMap((m) => m.lessons.map((l) => l.id))
}

export function totalLessonCount(): number {
  return allLessonIds().length
}

export * from './extras'
