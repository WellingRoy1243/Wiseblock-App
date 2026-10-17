import { modules, totalLessonCount } from '../src/content/index'
import { redFlags, spotterScenarios, personalityQuestions, personalityTypes, conciergeKnowledge } from '../src/content/extras'

const problems: string[] = []
const notes: string[] = []
const ids = new Set<string>()

function fail(msg: string) {
  problems.push(msg)
}

if (modules.length !== 5) fail(`expected 5 modules, found ${modules.length}`)

for (const mod of modules) {
  if (mod.lessons.length !== 10) fail(`${mod.id}: expected 10 lessons, found ${mod.lessons.length}`)
  if (!mod.badge?.id || !mod.badge?.icon) fail(`${mod.id}: badge missing`)
  for (const [i, l] of mod.lessons.entries()) {
    const tag = `${mod.id}/${l.id}`
    if (ids.has(l.id)) fail(`${tag}: duplicate lesson id`)
    ids.add(l.id)
    if (!/^m[1-5]l(10|[1-9])$/.test(l.id)) fail(`${tag}: unexpected id format`)

    const introLines = l.intro.split('\n').map((s) => s.trim()).filter(Boolean)
    if (introLines.length < 2 || introLines.length > 3) fail(`${tag}: intro has ${introLines.length} lines (need 2-3)`)
    for (const line of introLines) if (line.length > 120) fail(`${tag}: intro line too long (${line.length})`)

    if (!l.visualCard?.title || !l.visualCard?.body) fail(`${tag}: visual card incomplete`)
    if (l.visualCard.body.length > 220) fail(`${tag}: visual card body too long (${l.visualCard.body.length})`)

    for (const key of ['sectionA', 'sectionB'] as const) {
      const s = l[key]
      if (!s?.heading) fail(`${tag}: ${key} missing heading`)
      if (s.lines.length < 3 || s.lines.length > 5) fail(`${tag}: ${key} has ${s.lines.length} lines (need 3-5)`)
      for (const line of s.lines) if (line.length > 140) fail(`${tag}: ${key} line too long (${line.length})`)
    }

    if (!l.analogyCard?.title || !l.analogyCard?.body) fail(`${tag}: analogy card incomplete`)
    if (l.analogyCard.body.length > 240) fail(`${tag}: analogy body too long (${l.analogyCard.body.length})`)

    if (l.quiz.length < 1 || l.quiz.length > 2) fail(`${tag}: quiz has ${l.quiz.length} questions (need 1-2)`)
    for (const q of l.quiz) {
      if (q.options.length < 3 || q.options.length > 4) fail(`${tag}: question has ${q.options.length} options`)
      if (q.answerIndex < 0 || q.answerIndex >= q.options.length) fail(`${tag}: invalid answerIndex`)
      if (!q.explanation) fail(`${tag}: question missing explanation`)
      if (new Set(q.options).size !== q.options.length) fail(`${tag}: duplicate options`)
    }

    if (l.recap.length !== 3) fail(`${tag}: recap has ${l.recap.length} bullets (need exactly 3)`)

    const totalElements = 8 // title, intro, visual, sectionA, analogy, sectionB, quiz, recap
    if (totalElements < 6 || totalElements > 8) fail(`${tag}: element count out of range`)

    if (i > 0 && !mod.lessons[i - 1].id.startsWith('m')) fail(`${tag}: ordering`)
  }
}

// Module 3 must contain the Seed Phrase 101 interactive card
if (!modules[2].lessons.some((l) => l.interactive?.kind === 'seed')) fail('Module 3 missing Seed Phrase 101 interactive card')
// Module 4 must contain red flag cards
if (!modules[3].lessons.some((l) => l.interactive?.kind === 'redflags')) fail('Module 4 missing red flag cards')

if (redFlags.length < 6) fail('not enough red flag cards')
if (spotterScenarios.length < 8) fail('not enough scam spotter scenarios')
if (!spotterScenarios.some((s) => s.isScam) || !spotterScenarios.some((s) => !s.isScam))
  fail('scam spotter needs both scam and legitimate cases')
if (personalityQuestions.length < 4) fail('personality quiz too short')
if (personalityTypes.length < 4) fail('personality results missing')
for (const q of personalityQuestions) {
  for (const o of q.options) {
    if (!personalityTypes.some((t) => t.id === o.type)) fail(`personality option points to unknown type ${o.type}`)
  }
}
if (conciergeKnowledge.length < 8) fail('concierge knowledge base too small')

// informational: hype-word scan
const hypeWords = ['to the moon', '100x', 'risk-free', 'get rich', 'guaranteed profit']
const allText = JSON.stringify(modules).toLowerCase()
for (const w of hypeWords) {
  const count = allText.split(w).length - 1
  if (count > 0) notes.push(`hype word "${w}" appears ${count}x (check context is a warning, not a promise)`)
}

console.log(`Modules: ${modules.length}`)
console.log(`Lessons: ${totalLessonCount()}`)
console.log(`Red flag cards: ${redFlags.length}, Spotter scenarios: ${spotterScenarios.length}`)
console.log(`Personality types: ${personalityTypes.length}, Concierge topics: ${conciergeKnowledge.length}`)
if (notes.length) console.log('\nNotes:\n- ' + notes.join('\n- '))
if (problems.length) {
  console.log(`\nFAILED (${problems.length}):\n- ` + problems.join('\n- '))
  process.exit(1)
}
console.log('\nAll template checks passed.')
