import type { Module } from '../types'

export const module3: Module = {
  id: 'wallet-warrior',
  index: 3,
  title: 'Wallet Warrior',
  subtitle: 'Self-custody, keys and seeds',
  description:
    'Learn how wallets really work, why seed phrases matter, and when to hold your own keys.',
  accent: '#5ad1ff',
  badge: {
    id: 'wallet-warrior',
    name: 'Wallet Warrior',
    icon: '🛡️',
    description: 'You can protect keys, seed phrases and choose the right wallet.',
  },
  lessons: [
    {
      id: 'm3l1',
      title: 'What a Wallet Really Is',
      intro:
        'A wallet does not hold coins. It holds keys.\nThe coins live on the blockchain, and the keys prove they are yours.',
      visualCard: {
        label: 'Definition',
        title: 'Wallet',
        body: 'Software or hardware that stores keys and signs payments. It never stores the coins themselves.',
      },
      sectionA: {
        heading: 'What it actually manages',
        lines: [
          'Keys that prove ownership of an address.',
          'A list of addresses you control.',
          'The signing step that approves each payment.',
          'A view of balances read from the public record.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A keyring, not a vault',
        body: 'Your keyring opens doors. The rooms and their contents stay where they are. Lose the keyring and the rooms remain locked to you.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Backing up the keys is the same as backing up the money.',
          'Deleting an app without a backup can lose funds.',
          'Understanding this prevents most beginner wallet losses.',
        ],
      },
      quiz: [
        {
          question: 'What does a crypto wallet actually store?',
          options: ['The coins', 'The keys that control the coins', 'The price history', 'A bank account'],
          answerIndex: 1,
          explanation: 'Coins stay on the blockchain. The wallet holds the keys.',
        },
      ],
      recap: [
        'Wallets hold keys, not coins.',
        'Keys sign payments and prove ownership.',
        'A missing backup can mean permanent loss.',
      ],
    },
    {
      id: 'm3l2',
      title: 'Public vs Private Keys',
      intro:
        'Every address comes from a pair of keys.\nOne is safe to share, the other must stay secret.',
      visualCard: {
        label: 'Key idea',
        title: 'A pair, not one',
        body: 'The public key or address receives funds. The private key spends them and must never be shared.',
      },
      sectionA: {
        heading: 'How the pair works',
        lines: [
          'The public address is like an account number you can share.',
          'The private key is like a signature you must guard.',
          'Anyone with the private key can spend the funds.',
          'You cannot work backwards from the public address to the private key.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A mailbox slot and its key',
        body: 'Anyone can drop a letter in the slot. Only the keyholder can open the box and take what is inside.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Sharing an address is normal and safe.',
          'Sharing a private key hands over the money.',
          'No legitimate service ever needs your private key.',
        ],
      },
      quiz: [
        {
          question: 'Which key is safe to share so others can pay you?',
          options: ['The private key', 'The public address', 'The seed phrase', 'Both keys'],
          answerIndex: 1,
          explanation: 'The public address is designed to be shared.',
        },
        {
          question: 'Who should ever see your private key?',
          options: ['Support staff', 'Only you', 'Your exchange', 'Anyone with your email'],
          answerIndex: 1,
          explanation: 'A private key belongs to you alone.',
        },
      ],
      recap: [
        'Keys come in public and private pairs.',
        'The public address receives funds safely.',
        'The private key spends funds and stays secret.',
      ],
    },
    {
      id: 'm3l3',
      title: 'Hot Wallets',
      intro:
        'A hot wallet is connected to the internet.\nThat makes it convenient and more exposed.',
      visualCard: {
        label: 'Definition',
        title: 'Hot wallet',
        body: 'A wallet on a device that is online, such as a phone app or browser extension.',
      },
      sectionA: {
        heading: 'Where hot wallets fit',
        lines: [
          'Good for everyday amounts you plan to use.',
          'Fast to set up and easy to sign payments with.',
          'The keys live on an internet-connected device.',
          'Malware and fake apps are the main threats.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Cash in your pocket',
        body: 'Handy for daily spending. You would not carry your whole savings there.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Convenience and exposure rise together.',
          'Using a hot wallet for small amounts limits damage.',
          'Keeping large amounts offline reduces risk.',
        ],
      },
      quiz: [
        {
          question: 'When is a hot wallet a sensible choice?',
          options: [
            'For long-term savings',
            'For small, everyday amounts',
            'For storing a full seed phrase backup',
            'Never',
          ],
          answerIndex: 1,
          explanation: 'Hot wallets suit frequent, smaller amounts.',
        },
      ],
      recap: [
        'Hot wallets stay connected to the internet.',
        'They are convenient and more exposed.',
        'Use them for smaller, active amounts.',
      ],
    },
    {
      id: 'm3l4',
      title: 'Cold Wallets',
      intro:
        'A cold wallet keeps keys offline.\nOffline keys are much harder to steal remotely.',
      visualCard: {
        label: 'Definition',
        title: 'Cold wallet',
        body: 'A device or paper record that keeps keys offline. It is not connected to the internet day to day.',
      },
      sectionA: {
        heading: 'Where cold wallets fit',
        lines: [
          'Best for larger amounts held for a long time.',
          'Keys never touch an internet-connected device.',
          'You still need a safe backup of the seed phrase.',
          'Buy from the maker or a trusted shop, never a random seller.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A home safe',
        body: 'It takes effort to open, which is exactly why it protects valuable items.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Most large losses involve keys exposed online.',
          'Cold storage removes remote attacks from the picture.',
          'The backup is now the weakest point, so guard it well.',
        ],
      },
      quiz: [
        {
          question: 'What is the main advantage of a cold wallet?',
          options: [
            'It pays interest',
            'Keys stay offline and safe from remote theft',
            'It is free',
            'It never needs a backup',
          ],
          answerIndex: 1,
          explanation: 'Offline keys are much harder to steal remotely.',
        },
      ],
      recap: [
        'Cold wallets keep keys offline.',
        'They suit larger, long-term holdings.',
        'The seed backup becomes the key risk to protect.',
      ],
    },
    {
      id: 'm3l5',
      title: 'Seed Phrases',
      intro:
        'A seed phrase is 12 or 24 words that restore your wallet.\nAnyone who has it owns everything in that wallet.',
      visualCard: {
        label: 'Definition',
        title: 'Seed phrase',
        body: 'A list of words that rebuilds your wallet and all its keys. It is the master backup.',
      },
      sectionA: {
        heading: 'How to treat it',
        lines: [
          'Write it on paper or metal, never a screenshot.',
          'Store it offline, in more than one safe location.',
          'Never type it into a website or app that asks for it.',
          'Never share it, even with someone claiming to be support.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'The master key to every door',
        body: 'One key opens every lock you own. Copy it carelessly and every room is exposed at once.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'The seed phrase is the highest-value secret you hold.',
          'It restores funds even on a new device.',
          'Any request for it is a scam, without exception.',
        ],
      },
      quiz: [
        {
          question: 'Who should you give your seed phrase to?',
          options: ['Wallet support', 'Nobody, ever', 'Your exchange', 'A friend for safekeeping'],
          answerIndex: 1,
          explanation: 'No legitimate party needs your seed phrase.',
        },
      ],
      recap: [
        'A seed phrase restores your entire wallet.',
        'Store it offline and never photograph it.',
        'No request for it is ever legitimate.',
      ],
    },
    {
      id: 'm3l6',
      title: 'Seed Phrase 101',
      intro:
        'Here is a practice phrase. It is a fake example, not real money.\nUse it to build the habit of protecting these words.',
      visualCard: {
        label: 'Key idea',
        title: 'Twelve words, one wallet',
        body: 'The order and spelling both matter. One wrong word and the wallet will not restore.',
      },
      sectionA: {
        heading: 'Practice rules',
        lines: [
          'Reveal the practice words, then cover them again.',
          'In real life, write them down without a camera nearby.',
          'Store the paper where a burglar would not look first.',
          'Test your backup by restoring on an empty wallet.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A recipe card',
        body: 'Leave out one ingredient and the dish fails. Follow the card exactly, and it works every time.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'A bad backup is discovered at the worst moment.',
          'Rehearsing now means calm action later.',
          'This habit protects the funds behind every lesson.',
        ],
      },
      interactive: {
        kind: 'seed',
        title: 'Practice seed card (fake words)',
        body: 'These words are an example only. Never use a phrase you saw online or in a lesson.',
      },
      quiz: [
        {
          question: 'Why practise a seed phrase backup before you need it?',
          options: [
            'To share it with friends',
            'To confirm the backup restores correctly',
            'To make it shorter',
            'To increase rewards',
          ],
          answerIndex: 1,
          explanation: 'A tested backup is the only backup you can rely on.',
        },
      ],
      recap: [
        'Word order and spelling both matter.',
        'Write backups offline and test them.',
        'A lesson example is never a real phrase.',
      ],
    },
    {
      id: 'm3l7',
      title: 'Self-Custody vs Exchanges',
      intro:
        'An exchange is a service that holds keys for you.\nSelf-custody means you hold them yourself.',
      visualCard: {
        label: 'Key idea',
        title: 'Two models, two risks',
        body: 'Exchanges are convenient but you rely on a company. Self-custody removes that reliance and shifts responsibility to you.',
      },
      sectionA: {
        heading: 'What each offers',
        lines: [
          'Exchanges simplify buying, selling and support.',
          'Exchanges can freeze accounts or fail entirely.',
          'Self-custody puts keys in your hands with no support desk.',
          'A common balance is exchanges for trading and self-custody for storage.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'A hotel safe vs your own safe',
        body: 'The hotel safe is easy and you trust the staff. Your own safe cannot be opened by anyone else, and cannot be opened for you either.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'History shows exchanges can collapse.',
          'Self-custody makes you the final line of defence.',
          'Choosing clearly beats drifting into a habit.',
        ],
      },
      quiz: [
        {
          question: 'What risk comes with leaving funds on an exchange?',
          options: [
            'Higher network fees',
            'You depend on the company\u2019s solvency and honesty',
            'Slower block times',
            'Lost seed phrases',
          ],
          answerIndex: 1,
          explanation: 'You rely on the company to keep your funds safe.',
        },
      ],
      recap: [
        'Exchanges hold keys and add convenience.',
        'Self-custody removes reliance on a company.',
        'Choose deliberately rather than by default.',
      ],
    },
    {
      id: 'm3l8',
      title: 'Sending and Receiving Safely',
      intro:
        'Sending is the moment most losses happen.\nA short checklist removes almost all of them.',
      visualCard: {
        label: 'Checklist',
        title: 'Four calm checks',
        body: 'Network, address, amount, test. In that order, every time.',
      },
      sectionA: {
        heading: 'Before you press send',
        lines: [
          'Check the network matches the destination.',
          'Compare the first and last characters of the address.',
          'Send a small test amount first for large transfers.',
          'Confirm the fee so the payment does not stall.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Addressing a parcel',
        body: 'Postcode, street, name. Skip one and the parcel goes nowhere, and the post office cannot return it.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Wrong-network mistakes are usually permanent.',
          'Malware can change a pasted address mid-click.',
          'A test transfer costs little and prevents disaster.',
        ],
      },
      quiz: [
        {
          question: 'Before a large transfer, what should you do?',
          options: [
            'Send everything at once',
            'Send a small test amount first',
            'Post the address publicly',
            'Disable confirmations',
          ],
          answerIndex: 1,
          explanation: 'A small test confirms the route before the main amount.',
        },
        {
          question: 'Why compare the first and last characters of an address?',
          options: [
            'To count the letters',
            'To catch a swapped or altered address',
            'To set the fee',
            'To pick a network',
          ],
          answerIndex: 1,
          explanation: 'Checking both ends catches many altered addresses.',
        },
      ],
      recap: [
        'Match the network before sending.',
        'Verify the address at both ends.',
        'Test with a small amount for large transfers.',
      ],
    },
    {
      id: 'm3l9',
      title: 'Common Wallet Mistakes',
      intro:
        'Most wallet losses repeat the same mistakes.\nRecognising them in advance keeps you calm.',
      visualCard: {
        label: 'Key idea',
        title: 'Predictable errors',
        body: 'Careless backups, fake apps, and rushing cause the majority of losses.',
      },
      sectionA: {
        heading: 'The usual suspects',
        lines: [
          'Storing a seed phrase as a photo or note in the cloud.',
          'Downloading a wallet from an advert or search result.',
          'Approving every permission a site requests.',
          'Reusing one password everywhere.',
          'Sending to an address copied from a chat message.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Leaving the window open',
        body: 'The lock is fine. The open window is the real problem.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'These mistakes are cheap to prevent and costly to fix.',
          'Small changes to routine remove most of the risk.',
          'Calm repetition builds the habit properly.',
        ],
      },
      quiz: [
        {
          question: 'Which habit protects a seed phrase best?',
          options: [
            'A photo in cloud storage',
            'A note in a chat to yourself',
            'An offline written backup in a safe place',
            'The clipboard',
          ],
          answerIndex: 2,
          explanation: 'Offline written backups avoid remote theft.',
        },
      ],
      recap: [
        'Most losses come from a few repeated mistakes.',
        'Fake apps and cloud backups are common causes.',
        'Simple routine changes prevent them.',
      ],
    },
    {
      id: 'm3l10',
      title: 'Module 3 Checkpoint',
      intro:
        'Your third badge is close.\nConfirm the key and wallet basics before you claim it.',
      visualCard: {
        label: 'Key idea',
        title: 'Keys are the whole game',
        body: 'Protect keys and seed phrases well, and most other risks shrink.',
      },
      sectionA: {
        heading: 'What you covered',
        lines: [
          'Wallets hold keys, not coins.',
          'Hot wallets are handy, cold wallets are safer.',
          'Seed phrases restore everything and must stay offline.',
          'Send carefully with a short checklist.',
        ],
      },
      analogyCard: {
        label: 'Analogy',
        title: 'Learning to lock up properly',
        body: 'You now know which doors matter most and how to keep their keys safe.',
      },
      sectionB: {
        heading: 'Why this matters',
        lines: [
          'Scam defence builds directly on these skills.',
          'Self-custody is only safe with good habits.',
          'You are ready to study real attacks next.',
        ],
      },
      quiz: [
        {
          question: 'Which statement is correct?',
          options: [
            'Coins are stored inside the wallet app',
            'Cold wallets keep keys offline',
            'Seed phrases should be shared with support',
            'Exchanges never fail',
          ],
          answerIndex: 1,
          explanation: 'Cold wallets keep keys offline, away from remote attacks.',
        },
        {
          question: 'What is the safest way to store a seed phrase?',
          options: [
            'A cloud note',
            'An email draft',
            'An offline written backup, tested and stored safely',
            'A photo album',
          ],
          answerIndex: 2,
          explanation: 'Offline and tested is the reliable approach.',
        },
      ],
      recap: [
        'Keys, not apps, decide who owns funds.',
        'Cold storage suits larger long-term holdings.',
        'Send with checks and test amounts.',
      ],
    },
  ],
}
