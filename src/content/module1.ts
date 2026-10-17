import type { Module } from '../types'

export const module1: Module = {
  id: 'crypto-apprentice',
  index: 1,
  title: 'Crypto Apprentice',
  subtitle: 'The basics, calmly explained',
  description:
    'Start with what crypto is, why Bitcoin was created, and the simple safety habits that protect beginners.',
  accent: '#2fd4c4',
  badge: {
    id: 'crypto-apprentice',
    name: 'Crypto Apprentice',
    icon: '🌱',
    description: 'You understand what crypto is and how to stay safe from day one.',
  },
  lessons: [
    {
      id: 'm1l1',
      title: 'What Crypto Really Is',
      intro:
        'Crypto is money and records kept by a network of computers instead of one company.\nNo single bank sits in the middle. That is the whole idea, and everything else builds on it.',
      visualCard: {
        label: 'Definition',
        title: 'Cryptocurrency',
        body: 'Digital value that people can send to each other directly. A shared record keeps track of who owns what.',
      },
      sectionA: {
        heading: 'The simple version',
        lines: [
          'Money normally moves through a middleman, such as a bank.',
          'Crypto moves through a shared record that many computers keep in sync.',
          'The record is public, so anyone can check it.',
          'Ownership is proven with a secret code, not a signature.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A notebook everyone can read',
        body: 'Imagine one notebook copied to thousands of desks. Everyone can read it, and new lines must match everywhere. No single person owns the notebook.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Knowing who holds your money tells you who to trust.',
          'With crypto, that trust shifts to maths and the network.',
          'This is useful, and it also means there is no support line to call.',
        ],
      },
      quiz: [
        {
          question: 'What makes crypto different from a normal bank balance?',
          options: [
            'It cannot be spent',
            'A network keeps the record instead of one bank',
            'It is always worth more over time',
            'Only governments can hold it',
          ],
          answerIndex: 1,
          explanation: 'The key difference is the shared record kept by many computers.',
        },
      ],
      recap: [
        'Crypto is digital value moved without a single middleman.',
        'A shared public record tracks who owns what.',
        'Access is proven by a secret code you must protect.',
      ],
    },
    {
      id: 'm1l2',
      title: 'Digital Money vs Bank Money',
      intro:
        'Most money today is already digital. Your salary is a number in a system.\nThe difference is who keeps that number and who can change it.',
      visualCard: {
        label: 'Key idea',
        title: 'Custody',
        body: 'Custody means who actually controls the money. A bank holds your balance. In crypto, you can hold it yourself.',
      },
      sectionA: {
        heading: 'Two ways to hold value',
        lines: [
          'Bank money lives in a database the bank controls.',
          'The bank can freeze, reverse, or limit a payment.',
          'Crypto lives on a public record you can hold keys for.',
          'Payments are final once confirmed and cannot be reversed.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A coat check vs your own pocket',
        body: 'A coat check keeps your coat and hands it back when you ask. Your own pocket keeps it always, but nobody returns it if you lose it.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Final payments are freedom and risk at the same time.',
          'A wrong address can mean money is gone for good.',
          'Self-custody removes the middleman and also removes the safety net.',
        ],
      },
      quiz: [
        {
          question: 'What happens to a confirmed crypto payment?',
          options: [
            'A bank can reverse it',
            'It is final and cannot be undone',
            'It expires after a week',
            'It needs a second approval',
          ],
          answerIndex: 1,
          explanation: 'Crypto payments are final. This is why addresses must be checked carefully.',
        },
        {
          question: 'Custody describes...',
          options: [
            'The price of a coin',
            'Who controls the money',
            'The speed of a payment',
            'The name of a wallet app',
          ],
          answerIndex: 1,
          explanation: 'Custody is about control, not price or speed.',
        },
      ],
      recap: [
        'Bank money is controlled by the bank.',
        'Crypto can be controlled by you directly.',
        'Final payments mean mistakes are permanent.',
      ],
    },
    {
      id: 'm1l3',
      title: 'Why Bitcoin Exists',
      intro:
        'Bitcoin started in 2009, after the 2008 banking crisis.\nPeople wanted money that no single company could quietly control.',
      visualCard: {
        label: 'Key idea',
        title: 'Fixed supply',
        body: 'Bitcoin will only ever have 21 million coins. No manager can print more when it suits them.',
      },
      sectionA: {
        heading: 'What it set out to do',
        lines: [
          'Let two people pay each other without a bank.',
          'Keep a record that anyone can verify.',
          'Limit the supply so it cannot be inflated at will.',
          'Run on rules, written in code, that everyone can read.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A rulebook with no referee',
        body: 'Every player holds the same rulebook. Cheating is obvious because thousands of copies no longer match. No referee is needed to settle disputes.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Bitcoin is the first crypto, and most others react to it.',
          'Its fixed supply is a design choice, not a promise.',
          'Understanding it helps you judge every other coin you meet.',
        ],
      },
      quiz: [
        {
          question: 'How many bitcoins can ever exist?',
          options: ['Unlimited, it grows each year', '21 million', '1 billion', 'It changes with demand'],
          answerIndex: 1,
          explanation: 'The supply is capped at 21 million by the rules of the network.',
        },
      ],
      recap: [
        'Bitcoin launched in 2009 after a banking crisis.',
        'It removes banks from direct peer payments.',
        'Its supply is capped at 21 million coins.',
      ],
    },
    {
      id: 'm1l4',
      title: 'The Problem Bitcoin Solves',
      intro:
        'Before crypto, sending value across the world meant trusting several middlemen.\nEach one could fail, charge fees, or refuse.',
      visualCard: {
        label: 'The problem',
        title: 'Trust in a middleman',
        body: 'Two strangers could not settle a payment without a third party both of them trusted.',
      },
      sectionA: {
        heading: 'What changed',
        lines: [
          'A shared record replaced the trusted third party.',
          'Two strangers can now settle a payment directly.',
          'The network checks the record instead of a company.',
          'Rules are visible, so anyone can audit the system.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Chess instead of a referee',
        body: 'Two players can finish a game if they both know the rules. They do not need someone to sit between them and confirm every move.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'This solves a real coordination problem, not just a payment one.',
          'It explains why crypto is global and always awake.',
          'It also shows the cost: you carry more responsibility yourself.',
        ],
      },
      quiz: [
        {
          question: 'What did Bitcoin replace for direct payments?',
          options: [
            'The need to trust a middleman',
            'The need for electricity',
            'The need for computers',
            'The need for a price',
          ],
          answerIndex: 0,
          explanation: 'The network replaces the trusted third party.',
        },
      ],
      recap: [
        'Middlemen added cost, delay, and single points of failure.',
        'A shared record lets strangers settle directly.',
        'Freedom from middlemen adds personal responsibility.',
      ],
    },
    {
      id: 'm1l5',
      title: 'Who Runs Crypto?',
      intro:
        'There is no head office for Bitcoin. No CEO decides tomorrow\u2019s rules.\nThousands of independent computers follow the same software.',
      visualCard: {
        label: 'Key idea',
        title: 'No single owner',
        body: 'A network of unrelated computers runs the system. Anyone can join and help maintain it.',
      },
      sectionA: {
        heading: 'Who does what',
        lines: [
          'Miners and validators add new entries to the record.',
          'Node operators keep and share the full history.',
          'Developers suggest changes, but cannot force them.',
          'Users choose whether to accept a change.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'An open street market',
        body: 'Nobody owns the market. Traders, rulekeepers, and visitors all keep it running. To change a rule, most of them must agree.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'No boss means no one to complain to and no one to trust blindly.',
          'It also means the network cannot be shut down by one decision.',
          'When you hear "the crypto company", ask which part is actually decentralised.',
        ],
      },
      quiz: [
        {
          question: 'Who can force a rule change on Bitcoin?',
          options: [
            'The founder',
            'The largest exchange',
            'No single person, users and operators must accept it',
            'The government of one country',
          ],
          answerIndex: 2,
          explanation: 'Changes only take effect when participants accept them.',
        },
      ],
      recap: [
        'Crypto networks have no single owner.',
        'Miners, nodes, developers and users each play a role.',
        'Rule changes need broad acceptance to stick.',
      ],
    },
    {
      id: 'm1l6',
      title: 'Myth vs Truth: Anonymity',
      intro:
        'A common claim is that crypto is anonymous.\nIn practice, most blockchains are public and permanent.',
      visualCard: {
        label: 'Myth',
        title: '"Crypto is anonymous"',
        body: 'Most blockchains are pseudonymous. Your address is not your name, but every payment is recorded and visible forever.',
      },
      sectionA: {
        heading: 'What the record shows',
        lines: [
          'Anyone can see amounts and addresses on a public explorer.',
          'Once an address is linked to you, its history is exposed.',
          'Exchanges record your identity when you buy or sell.',
          'Careless sharing of an address can reveal your balance.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Writing in a public notebook under a nickname',
        body: 'The nickname hides your name, but the handwriting and every entry stay in the book for good.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Scammers rely on the belief that crypto cannot be traced.',
          'Assuming anonymity can lead to careless mistakes.',
          'Treat your public addresses as public information.',
        ],
      },
      quiz: [
        {
          question: 'Is Bitcoin anonymous?',
          options: [
            'Yes, nothing is recorded',
            'No, it is pseudonymous and permanent',
            'Only when using a phone',
            'Yes, if you use a nickname',
          ],
          answerIndex: 1,
          explanation: 'Addresses hide names but every payment stays on the public record.',
        },
      ],
      recap: [
        'Most crypto is pseudonymous, not anonymous.',
        'Address history is public and permanent.',
        'Treat addresses as public information.',
      ],
    },
    {
      id: 'm1l7',
      title: 'Myth vs Truth: Fast Riches',
      intro:
        'Another common story is that crypto makes people rich quickly.\nPrices move both ways, and many people lose heavily.',
      visualCard: {
        label: 'Myth',
        title: '"Crypto is free money"',
        body: 'Crypto is a volatile market. Value can fall as fast as it rises, and nothing is guaranteed.',
      },
      sectionA: {
        heading: 'What is actually true',
        lines: [
          'Some people made large gains, and others lost everything.',
          'Volatility means prices swing hard in both directions.',
          'Promises of guaranteed returns are a classic warning sign.',
          'Learning the basics reduces avoidable mistakes.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A rough sea, not a swimming pool',
        body: 'Calm water is easy to predict. The sea is not. Without training and respect for it, it is dangerous.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Steady learning beats chasing quick gains.',
          'Greed makes people skip the safety checks that matter.',
          'WiseBlock teaches skill, not predictions.',
        ],
      },
      quiz: [
        {
          question: 'What should you do when a stranger promises guaranteed crypto profits?',
          options: [
            'Invest quickly before it closes',
            'Treat it as a strong warning sign',
            'Ask for a bigger bonus',
            'Borrow money to join',
          ],
          answerIndex: 1,
          explanation: 'Guaranteed returns do not exist. This promise marks a likely scam.',
        },
      ],
      recap: [
        'Crypto prices are volatile in both directions.',
        'Guaranteed profits are a warning sign.',
        'Skill and patience beat hype.',
      ],
    },
    {
      id: 'm1l8',
      title: 'Early Safety Habits',
      intro:
        'Safety is not one big decision. It is a set of small habits.\nStart them on day one, before any money is involved.',
      visualCard: {
        label: 'Key idea',
        title: 'Slow is safe',
        body: 'Most losses come from rushing. Checking twice costs nothing and prevents the worst outcomes.',
      },
      sectionA: {
        heading: 'Five habits to build now',
        lines: [
          'Never share your secret phrase or private keys with anyone.',
          'Verify every address and website before you act.',
          'Keep learning materials and money in separate places.',
          'Ignore messages that create urgency or fear.',
          'Practise with small amounts first.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Locking your front door',
        body: 'You do not think about it each evening. It is simply a habit, and it prevents the same problem every time.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Habits work when you are tired, rushed, or excited.',
          'Scammers aim precisely at those moments.',
          'A calm routine is your best defence.',
        ],
      },
      quiz: [
        {
          question: 'Someone asks for your seed phrase to "unlock a bonus". What do you do?',
          options: [
            'Share it quickly',
            'Share only half',
            'Refuse, nobody legitimate needs it',
            'Send it by email instead',
          ],
          answerIndex: 2,
          explanation: 'A seed phrase is never needed by anyone else. Ever.',
        },
        {
          question: 'Why start with small amounts?',
          options: [
            'To avoid learning',
            'To practise with low risk while you learn',
            'Because small amounts grow faster',
            'To hide from taxes',
          ],
          answerIndex: 1,
          explanation: 'Small practice balances learning against risk.',
        },
      ],
      recap: [
        'Never share your seed phrase or private keys.',
        'Verify addresses and websites before acting.',
        'Practise with small amounts while learning.',
      ],
    },
    {
      id: 'm1l9',
      title: 'Your First Three Rules',
      intro:
        'You now know more than most beginners.\nThree rules carry you through everything that follows.',
      visualCard: {
        label: 'Key idea',
        title: 'The WiseBlock baseline',
        body: 'Protect the keys. Check the source. Accept only what you understand.',
      },
      sectionA: {
        heading: 'Rule by rule',
        lines: [
          'Protect the keys: whoever holds them holds the money.',
          'Check the source: confirm a link came from a trusted place.',
          'Understand it first: if you cannot explain it simply, wait.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A climbing harness',
        body: 'You check it before every climb, not because you expect to fall, but because the check is cheap and the fall is not.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'These rules apply to every future lesson.',
          'They cover the vast majority of real-world losses.',
          'Repeating them is not nagging, it is practice.',
        ],
      },
      quiz: [
        {
          question: 'Which rule covers a stranger\u2019s "urgent" link?',
          options: [
            'Protect the keys',
            'Check the source',
            'Accept only what you understand',
            'None of them',
          ],
          answerIndex: 1,
          explanation: 'Verifying where a link came from is checking the source.',
        },
      ],
      recap: [
        'Protect the keys above all else.',
        'Confirm the source before you click.',
        'Only act on what you can explain simply.',
      ],
    },
    {
      id: 'm1l10',
      title: 'Module 1 Checkpoint',
      intro:
        'This is your first module checkpoint.\nAnswer calmly and use it to confirm what stuck.',
      visualCard: {
        label: 'Key idea',
        title: 'Checkpoints, not exams',
        body: 'A checkpoint shows you what to review. It is not a test you can fail badly.',
      },
      sectionA: {
        heading: 'What you covered',
        lines: [
          'What crypto is and who controls it.',
          'Why Bitcoin was built and the problem it solves.',
          'The difference between hype and reality.',
          'The safety habits that protect beginners.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A knot check before you sail',
        body: 'You check each knot as you learn it. Later, the checks become automatic and fast.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Reviewing early lessons makes later ones easier.',
          'Passing this checkpoint earns your first badge.',
          'The badge marks a habit, not just a score.',
        ],
      },
      quiz: [
        {
          question: 'Which statement about custody is correct?',
          options: [
            'Exchanges always return lost funds',
            'Whoever holds the keys controls the money',
            'Crypto payments can be reversed by a bank',
            'Crypto is fully anonymous',
          ],
          answerIndex: 1,
          explanation: 'Control follows the keys.',
        },
        {
          question: 'Which habit prevents the most common beginner losses?',
          options: [
            'Buying during hype',
            'Sharing a seed phrase with support',
            'Never sharing keys and verifying sources',
            'Using the newest app immediately',
          ],
          answerIndex: 2,
          explanation: 'Key protection and source checks stop most attacks.',
        },
      ],
      recap: [
        'Crypto runs on shared records, not single owners.',
        'Final payments demand careful checking.',
        'Habits protect you better than knowledge alone.',
      ],
    },
  ],
}
