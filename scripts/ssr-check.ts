// Renders the real app components to HTML in Node to catch runtime errors.
// Run with: rolldown scripts/ssr-check.ts -f esm -p node -o /tmp/ssr.mjs && node /tmp/ssr.mjs
const store = new Map<string, string>()

;(globalThis as any).localStorage = {
  getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
  setItem: (k: string, v: string) => void store.set(k, String(v)),
  removeItem: (k: string) => void store.delete(k),
}

;(globalThis as any).window = {
  location: { hash: '#/' },
  addEventListener() {},
  removeEventListener() {},
  scrollTo() {},
  setTimeout: (fn: () => void, ms: number) => setTimeout(fn, ms),
  confirm: () => false,
}

const React = await import('react')
const { renderToString } = await import('react-dom/server')
const { default: App } = await import('../src/App')
const progress = await import('../src/state/progress')

function render(hash: string): string {
  ;(globalThis as any).window.location.hash = hash
  return renderToString(React.createElement(App))
}

function expect(name: string, rawHtml: string, needles: string[]) {
  // renderToString inserts <!-- --> between adjacent text nodes; normalise before matching.
  const html = rawHtml.replace(/<!--.*?-->/g, '')
  const missing = needles.filter((n) => !html.toLowerCase().includes(n.toLowerCase()))
  if (missing.length) {
    console.log(`FAIL ${name}: missing ${missing.join(' | ')}`)
    process.exitCode = 1
  } else {
    console.log(`ok   ${name} (${html.length} chars)`)
  }
}

// 1. First visit shows onboarding
expect('onboarding', render('#/'), ['Welcome to WiseBlock', 'Learn crypto without the hype'])

// 2. After onboarding, home renders module list, badges, trusted tools
progress.finishOnboarding('Ada')
const home = render('#/')
expect('home', home, ['Welcome back, Ada', 'Your path', 'Crypto Apprentice', 'Blockchain Beginner', 'Wallet Warrior', 'Scam-Proof Strategist', 'The Sovereign Starter', 'Trusted tools', 'Scam Spotter', 'Badges'])

// 3. Lesson renders all 8 template elements
const lesson = render('#/lesson/crypto-apprentice/m1l1')
expect('lesson m1l1', lesson, ['What Crypto Really Is', 'Definition', 'Analogy', 'Why this matters', 'Micro-quiz', 'Recap', 'Mark lesson complete', 'Answer the micro-quiz'])

// 4. Seed Phrase 101 interactive card
const seed = render('#/lesson/wallet-warrior/m3l6')
expect('seed card', seed, ['Seed Phrase 101', 'Reveal practice words', 'cougar'])

// 5. Red flag cards interactive
const flags = render('#/lesson/scam-proof-strategist/m4l9')
expect('red flags', flags, ['Red flag cards', 'Urgency from a stranger', 'Anyone asks for your seed phrase'])

// 6. Scam spotter game
const game = render('#/game')
expect('scam spotter', game, ['Scam Spotter', 'This is a scam', 'This is legitimate', 'Message 1 of 10'])

// 7. Personality quiz
expect('personality', render('#/personality'), ['Crypto Personality Quiz', 'How do you usually start something new?'])

// 8. Concierge
expect('concierge', render('#/concierge'), ['WiseBlock Concierge', 'Ask a calm question', 'What is a seed phrase?'])

// 9. Badges page
expect('badges page', render('#/badges'), ['Your badges', 'Overall progress', 'WiseBlock Graduate'])

// 10. Graduate page incomplete state
expect('graduate gated', render('#/graduate'), ['Graduation', 'Still to finish', 'lessons'])

// 11. Complete every lesson, then graduation unlocks
for (const mod of (await import('../src/content/index')).modules) {
  for (const l of mod.lessons) progress.completeLesson(l.id)
  progress.earnBadge(mod.id)
}
progress.saveScamSpotter(9)
expect('graduate complete', render('#/graduate'), ['You finished the WiseBlock path', 'Staying safe is a routine', 'Scam Spotter'])

console.log(process.exitCode ? '\nSSR CHECK FAILED' : '\nSSR CHECK PASSED')
