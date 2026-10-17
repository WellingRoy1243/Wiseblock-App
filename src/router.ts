import { useEffect, useState } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'module'; moduleId: string }
  | { name: 'lesson'; moduleId: string; lessonId: string }
  | { name: 'game' }
  | { name: 'personality' }
  | { name: 'concierge' }
  | { name: 'badges' }
  | { name: 'graduate' }

function parse(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '')
  const parts = clean.split('/').filter(Boolean)
  switch (parts[0]) {
    case 'module':
      return parts[1] ? { name: 'module', moduleId: parts[1] } : { name: 'home' }
    case 'lesson':
      return parts[1] && parts[2]
        ? { name: 'lesson', moduleId: parts[1], lessonId: parts[2] }
        : { name: 'home' }
    case 'game':
      return { name: 'game' }
    case 'personality':
      return { name: 'personality' }
    case 'concierge':
      return { name: 'concierge' }
    case 'badges':
      return { name: 'badges' }
    case 'graduate':
      return { name: 'graduate' }
    default:
      return { name: 'home' }
  }
}

export function navigate(path: string) {
  const next = path.startsWith('#') ? path : `#${path}`
  if (window.location.hash === next) return
  window.location.hash = next
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash))
  useEffect(() => {
    const onChange = () => {
      setRoute(parse(window.location.hash))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
