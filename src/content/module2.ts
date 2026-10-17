import type { Module } from '../types'

export const module2: Module = {
  id: 'blockchain-beginner',
  index: 2,
  title: 'Blockchain Beginner',
  subtitle: 'How the record actually works',
  description:
    'See how blocks, miners and nodes keep one shared record honest without a central owner.',
  accent: '#4fe0c0',
  badge: {
    id: 'blockchain-beginner',
    name: 'Blockchain Beginner',
    icon: '🧱',
    description: 'You can explain blocks, consensus and decentralisation in plain words.',
  },
  lessons: [
    {
      id: 'm2l1',
      title: 'What a Blockchain Does',
      intro:
        'A blockchain is a record book that many computers keep in sync.\nIts job is simple: agree on the order of events.',
      visualCard: {
        label: 'Definition',
        title: 'Blockchain',
        body: 'A list of entries, grouped into blocks, linked in order and copied across many computers.',
      },
      sectionA: {
        heading: 'Its single job',
        lines: [
          'Record who sent what, and when, in one agreed order.',
          'Let anyone verify the record without asking permission.',
          'Make past entries very hard to change.',
          'Run the same way for every participant.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A shared receipt book',
        body: 'Each page holds a batch of receipts. Every page is numbered, and each new page references the last one so nothing can be slipped in later.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Order is what prevents cheating.',
          'A public record removes the need for a trusted keeper.',
          'Understanding this makes wallet and scam lessons clearer.',
        ],
      },
      quiz: [
        {
          question: 'What is the core job of a blockchain?',
          options: [
            'Increase prices',
            'Agree on one order of recorded events',
            'Store photos',
            'Replace the internet',
          ],
          answerIndex: 1,
          explanation: 'Agreeing on a single order of events is the core job.',
        },
      ],
      recap: [
        'A blockchain is a synced record held by many computers.',
        'Its purpose is one agreed order of events.',
        'Anyone can verify it without permission.',
      ],
    },
    {
      id: 'm2l2',
      title: 'Blocks and Chains',
      intro:
        'New entries are grouped into blocks.\nEach block points back to the one before it, forming a chain.',
      visualCard: {
        label: 'Key idea',
        title: 'Linked by a fingerprint',
        body: 'Each block stores a short fingerprint of the previous block. Change one block and every later fingerprint stops matching.',
      },
      sectionA: {
        heading: 'How linking protects history',
        lines: [
          'A block holds many entries plus a link to the previous block.',
          'Altering old data breaks the link for every block after it.',
          'Other computers notice and reject the broken version.',
          'This makes rewriting history expensive and obvious.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Sealed wax on a letter chain',
        body: 'Each letter is sealed with the mark of the last one. Break one seal and the whole chain of marks no longer fits.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Tamper resistance is the point of the chain structure.',
          'It lets strangers trust a record they did not write.',
          'It also means old mistakes stay visible.',
        ],
      },
      quiz: [
        {
          question: 'What happens if someone edits an old block?',
          options: [
            'Nothing changes',
            'Every later link stops matching',
            'The network deletes the coin',
            'The block becomes private',
          ],
          answerIndex: 1,
          explanation: 'Editing an old block breaks the chain of fingerprints.',
        },
      ],
      recap: [
        'Entries are batched into blocks.',
        'Each block points to the previous one.',
        'Editing history breaks the chain and is rejected.',
      ],
    },
    {
      id: 'm2l3',
      title: 'Transparency',
      intro:
        'Public blockchains are open books.\nYou can look up any payment without an account.',
      visualCard: {
        label: 'Key idea',
        title: 'Public ledger',
        body: 'A public ledger is a record anyone can read. Balances and transfers are visible to all.',
      },
      sectionA: {
        heading: 'What you can check',
        lines: [
          'Whether a payment arrived and how many confirmations it has.',
          'The total balance held at an address.',
          'Whether an address has been linked to known scams.',
          'When the next block was produced.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A noticeboard in the town square',
        body: 'Everyone can walk up and read it. Nothing is hidden, and nothing can be quietly removed.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Transparency helps you verify a payment yourself.',
          'It also helps you check an address before sending.',
          'Visible history is why anonymity claims are weak.',
        ],
      },
      quiz: [
        {
          question: 'What is a practical use of a public explorer?',
          options: [
            'Predicting tomorrow\u2019s price',
            'Confirming a payment arrived',
            'Recovering a lost phrase',
            'Increasing mining rewards',
          ],
          answerIndex: 1,
          explanation: 'Explorers are for verifying public records such as payments.',
        },
      ],
      recap: [
        'Public ledgers can be read by anyone.',
        'Explorers let you verify payments yourself.',
        'Visible history weakens claims of anonymity.',
      ],
    },
    {
      id: 'm2l4',
      title: 'Mining, Simply',
      intro:
        'Mining sounds mysterious but it is a job.\nMiners compete to add the next block of entries.',
      visualCard: {
        label: 'Key idea',
        title: 'Proof of work',
        body: 'Miners race to solve a hard puzzle. The first to solve it adds the next block and earns a reward.',
      },
      sectionA: {
        heading: 'What miners actually do',
        lines: [
          'Collect pending entries and check they are valid.',
          'Run a puzzle that takes effort and luck.',
          'Publish the finished block for everyone to verify.',
          'Receive new coins and fees for the work.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A lottery with real work',
        body: 'Buying tickets costs effort, so winning is not free. Faking results is not worth the cost.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'The effort is what makes attacking the chain expensive.',
          'Rewards are how new coins enter circulation.',
          'Fees rise when many people compete for space.',
        ],
      },
      quiz: [
        {
          question: 'Why does mining cost effort?',
          options: [
            'To slow down users',
            'To make tampering expensive',
            'To hide transactions',
            'To increase app downloads',
          ],
          answerIndex: 1,
          explanation: 'Costly work makes rewriting the chain impractical.',
        },
      ],
      recap: [
        'Miners add the next block of entries.',
        'Proof of work makes tampering expensive.',
        'Mining rewards bring new coins into use.',
      ],
    },
    {
      id: 'm2l5',
      title: 'Consensus: How Strangers Agree',
      intro:
        'Thousands of computers must agree on one record.\nConsensus is the set of rules they follow to do it.',
      visualCard: {
        label: 'Definition',
        title: 'Consensus',
        body: 'A method that lets unrelated computers accept the same record without a leader.',
      },
      sectionA: {
        heading: 'Two common methods',
        lines: [
          'Proof of work: spare computing power decides the next block.',
          'Proof of stake: locked coins decide who proposes the next block.',
          'In both, other computers verify the result.',
          'If the rules are broken, the block is discarded.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Raising hands in a village meeting',
        body: 'No mayor decides alone. The group follows an agreed procedure, and the result stands because most accept it.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Consensus is why no single party can rewrite the record.',
          'Different chains choose different trade-offs.',
          'It explains why changes take time and broad agreement.',
        ],
      },
      quiz: [
        {
          question: 'What is the role of consensus rules?',
          options: [
            'Set the price',
            'Let unrelated computers agree on one record',
            'Store passwords',
            'Speed up your internet',
          ],
          answerIndex: 1,
          explanation: 'Consensus produces agreement between independent computers.',
        },
      ],
      recap: [
        'Consensus lets strangers agree without a leader.',
        'Work and stake are two common methods.',
        'Verification by others keeps the rules honest.',
      ],
    },
    {
      id: 'm2l6',
      title: 'The Double-Spend Problem',
      intro:
        'Digital money can be copied perfectly.\nSo how do you stop someone spending the same coin twice?',
      visualCard: {
        label: 'The problem',
        title: 'Double spending',
        body: 'Because digital files copy easily, a dishonest user could try to send the same funds to two people.',
      },
      sectionA: {
        heading: 'How the network prevents it',
        lines: [
          'Every valid payment is recorded once, in one agreed order.',
          'Once recorded, those funds are marked as spent.',
          'The network rejects any later payment using the same funds.',
          'Confirmations make the first record increasingly final.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'One physical key to a door',
        body: 'You can copy a picture of the key, but only one copy opens the lock. The record decides which copy is real.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'This problem is why blockchains exist at all.',
          'It explains why confirmations matter before big payments.',
          'Waiting for confirmations is a safety habit, not a delay.',
        ],
      },
      quiz: [
        {
          question: 'What stops the same funds being spent twice?',
          options: [
            'Bank clerks',
            'One agreed order and rejection of repeats',
            'Slow internet',
            'A password reset',
          ],
          answerIndex: 1,
          explanation: 'A single agreed order marks funds as spent once.',
        },
        {
          question: 'Why wait for confirmations?',
          options: [
            'To pay more fees',
            'Because a record becomes harder to reverse',
            'To increase your balance',
            'To unlock a badge',
          ],
          answerIndex: 1,
          explanation: 'More confirmations mean the record is more settled.',
        },
      ],
      recap: [
        'Digital value copies easily, so double spending is a real risk.',
        'An agreed order marks funds as spent once.',
        'Confirmations increase certainty before large payments.',
      ],
    },
    {
      id: 'm2l7',
      title: 'Why Decentralisation Matters',
      intro:
        'Decentralised means no single point of control.\nThat has real benefits and real costs.',
      visualCard: {
        label: 'Key idea',
        title: 'Decentralisation',
        body: 'Control and copies are spread across many independent participants, so no single one can decide alone.',
      },
      sectionA: {
        heading: 'Benefits',
        lines: [
          'No single company can freeze the whole network.',
          'The record survives even if some computers go offline.',
          'Rules are public and hard to change quietly.',
        ],
      },
      sectionB: {
        heading: 'Costs and why it still matters',
        lines: [
          'Some things are slower because many parties must agree.',
          'Coordination is harder than in a single company.',
          'You gain resilience, and lose a support desk.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A village well vs one pipe',
        body: 'One pipe breaks and the town is dry. Many wells keep working even when one fails.',
      },
      quiz: [
        {
          question: 'What is a benefit of decentralisation?',
          options: [
            'Faster customer support',
            'No single point of failure or control',
            'Guaranteed profits',
            'Simpler passwords',
          ],
          answerIndex: 1,
          explanation: 'Spreading control removes a single point of failure.',
        },
      ],
      recap: [
        'Decentralisation spreads control across many parties.',
        'It adds resilience against single failures.',
        'It can also slow decisions and remove support options.',
      ],
    },
    {
      id: 'm2l8',
      title: 'Nodes: The Network Memory',
      intro:
        'Nodes are computers that keep a full copy of the record.\nThey do not mine, they remember and check.',
      visualCard: {
        label: 'Definition',
        title: 'Node',
        body: 'A computer that stores the blockchain and independently verifies every new block.',
      },
      sectionA: {
        heading: 'Why nodes matter',
        lines: [
          'They check that new blocks follow the rules.',
          'They share new blocks and payments with peers.',
          'They let users verify balances without trusting a company.',
          'Anyone can run one on modest hardware.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A library in every town',
        body: 'If the main library burns, copies elsewhere still hold the full text.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'More independent nodes mean more verification.',
          'Running your own node removes dependence on third parties.',
          'It is the quiet backbone that keeps claims honest.',
        ],
      },
      quiz: [
        {
          question: 'What does a node do?',
          options: [
            'Sets prices',
            'Keeps and verifies the record',
            'Sells hardware',
            'Approves wallets',
          ],
          answerIndex: 1,
          explanation: 'Nodes store the record and verify each new block.',
        },
      ],
      recap: [
        'Nodes keep full copies of the record.',
        'They verify every new block independently.',
        'Anyone can run one, which spreads verification.',
      ],
    },
    {
      id: 'm2l9',
      title: 'Trade-offs: Speed and Energy',
      intro:
        'Every chain makes choices between speed, cost, and security.\nNo design wins on all three.',
      visualCard: {
        label: 'Key idea',
        title: 'Trade-offs',
        body: 'More verification and independence usually mean slower or costlier transactions.',
      },
      sectionA: {
        heading: 'Common trade-offs',
        lines: [
          'Some chains process thousands of payments per second.',
          'Others process fewer, but spread control more widely.',
          'Proof of work uses real energy.',
          'Proof of stake uses far less energy but concentrates on large holders.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Choosing a delivery van',
        body: 'A small van is quick and cheap but carries little. A large truck carries more but is slower and hungrier.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Fast chains are not automatically safer chains.',
          'Understand what a design gives up before you trust it.',
          'Sensible claims about a chain mention its trade-offs.',
        ],
      },
      quiz: [
        {
          question: 'Which statement about blockchains is accurate?',
          options: [
            'One design is best at everything',
            'Every design trades speed, cost and security',
            'Energy use is always irrelevant',
            'Faster always means safer',
          ],
          answerIndex: 1,
          explanation: 'All designs make trade-offs.',
        },
      ],
      recap: [
        'Chains trade off speed, cost and security.',
        'Proof of work uses energy, proof of stake does not.',
        'Safer designs are not always the fastest.',
      ],
    },
    {
      id: 'm2l10',
      title: 'Module 2 Checkpoint',
      intro:
        'Time to confirm what you learned about the record itself.\nTake your time with each question.',
      visualCard: {
        label: 'Key idea',
        title: 'Review calmly',
        body: 'A checkpoint is a mirror. It shows strengths and gaps in plain sight.',
      },
      sectionA: {
        heading: 'What you covered',
        lines: [
          'How blocks link to protect history.',
          'How mining and consensus produce agreement.',
          'Why double spending is solved by ordering.',
          'What decentralisation costs and gains.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Checking the foundation',
        body: 'Before building higher, you confirm the base is solid. Later modules rest on this one.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Wallets and scams both depend on these mechanics.',
          'Knowing them stops you falling for false claims.',
          'You are now ready to hold keys yourself.',
        ],
      },
      quiz: [
        {
          question: 'Why can no single party rewrite the record?',
          options: [
            'Because of slow software',
            'Because linking and consensus make it costly and visible',
            'Because prices rise',
            'Because of a support team',
          ],
          answerIndex: 1,
          explanation: 'Linked blocks plus broad verification protect history.',
        },
        {
          question: 'What is a fair statement about decentralisation?',
          options: [
            'It always improves speed',
            'It adds resilience and removes some conveniences',
            'It removes all risk',
            'It is only about marketing',
          ],
          answerIndex: 1,
          explanation: 'Resilience comes with less convenience.',
        },
      ],
      recap: [
        'Linked blocks make tampering visible.',
        'Consensus produces one shared record.',
        'Decentralisation trades convenience for resilience.',
      ],
    },
  ],
}
