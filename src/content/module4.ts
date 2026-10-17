import type { Module } from '../types'

export const module4: Module = {
  id: 'scam-proof-strategist',
  index: 4,
  title: 'Scam-Proof Strategist',
  subtitle: 'Real attacks, real defences',
  description:
    'Study the scams that actually take people\u2019s money, then build the reflexes that stop them.',
  accent: '#ffb454',
  badge: {
    id: 'scam-proof-strategist',
    name: 'Scam-Proof Strategist',
    icon: '🕵️',
    description: 'You can spot the common crypto scams before they reach your wallet.',
  },
  lessons: [
    {
      id: 'm4l1',
      title: 'How Scams Actually Work',
      intro:
        'Scams rarely rely on clever code.\nThey rely on emotion: urgency, trust, and fear of missing out.',
      visualCard: {
        label: 'Key idea',
        title: 'The scam playbook',
        body: 'Contact, trust, pressure, payment. Almost every crypto scam follows those four steps.',
      },
      sectionA: {
        heading: 'The four steps',
        lines: [
          'Contact: a message arrives out of nowhere.',
          'Trust: the sender acts friendly, official, or successful.',
          'Pressure: you must act now or lose the chance.',
          'Payment: you are pushed to send funds or keys.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A fishing line',
        body: 'The bait is chosen for you specifically. The hook only hurts after you take it.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Seeing the pattern makes each step easier to refuse.',
          'Stopping at the pressure stage costs nothing.',
          'Slow replies break most scams on their own.',
        ],
      },
      quiz: [
        {
          question: 'Which step do most scams rely on most?',
          options: ['Slow paperwork', 'Pressure and urgency', 'Long meetings', 'Public reviews'],
          answerIndex: 1,
          explanation: 'Urgency stops people thinking clearly.',
        },
      ],
      recap: [
        'Scams follow a repeatable four-step pattern.',
        'Emotion, not code, does the work.',
        'Pausing early defeats most attempts.',
      ],
    },
    {
      id: 'm4l2',
      title: 'Romance Scams',
      intro:
        'Long, patient and expensive.\nA stranger builds trust over weeks, then introduces an investment.',
      visualCard: {
        label: 'Key idea',
        title: '"Pig butchering"',
        body: 'A long relationship is built first. The "investment platform" appears later, run by the same group.',
      },
      sectionA: {
        heading: 'Warning signs',
        lines: [
          'The relationship moves fast and avoids video calls.',
          'They steer you to one specific app or website.',
          'Small withdrawals work at first to build belief.',
          'Larger deposits are then blocked behind "fees" and "taxes".',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A long con at a card table',
        body: 'You are allowed to win small hands early. The house takes everything back at the end.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'These scams cause the largest average losses.',
          'Victims are chosen for patience, not for greed.',
          'Any investment introduced by a new online partner deserves deep suspicion.',
        ],
      },
      quiz: [
        {
          question: 'A new online partner shows you a profitable investment app. What is the safest response?',
          options: [
            'Deposit a large amount quickly',
            'Refuse and treat it as a likely scam',
            'Borrow money to invest',
            'Ask their friends to verify',
          ],
          answerIndex: 1,
          explanation: 'Investment apps introduced by new partners are a top scam pattern.',
        },
        {
          question: 'Why do these scams allow small withdrawals?',
          options: [
            'To be generous',
            'To build false confidence before a larger deposit',
            'To test the network',
            'To comply with the law',
          ],
          answerIndex: 1,
          explanation: 'Small wins are proof that keeps the victim depositing more.',
        },
      ],
      recap: [
        'Romance scams build trust slowly, then sell an investment.',
        'Early small withdrawals are bait.',
        'Any investment from a new online partner is a red flag.',
      ],
    },
    {
      id: 'm4l3',
      title: 'Pump and Dump',
      intro:
        'Organisers buy a small, little-known coin quietly.\nThen they promote it loudly and sell into the rush.',
      visualCard: {
        label: 'Key idea',
        title: 'Manufactured hype',
        body: 'The price rise is caused by the promotion itself, not by anything the project built.',
      },
      sectionA: {
        heading: 'How it looks',
        lines: [
          'A sudden flood of posts promising a huge return.',
          'Anonymous organisers with no track record.',
          'Very low supply held by a few wallets.',
          'The chart spikes, then collapses within hours.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A crowd shouting about a shop',
        body: 'The shouters own the shop. They sell while the queue is longest.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'By the time you see the promotion, the setup is complete.',
          'Ordinary investors are the exit liquidity.',
          'Slow research beats fast excitement every time.',
        ],
      },
      quiz: [
        {
          question: 'What usually causes the price spike in a pump and dump?',
          options: [
            'A new product launch',
            'Coordinated promotion by holders',
            'Regulation changes',
            'Network upgrades',
          ],
          answerIndex: 1,
          explanation: 'The promotion itself moves the price.',
        },
      ],
      recap: [
        'Organisers buy before promoting.',
        'Hype is the product, not the project.',
        'Slow research avoids being the exit buyer.',
      ],
    },
    {
      id: 'm4l4',
      title: 'Fake Apps and Websites',
      intro:
        'A fake can look exactly like the real thing.\nThe goal is to make you type your seed phrase into it.',
      visualCard: {
        label: 'Key idea',
        title: 'Look-alike tools',
        body: 'Copied designs, similar names and paid adverts push you to the wrong app or site.',
      },
      sectionA: {
        heading: 'How to verify',
        lines: [
          'Reach the site from an official link you already trust, not an advert.',
          'Check the exact domain spelling, character by character.',
          'Read reviews from independent sources, not the app listing.',
          'Be wary of any wallet app that asks for your seed phrase.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A copy of your house key',
        body: 'It looks identical to the real one. Only the person holding it benefits.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'A genuine wallet never asks for your seed phrase to log in.',
          'Search adverts are a common delivery method.',
          'Bookmarking the real site in advance prevents most mistakes.',
        ],
      },
      quiz: [
        {
          question: 'A wallet app asks for your seed phrase to "restore access". What do you do?',
          options: [
            'Enter it to continue',
            'Close it and verify the real app from an official source',
            'Enter only half',
            'Email support first',
          ],
          answerIndex: 1,
          explanation: 'Real wallets never need your seed phrase to log in.',
        },
      ],
      recap: [
        'Fakes copy names and designs closely.',
        'Always reach sites from links you already trust.',
        'Never type a seed phrase into a wallet to log in.',
      ],
    },
    {
      id: 'm4l5',
      title: 'Wallet Drainer Links',
      intro:
        'A drainer is a website that asks you to approve a payment.\nThe approval lets it empty your wallet instead.',
      visualCard: {
        label: 'Key idea',
        title: 'Approval traps',
        body: 'Signing an approval can grant a contract permission to move your tokens later.',
      },
      sectionA: {
        heading: 'How to stay safe',
        lines: [
          'Read what you are approving, not just the headline.',
          'Use a separate wallet for experiments and new sites.',
          'Revoke permissions you no longer need.',
          'Never sign a message you do not understand.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Signing a blank cheque',
        body: 'The number is filled in later, and by then it is too late.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Theft happens through signatures, not broken encryption.',
          'A second, low-value wallet limits the damage.',
          'Regular permission checks are quick and calm.',
        ],
      },
      quiz: [
        {
          question: 'How do wallet drainers usually steal funds?',
          options: [
            'By guessing your password',
            'Through approvals you signed',
            'By breaking the blockchain',
            'By changing the price',
          ],
          answerIndex: 1,
          explanation: 'Drainers exploit permissions you granted.',
        },
        {
          question: 'Why keep a separate wallet for new sites?',
          options: [
            'To get more rewards',
            'To limit losses if something is malicious',
            'To speed up transactions',
            'To avoid fees',
          ],
          answerIndex: 1,
          explanation: 'A small separate wallet caps the damage.',
        },
      ],
      recap: [
        'Drainers work through signed approvals.',
        'Read and revoke permissions regularly.',
        'Use a separate wallet for experiments.',
      ],
    },
    {
      id: 'm4l6',
      title: 'Giveaways and Impersonation',
      intro:
        'Fake giveaways promise to double what you send.\nFake accounts copy the names of famous people and brands.',
      visualCard: {
        label: 'Key idea',
        title: 'The doubling trick',
        body: 'Anything that asks you to send funds first in order to receive more is a scam, without exception.',
      },
      sectionA: {
        heading: 'How it spreads',
        lines: [
          'Paid adverts or replies under popular posts.',
          'Accounts with a very similar name and photo.',
          'Countdown timers that create panic.',
          'Requests to send small "verification" amounts.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A magic money box',
        body: 'Coins go in. Nothing comes out. The magic is in the story, not the box.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Sending first to receive more never works.',
          'Lookalike accounts are cheap to create.',
          'Reputable people do not run doubling events.',
        ],
      },
      quiz: [
        {
          question: 'A giveaway asks you to send one coin to receive two. What is it?',
          options: ['A limited offer', 'A scam', 'A promotion', 'A testnet'],
          answerIndex: 1,
          explanation: 'Sending first to receive more is always a scam.',
        },
      ],
      recap: [
        'No legitimate giveaway asks you to pay first.',
        'Copycat accounts imitate trusted names.',
        'Timers and panic are part of the trick.',
      ],
    },
    {
      id: 'm4l7',
      title: 'Case Study: FTX',
      intro:
        'FTX was one of the largest crypto exchanges.\nIt collapsed in November 2022 and customers could not withdraw.',
      visualCard: {
        label: 'Case study',
        title: 'Custody risk in one event',
        body: 'Customer funds were used improperly, and the company collapsed. Users who trusted the exchange lost access to their money.',
      },
      sectionA: {
        heading: 'What the case shows',
        lines: [
          'An exchange balance is a promise, not a possession.',
          'Company accounts and customer accounts can be mixed.',
          'Founder Sam Bankman-Fried was later convicted of fraud.',
          'Recovery takes years and rarely returns everything.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A coat check with no rules',
        body: 'Your coat is only there if the shop keeps its promise. When it closes, the queue of owners is long.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Reputation and regulation reduce risk but remove none of it.',
          'Holding keys yourself removes the promise entirely.',
          'Spread your risk rather than trusting one company.',
        ],
      },
      quiz: [
        {
          question: 'What is the main lesson of the FTX collapse?',
          options: [
            'Exchanges cannot fail',
            'Leaving funds on an exchange is a promise you do not control',
            'Blockchains broke',
            'Seed phrases were stolen',
          ],
          answerIndex: 1,
          explanation: 'You rely on the company whenever it holds your keys.',
        },
      ],
      recap: [
        'Exchange balances are promises, not possessions.',
        'Large failures cost customers years of access.',
        'Self-custody removes that dependence.',
      ],
    },
    {
      id: 'm4l8',
      title: 'Case Study: Mt. Gox',
      intro:
        'Mt. Gox was the biggest bitcoin exchange in the early years.\nIt collapsed in 2014 after losing about 850,000 bitcoin.',
      visualCard: {
        label: 'Case study',
        title: 'Single points of failure',
        body: 'One company held coins for almost everyone, so one failure affected the whole market for years.',
      },
      sectionA: {
        heading: 'What the case shows',
        lines: [
          'Concentration creates systemic risk.',
          'Weak internal controls go unnoticed until it is too late.',
          'Legal recovery took many years and many court steps.',
          'Much of the bitcoin was never recovered.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'One bridge for a whole town',
        body: 'Convenient while it stands. When it falls, everyone is stranded at once.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'The same pattern repeats under different names.',
          'Diversifying custody spreads the risk.',
          'History is a cheap teacher if you read it.',
        ],
      },
      quiz: [
        {
          question: 'What does the Mt. Gox case illustrate?',
          options: [
            'The benefits of centralisation',
            'The risk of one company holding everyone\u2019s coins',
            'How mining works',
            'How to use testnets',
          ],
          answerIndex: 1,
          explanation: 'Concentrated custody creates one large failure point.',
        },
      ],
      recap: [
        'Mt. Gox collapsed after losing around 850,000 bitcoin.',
        'Concentrated custody creates shared risk.',
        'Recovery after a failure is slow and incomplete.',
      ],
    },
    {
      id: 'm4l9',
      title: 'Red Flag Cards',
      intro:
        'Most scams announce themselves in small details.\nOpen each card and learn the pattern.',
      visualCard: {
        label: 'Key idea',
        title: 'Patterns, not people',
        body: 'Scams reuse the same details. Learning the details lets you spot them anywhere.',
      },
      sectionA: {
        heading: 'Your new reflexes',
        lines: [
          'Urgency from a stranger is a warning, not a compliment.',
          'Requests for keys or seed phrases are always hostile.',
          'Profit promises with no downside describe a scam.',
          'One person pushing one app should raise your guard.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Weather signs',
        body: 'Dark clouds, a drop in pressure, a cold wind. Any one alone means little; together they mean storms.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Reflexes work faster than analysis.',
          'Recognising two red flags is usually enough.',
          'Trusting your pause protects your funds.',
        ],
      },
      interactive: {
        kind: 'redflags',
        title: 'Red flag cards',
        body: 'Tap each card to reveal what it means and how to react.',
      },
      quiz: [
        {
          question: 'How many red flags are enough to walk away?',
          options: ['Five or more', 'Two is already enough', 'Ten', 'Only a legal ruling counts'],
          answerIndex: 1,
          explanation: 'Two clear red flags are plenty of reason to stop.',
        },
      ],
      recap: [
        'Scams reuse the same details.',
        'Urgency and key requests are warnings.',
        'Two red flags are enough to walk away.',
      ],
    },
    {
      id: 'm4l10',
      title: 'Module 4 Checkpoint',
      intro:
        'You have studied the attacks people actually face.\nConfirm the defences before the badge.',
      visualCard: {
        label: 'Key idea',
        title: 'Defence in layers',
        body: 'Pause, verify, limit exposure. Three layers that cover most scams.',
      },
      sectionA: {
        heading: 'What you covered',
        lines: [
          'The four-step scam playbook.',
          'Romance scams, pumps, fakes and drainers.',
          'Two major failures with lasting lessons.',
          'Red flags you can now recognise quickly.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Home security layers',
        body: 'A locked door, a light, and a habit of checking. No single layer is perfect, together they work.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Practise in the Scam Spotter game to lock it in.',
          'Real defence is a routine, not a single decision.',
          'You no longer need to fear scams you can recognise.',
        ],
      },
      quiz: [
        {
          question: 'Which request should end a conversation immediately?',
          options: [
            'A request for your public address',
            'A request for your seed phrase',
            'A question about a lesson',
            'An invitation to a public forum',
          ],
          answerIndex: 1,
          explanation: 'No legitimate party needs your seed phrase.',
        },
        {
          question: 'What limits the damage of a malicious site?',
          options: [
            'Using a separate wallet with small balances',
            'Ignoring updates',
            'Sharing your phrase',
            'Sending more to test it',
          ],
          answerIndex: 0,
          explanation: 'A separate low-value wallet caps potential losses.',
        },
      ],
      recap: [
        'Scams follow predictable patterns.',
        'Pause, verify, and limit exposure.',
        'Practise recognition until it becomes reflex.',
      ],
    },
  ],
}
