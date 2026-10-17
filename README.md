# WiseBlock — The Scam-Proof Crypto Academy

Teach beginners the fundamentals of crypto *safely*: clean, calm, short lessons with built-in
micro-quizzes, interactive cards, and real scam examples.

Tone: steady, factual, friendly, simple English, zero hype.
Reminder shown throughout: **Scammer Beware — Not Financial Advice**.

## What is in here

Five modules, ten lessons each (50 lessons). Every lesson uses the **WiseBlock Lesson Template**
of eight visual elements on one scrollable page:

1. Lesson title
2. Micro-intro (2–3 lines)
3. Visual card (definition or key idea)
4. Short section (3–5 lines)
5. Example / analogy card
6. Short section (why this matters — the usefulness)
7. Micro-quiz (1–2 questions)
8. Recap card (3 bullets)

| # | Module | Theme |
|---|--------|-------|
| 1 | Crypto Apprentice | What crypto is, why Bitcoin exists, first safety habits |
| 2 | Blockchain Beginner | Blocks, transparency, mining, consensus, double-spend, decentralisation |
| 3 | Wallet Warrior | Hot/cold wallets, seed phrases, keys, self-custody vs exchanges, **Seed Phrase 101** card |
| 4 | Scam-Proof Strategist | Romance scams, pumps, fake apps, drainers, FTX & Mt. Gox, **red flag cards** |
| 5 | The Sovereign Starter | Research, testnets, personal risk, tools, graduation |

## Core features

- Module list, scrollable lesson pages, per-module and overall progress tracking
- Badges (one per module plus **WiseBlock Graduate**)
- Daily check-in rewards with a streak counter
- Micro-quizzes with instant explanations
- **Scam Spotter** mini-game (10 messages, mixed scam/legitimate, randomised)
- **Crypto Personality Quiz** (4 result styles, each with a habit and a warning)
- **AI Concierge** — an offline, lesson-only assistant (no account, no tracking, no advice)
- Onboarding flow with three safety promises, and a motivational graduation screen
- Dark teal WiseBlock palette, calm and low-stimulus

## Stack

Vite 8 + React 19 + TypeScript, no UI framework and no backend. Progress is stored in the
browser's `localStorage` under `wiseblock.progress.v1`; there is no server, account or tracking.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server on http://localhost:3000
npm run build        # typecheck (tsc -b) + production build
npm run lint         # oxlint
npm run check:content   # validates every lesson against the lesson-template rules
npm run check:ssr       # renders every screen to HTML in Node to catch runtime errors
```

## Editing content

Content lives in `src/content/`:

- `module1.ts` … `module5.ts` — lesson data
- `extras.ts` — trusted partner links, red flag cards, scam spotter scenarios,
  personality quiz, concierge knowledge base
- `index.ts` — module registry and lookup helpers

Keep the lesson-template rules: short sections, no long paragraphs, no hype words, no jargon
without an explanation. `npm run check:content` enforces the structural rules, so run it after
editing content.

### Module generator prompt

> Create the module **[Module Name]** using the WiseBlock Lesson Template.
>
> Produce 10 lessons that flow logically. Use short sections, cards, micro-quizzes, and a recap
> card for each lesson. Tone must follow the WiseBlock philosophy: calm, simple, safety-first,
> no hype. All lessons must fit on one scrollable page.
