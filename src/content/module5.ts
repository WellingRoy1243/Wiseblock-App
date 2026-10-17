import type { Module } from '../types'

export const module5: Module = {
  id: 'sovereign-starter',
  index: 5,
  title: 'The Sovereign Starter',
  subtitle: 'Research, test, and stand on your own',
  description:
    'Put everything together: research calmly, practise on testnets, and understand your own risk.',
  accent: '#a78bfa',
  badge: {
    id: 'sovereign-starter',
    name: 'WiseBlock Graduate',
    icon: '🎓',
    description: 'You research safely, test carefully, and know your own risk.',
  },
  lessons: [
    {
      id: 'm5l1',
      title: 'Researching Safely',
      intro:
        'Good research starts with boring sources.\nOfficial sites, documentation and public records beat social posts.',
      visualCard: {
        label: 'Key idea',
        title: 'Source order',
        body: 'Read the primary source first: the project\u2019s own documents, then independent coverage. Promotion comes last.',
      },
      sectionA: {
        heading: 'A calm research order',
        lines: [
          'Start with the official documentation and change history.',
          'Check independent reviews and public records.',
          'Look for who is behind it and how long they have worked openly.',
          'Read the risks section, if there is one.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Reading the label, not the advert',
        body: 'The advert sells the feeling. The label tells you what is inside.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Promotion is designed to skip your judgement.',
          'Independent sources show what the seller left out.',
          'A short, ordered routine beats hours of scrolling.',
        ],
      },
      quiz: [
        {
          question: 'Which source should you read first?',
          options: [
            'Influencer posts',
            'Official documentation and public records',
            'Comment sections',
            'Paid adverts',
          ],
          answerIndex: 1,
          explanation: 'Primary sources come before promotion.',
        },
      ],
      recap: [
        'Start with official documents and public records.',
        'Independent coverage reveals what is missing.',
        'Promotion comes last, if at all.',
      ],
    },
    {
      id: 'm5l2',
      title: 'Reading a Project Without Hype',
      intro:
        'Strip away the slogans and ask plain questions.\nThe answers tell you more than any chart.',
      visualCard: {
        label: 'Key idea',
        title: 'Four plain questions',
        body: 'What does it do? Who runs it? What could go wrong? Who holds the supply?',
      },
      sectionA: {
        heading: 'What to look for',
        lines: [
          'A clear purpose you can explain in one sentence.',
          'Named people or a genuinely open community.',
          'Real code activity rather than announcements.',
          'A supply spread across many holders, not a few.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Kicking the tyres',
        body: 'The paint shines. You still check the engine, the brakes, and the mileage.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'If nobody can explain the purpose, there may not be one.',
          'Concentrated supply makes pumps and dumps easier.',
          'Plain questions save you from polished stories.',
        ],
      },
      quiz: [
        {
          question: 'What does a supply held by a few wallets suggest?',
          options: [
            'Strong community',
            'Higher risk of price manipulation',
            'Better security',
            'Lower fees',
          ],
          answerIndex: 1,
          explanation: 'Concentrated holdings make manipulation easier.',
        },
        {
          question: 'If a project\u2019s purpose cannot be explained simply, what should you do?',
          options: [
            'Invest a little anyway',
            'Wait until it is clear',
            'Ask the promoter repeatedly',
            'Ignore it and copy others',
          ],
          answerIndex: 1,
          explanation: 'Clarity should come before commitment.',
        },
      ],
      recap: [
        'Ask four plain questions before anything else.',
        'Watch for concentrated supply.',
        'Wait for clarity rather than guessing.',
      ],
    },
    {
      id: 'm5l3',
      title: 'Testnets: Practise for Free',
      intro:
        'A testnet is a copy of a network with no real money.\nIt is the safest place to learn.',
      visualCard: {
        label: 'Definition',
        title: 'Testnet',
        body: 'A practice network with valueless test coins. It behaves much like the real chain.',
      },
      sectionA: {
        heading: 'What you can practise',
        lines: [
          'Create and restore a wallet without risking funds.',
          'Send test coins and watch confirmations appear.',
          'Try new tools and apps before trusting them.',
          'Learn what an approval request looks like.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A driving school car',
        body: 'Same controls, dual brakes, no traffic fines. You learn the moves without the stakes.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Mistakes on a testnet cost nothing.',
          'Practice builds the calm that real money demands.',
          'Test coins have no value, so never buy them.',
        ],
      },
      quiz: [
        {
          question: 'What are testnet coins worth?',
          options: ['The same as real coins', 'Nothing', 'Half the market price', 'Whatever you pay'],
          answerIndex: 1,
          explanation: 'Testnet coins are valueless practice tokens.',
        },
      ],
      recap: [
        'Testnets let you practise with no real money.',
        'Restore, send and approve as practice.',
        'Test coins have no value and are never sold.',
      ],
    },
    {
      id: 'm5l4',
      title: 'Understanding Your Risk',
      intro:
        'Risk is personal, not a number someone else can pick for you.\nSleep, savings and family all matter.',
      visualCard: {
        label: 'Key idea',
        title: 'Risk is a range, not a rule',
        body: 'What suits one person can ruin another. Only you know your finances and your nerves.',
      },
      sectionA: {
        heading: 'Questions to answer honestly',
        lines: [
          'Would a large drop change your daily life?',
          'Do you have savings outside crypto?',
          'Can you sleep while the market moves?',
          'Are there people relying on this money?',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Buying shoes',
        body: 'The same pair fits two people differently. Advice without your measurements is guesswork.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Other people\u2019s risk appetite is not a plan.',
          'Honest answers prevent decisions you regret.',
          'Smaller exposure keeps you thinking clearly.',
        ],
      },
      quiz: [
        {
          question: 'Who can decide your risk level?',
          options: [
            'A popular influencer',
            'You, based on your own situation',
            'The biggest exchange',
            'The project team',
          ],
          answerIndex: 1,
          explanation: 'Risk depends on personal circumstances.',
        },
      ],
      recap: [
        'Risk depends on personal circumstances.',
        'Copying someone else\u2019s appetite is guesswork.',
        'Smaller exposure protects clear thinking.',
      ],
    },
    {
      id: 'm5l5',
      title: 'Money You Can Afford to Lose',
      intro:
        'This single rule prevents most financial disasters.\nOnly commit money whose loss would not change your life.',
      visualCard: {
        label: 'Key idea',
        title: 'The survivable amount',
        body: 'The amount you could lose entirely and still pay your bills, sleep, and stay calm.',
      },
      sectionA: {
        heading: 'What to keep separate',
        lines: [
          'Emergency savings stay untouched.',
          'Rent, food and loan money stay untouched.',
          'Borrowed money never enters.',
          'Start smaller than feels exciting.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A lifeboat, not the whole ship',
        body: 'You take the smaller boat out for a row. The ship stays where it cannot be lost.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Volatility becomes manageable when the money is spare.',
          'Debt turns a dip into a crisis.',
          'Surviving the market is more important than winning it quickly.',
        ],
      },
      quiz: [
        {
          question: 'Which money should never be used for crypto?',
          options: [
            'Spare money set aside',
            'Emergency savings and borrowed funds',
            'A small practice amount',
            'Gift money you can lose',
          ],
          answerIndex: 1,
          explanation: 'Essential and borrowed funds never belong in volatile assets.',
        },
      ],
      recap: [
        'Only use money whose loss you could absorb.',
        'Keep essentials and borrowing out entirely.',
        'Surviving matters more than speed.',
      ],
    },
    {
      id: 'm5l6',
      title: 'Records and Taxes, Simply',
      intro:
        'Keep simple records from the start.\nFuture you will be grateful for ten minutes of work.',
      visualCard: {
        label: 'Key idea',
        title: 'A simple log',
        body: 'Date, amount, asset, price, and purpose. A basic sheet is enough to start.',
      },
      sectionA: {
        heading: 'Why keeping records helps',
        lines: [
          'Rules differ by country, and they change.',
          'Exchange exports are easier with a saved history.',
          'Clear records reduce stress and errors later.',
          'Ask a local professional for your specific duties.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Keeping receipts',
        body: 'You rarely need them at the till. You always need them at the desk.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Crypto records are harder to rebuild than bank statements.',
          'Good habits early prevent messy audits later.',
          'This is organisation, not financial advice.',
        ],
      },
      quiz: [
        {
          question: 'What is a sensible first record-keeping habit?',
          options: [
            'Log each transaction with date, amount and price',
            'Keep everything only in your head',
            'Screenshot random charts',
            'Delete exchange emails',
          ],
          answerIndex: 0,
          explanation: 'A simple dated log covers most future needs.',
        },
      ],
      recap: [
        'Log date, amount, asset, price and purpose.',
        'Rules vary by country and change over time.',
        'Simple records prevent later stress.',
      ],
    },
    {
      id: 'm5l7',
      title: 'Privacy and Digital Hygiene',
      intro:
        'Privacy lowers your chances of being targeted.\nSmall changes reduce how much strangers know.',
      visualCard: {
        label: 'Key idea',
        title: 'Reduce your footprint',
        body: 'Share less publicly, use strong unique passwords, and keep devices updated.',
      },
      sectionA: {
        heading: 'Practical habits',
        lines: [
          'Avoid posting balances or wallet screenshots.',
          'Use a password manager and unique passwords.',
          'Turn on two-factor authentication where offered.',
          'Keep your phone and computer updated.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Drawing the curtains',
        body: 'Nothing changes inside the room. Fewer people know what is in it.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Targeted attacks follow visible wealth.',
          'Reused passwords turn one breach into many.',
          'Updates close doors attackers already know about.',
        ],
      },
      quiz: [
        {
          question: 'Why avoid posting wallet screenshots?',
          options: [
            'They use data',
            'They reveal addresses and balances that can draw targeting',
            'They are against the rules',
            'They slow the network',
          ],
          answerIndex: 1,
          explanation: 'Public details about your holdings invite targeting.',
        },
      ],
      recap: [
        'Share less about your holdings publicly.',
        'Use unique passwords and two-factor authentication.',
        'Keep devices updated.',
      ],
    },
    {
      id: 'm5l8',
      title: 'Your Crypto Personality',
      intro:
        'People hold crypto in different ways for different reasons.\nKnowing your style helps you pick safer habits.',
      visualCard: {
        label: 'Key idea',
        title: 'Style shapes risk',
        body: 'A patient long-term holder and a curious experimenter need different safety setups.',
      },
      sectionA: {
        heading: 'Why self-knowledge helps',
        lines: [
          'It tells you which mistakes you are most likely to make.',
          'It guides wallet choices and how much to keep active.',
          'It turns generic advice into something personal.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Packing for your own trip',
        body: 'A beach holiday and a mountain hike need different bags. The trip decides the packing.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Generic rules stay abstract until they match your habits.',
          'Your result suggests one practical next step.',
          'No style is better than another.',
        ],
      },
      quiz: [
        {
          question: 'What is the crypto personality quiz for?',
          options: [
            'Predicting prices',
            'Suggesting practical habits that fit your style',
            'Choosing what to buy',
            'Ranking your intelligence',
          ],
          answerIndex: 1,
          explanation: 'It matches habits to your style, not forecasts.',
        },
      ],
      recap: [
        'Different holders need different safety setups.',
        'Self-knowledge reveals your likely mistakes.',
        'The result suggests a habit, not an investment.',
      ],
    },
    {
      id: 'm5l9',
      title: 'Trusted Tools',
      intro:
        'A few well-known tools cover most beginner needs.\nUse them from official links and never share keys with them.',
      visualCard: {
        label: 'Key idea',
        title: 'Tools read, you decide',
        body: 'Good tools show data. None of them should ever ask for your seed phrase.',
      },
      sectionA: {
        heading: 'What each tool is good for',
        lines: [
          'CoinGecko: checking prices, market data and project basics.',
          'TradingView: reviewing charts and price history.',
          'Block explorers: confirming your own transactions.',
          'CoinMarketCap: comparing listings and supply details.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Instruments on a dashboard',
        body: 'They report speed and fuel. They do not drive the car for you.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Data tools remove guesswork about what happened.',
          'None replaces your own judgement.',
          'Reaching them from official links keeps you safe.',
        ],
      },
      quiz: [
        {
          question: 'What should no legitimate data tool ever ask for?',
          options: ['Your public address', 'Your seed phrase', 'A coin name', 'A chart period'],
          answerIndex: 1,
          explanation: 'No legitimate tool needs your seed phrase.',
        },
      ],
      recap: [
        'Use a small set of known tools.',
        'Data tools inform your decisions.',
        'None should ever ask for keys or seed phrases.',
      ],
    },
    {
      id: 'm5l10',
      title: 'Graduation: Your Ongoing Routine',
      intro:
        'You have completed the WiseBlock path.\nHere is the short routine that keeps it useful.',
      visualCard: {
        label: 'Key idea',
        title: 'The WiseBlock routine',
        body: 'Protect keys. Verify sources. Research calmly. Use only spare money. Review monthly.',
      },
      sectionA: {
        heading: 'Your monthly review',
        lines: [
          'Check that backups still work.',
          'Revoke permissions you no longer use.',
          'Update devices and apps.',
          'Re-read one lesson to keep it fresh.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Changing the smoke alarm battery',
        body: 'A short task on a set day. It matters most on the day it is needed.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Routines keep good habits from fading.',
          'Threats change, so reviews should repeat.',
          'You now know enough to keep learning safely.',
        ],
      },
      quiz: [
        {
          question: 'How often should you review wallet permissions and backups?',
          options: ['Never', 'On a regular schedule, such as monthly', 'Only after a loss', 'Once every ten years'],
          answerIndex: 1,
          explanation: 'Regular reviews keep habits and backups reliable.',
        },
        {
          question: 'What is the WiseBlock safety baseline?',
          options: [
            'Chase the fastest gains',
            'Protect keys and verify sources before acting',
            'Follow the loudest account',
            'Ignore backups',
          ],
          answerIndex: 1,
          explanation: 'Key protection and source checks come first.',
        },
      ],
      recap: [
        'Run a short monthly review.',
        'Test backups and revoke unused permissions.',
        'Protect keys and verify sources, always.',
      ],
    },
  ],
}
