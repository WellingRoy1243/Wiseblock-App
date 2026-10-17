import { useSyncExternalStore } from 'react'

export type Toast = { id: number; text: string }

let toasts: Toast[] = []
let nextId = 1
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useToasts(): Toast[] {
  return useSyncExternalStore(subscribe, () => toasts, () => toasts)
}

export function toast(text: string) {
  const item = { id: nextId++, text }
  toasts = [...toasts, item]
  emit()
  window.setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== item.id)
    emit()
  }, 2600)
}
