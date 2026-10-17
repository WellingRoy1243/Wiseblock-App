export type PartnerLink = { name: string; url: string; blurb: string }

export const partnerLinks: PartnerLink[] = [
  { name: 'CoinGecko', url: 'https://www.coingecko.com', blurb: 'Prices, market data, project basics' },
  { name: 'TradingView', url: 'https://www.tradingview.com', blurb: 'Charts and price history' },
  { name: 'CoinMarketCap', url: 'https://coinmarketcap.com', blurb: 'Listings, supply and rankings' },
  { name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf', blurb: 'The original 2008 design document' },
  { name: 'Blockstream Explorer', url: 'https://blockstream.info', blurb: 'Confirm your own transactions' },
  { name: 'Etherscan', url: 'https://etherscan.io', blurb: 'Check addresses and approvals' },
]

export const disclaimer =
  'Scammer Beware - Not Financial Advice. WiseBlock teaches safety and fundamentals only. It never predicts prices.'

export type RedFlag = { title: string; body: string; reaction: string }

export const redFlags: RedFlag[] = [
  {
    title: 'Urgency from a stranger',
    body: 'A message says the offer closes in minutes and you must act before thinking.',
    reaction: 'Stop. Real opportunities survive a night of sleep.',
  },
  {
    title: 'Anyone asks for your seed phrase',
    body: 'Support, an app, a "wallet validator" or a new partner requests your 12 words.',
    reaction: 'Refuse and end the conversation. No legitimate party needs it.',
  },
  {
    title: 'Guaranteed returns',
    body: 'An offer promises fixed profit with no downside risk.',
    reaction: 'Treat it as a scam. Returns are never guaranteed.',
  },
  {
    title: 'You must send first to receive more',
    body: 'A giveaway or bonus requires you to pay a small amount upfront.',
    reaction: 'Never send first. This is the doubling scam.',
  },
  {
    title: 'One specific app, pushed hard',
    body: 'A new online friend insists you use one platform and dismisses the rest.',
    reaction: 'Refuse and verify the platform independently.',
  },
  {
    title: 'Withdrawals blocked by fees',
    body: 'You can deposit freely but withdrawals need an extra payment for "tax" or "verification".',
    reaction: 'Stop depositing. This is the standard exit trap.',
  },
  {
    title: 'A similar-looking website',
    body: 'The domain is one character off, and you arrived from a paid advert.',
    reaction: 'Close it and reach the site from a link you already trust.',
  },
  {
    title: 'Secrecy requested',
    body: 'You are told to keep the investment quiet, even from family.',
    reaction: 'Secrecy protects the scammer, not you. Tell someone.',
  },
]

export type SpotterScenario = {
  id: number
  scenario: string
  who: string
  message: string
  isScam: boolean
  explanation: string
}

export const spotterScenarios: SpotterScenario[] = [
  {
    id: 1,
    scenario: 'A direct message arrives',
    who: 'Unknown account',
    message:
      'Hi! I help people double their crypto. Send 0.5 ETH to the address below and I will return 1.0 ETH within an hour. Only 3 spots left today!',
    isScam: true,
    explanation: 'Sending first to receive more is always a scam. Urgency and "limited spots" are pressure tactics.',
  },
  {
    id: 2,
    scenario: 'A wallet app prompts you',
    who: 'Wallet restore screen',
    message:
      'To restore your wallet, please type your 12-word recovery phrase below. We will validate it automatically.',
    isScam: true,
    explanation: 'A real wallet never asks for your seed phrase to log in or restore. Restoring happens inside your own app.',
  },
  {
    id: 3,
    scenario: 'A friend from a hobby group',
    who: 'Met online 6 weeks ago',
    message:
      "I've been making steady returns on this platform my uncle showed me. I can guide you to set it up. Don't tell anyone yet, I want to show my results first.",
    isScam: true,
    explanation: 'New online relationship, one platform, secrecy and steady returns: the classic romance-investment pattern.',
  },
  {
    id: 4,
    scenario: 'A public blockchain explorer',
    who: 'block explorer page',
    message: 'Transaction confirmed with 12 confirmations. Block 812345. Fee 0.00004 BTC. View raw input.',
    isScam: false,
    explanation: 'Block explorers are normal public tools. Nothing here asks for keys, and the data is verifiable.',
  },
  {
    id: 5,
    scenario: 'A support chat popup',
    who: '"Official support"',
    message:
      'We detected a login from a new device. To protect your funds, verify your wallet now by entering your seed phrase in this chat.',
    isScam: true,
    explanation: 'Support never needs your seed phrase. Fear and urgency are used to rush you.',
  },
  {
    id: 6,
    scenario: 'A message about a new coin',
    who: 'Anonymous telegram group',
    message: 'Buy $MOONPUP right now before it 100x. The team is anonymous but the community is huge. Don\u2019t miss the rocket!',
    isScam: true,
    explanation: 'Anonymous team, pressure to buy instantly and guaranteed multiples: a pump-and-dump setup.',
  },
  {
    id: 7,
    scenario: 'A hardware wallet shop',
    who: 'Manufacturer store',
    message: 'Your order shipped. Track it with the code in your account. Never share your recovery phrase with anyone, including us.',
    isScam: false,
    explanation: 'This states the correct rule: nobody should ever ask for your phrase, including the maker.',
  },
  {
    id: 8,
    scenario: 'A job offer',
    who: 'Recruiter on messenger',
    message:
      'Remote crypto job, £600 per day. First, deposit £300 of your own funds as a trust test. We refund it with your first pay.',
    isScam: true,
    explanation: 'Legitimate employers never require you to send money to get paid.',
  },
  {
    id: 9,
    scenario: 'A testnet practice',
    who: 'Developer documentation',
    message: 'Request free test tokens from the faucet, then try sending between wallets. Test tokens hold no value.',
    isScam: false,
    explanation: 'Faucets give valueless practice tokens so you can learn without risk.',
  },
  {
    id: 10,
    scenario: 'An investment app',
    who: 'App you already use',
    message:
      'Your withdrawal is on hold. Pay a 10% security deposit to release funds. Deposits are still open.',
    isScam: true,
    explanation: 'Blocked withdrawals with "fees" or "deposits" are the standard final trap of a fake platform.',
  },
]

export type PersonalityType = {
  id: string
  name: string
  icon: string
  summary: string
  habit: string
  watchOut: string
}

export const personalityTypes: PersonalityType[] = [
  {
    id: 'guardian',
    name: 'The Guardian',
    icon: '🛡️',
    summary: 'You value safety and patience more than fast movement.',
    habit: 'Keep most funds in cold storage and review backups monthly.',
    watchOut: 'Do not let caution turn into never learning. Practise on a testnet.',
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    icon: '🧭',
    summary: 'You enjoy trying new tools and ideas early.',
    habit: 'Use a small separate wallet for every new site and revoke permissions.',
    watchOut: 'Approvals are your biggest risk. Read every signature request.',
  },
  {
    id: 'scholar',
    name: 'The Scholar',
    icon: '📚',
    summary: 'You research deeply before you act.',
    habit: 'Write a one-page summary of any project before committing.',
    watchOut: 'Research can delay action. Set a decision date so it stays useful.',
  },
  {
    id: 'pragmatist',
    name: 'The Pragmatist',
    icon: '⚖️',
    summary: 'You want simple tools and a short routine.',
    habit: 'Run a five-minute monthly review: backups, permissions, updates.',
    watchOut: 'Simple routines drift. Put the review on a calendar.',
  },
]

export type PersonalityQuestion = {
  question: string
  options: { label: string; type: string }[]
}

export const personalityQuestions: PersonalityQuestion[] = [
  {
    question: 'How do you usually start something new?',
    options: [
      { label: 'Read everything first, then begin', type: 'scholar' },
      { label: 'Jump in and learn by doing', type: 'explorer' },
      { label: 'Start small and protect what I have', type: 'guardian' },
      { label: 'Find the simplest working option', type: 'pragmatist' },
    ],
  },
  {
    question: 'A new app appears for a coin you hold. You...',
    options: [
      { label: 'Wait for independent reviews', type: 'guardian' },
      { label: 'Try it with a tiny amount', type: 'explorer' },
      { label: 'Study how it works under the hood', type: 'scholar' },
      { label: 'Ignore it unless I need it', type: 'pragmatist' },
    ],
  },
  {
    question: 'What would worry you most?',
    options: [
      { label: 'Losing funds to a scam', type: 'guardian' },
      { label: 'Missing something interesting', type: 'explorer' },
      { label: 'Not understanding what I own', type: 'scholar' },
      { label: 'Wasting time on complexity', type: 'pragmatist' },
    ],
  },
  {
    question: 'How do you prefer to store value?',
    options: [
      { label: 'Mostly offline, rarely touched', type: 'guardian' },
      { label: 'Split across a few active wallets', type: 'explorer' },
      { label: 'Wherever I have studied best', type: 'scholar' },
      { label: 'One trusted setup, kept simple', type: 'pragmatist' },
    ],
  },
  {
    question: 'Your ideal monthly routine is...',
    options: [
      { label: 'Full backup and security check', type: 'guardian' },
      { label: 'Explore one new tool safely', type: 'explorer' },
      { label: 'Read one deep explainer', type: 'scholar' },
      { label: 'A five-minute tidy-up', type: 'pragmatist' },
    ],
  },
]

export type ConciergeEntry = { keywords: string[]; title: string; answer: string }

export const conciergeKnowledge: ConciergeEntry[] = [
  {
    keywords: ['seed', 'phrase', 'recovery', '12 words', 'backup'],
    title: 'Seed phrases',
    answer:
      'A seed phrase restores your whole wallet. Write it on paper or metal, store it offline in more than one safe place, and never type it into a website, app or chat. Nobody legitimate will ever ask for it.',
  },
  {
    keywords: ['private key', 'public key', 'address', 'keys'],
    title: 'Keys',
    answer:
      'Your public address receives funds and is safe to share. Your private key spends them and stays secret. Anyone with the private key owns the funds, so treat it like cash.',
  },
  {
    keywords: ['exchange', 'binance', 'coinbase', 'custody', 'ftx', 'mt gox'],
    title: 'Exchanges and custody',
    answer:
      'An exchange holds keys for you, which adds convenience and company risk. History shows exchanges can freeze withdrawals or collapse. Holding your own keys removes that dependence and moves responsibility to you.',
  },
  {
    keywords: ['scam', 'hack', 'stolen', 'phishing', 'drainer'],
    title: 'Suspected scam',
    answer:
      'Stop sending anything. Check whether you signed an approval and revoke permissions. Move any remaining funds to a fresh wallet you control. Never pay a "fee" or "tax" to release a withdrawal - that is part of the trap.',
  },
  {
    keywords: ['testnet', 'practice', 'faucet', 'try'],
    title: 'Practice safely',
    answer:
      'A testnet is a practice copy of a network with valueless tokens. Create a wallet, request test coins from a faucet and try sending. Mistakes there cost nothing, so practise there first.',
  },
  {
    keywords: ['wallet', 'hot', 'cold', 'hardware'],
    title: 'Choosing a wallet',
    answer:
      'Hot wallets stay online: handy for small, active amounts. Cold wallets keep keys offline: better for larger, long-term holdings. Buy hardware from the maker or a trusted shop, never a random reseller.',
  },
  {
    keywords: ['fee', 'fees', 'gas', 'slow', 'stuck'],
    title: 'Fees and confirmations',
    answer:
      'Fees pay for space in the next block. Busy networks mean higher fees and slower confirmations. Before large transfers, send a small test amount and wait for confirmations.',
  },
  {
    keywords: ['tax', 'taxes', 'record', 'records'],
    title: 'Records and tax',
    answer:
      'Keep a simple log: date, amount, asset, price and purpose. Rules differ by country and change over time, so confirm your duties with a local professional. WiseBlock does not give tax advice.',
  },
  {
    keywords: ['price', 'predict', 'buy', 'invest', 'should i', 'profit'],
    title: 'No predictions here',
    answer:
      'WiseBlock does not predict prices and does not give financial advice. Only commit money you could lose entirely without changing your daily life. Learning and safety come before returns.',
  },
  {
    keywords: ['bitcoin', 'what is', 'crypto', 'blockchain'],
    title: 'The basics',
    answer:
      'Crypto is digital value moved directly between people, with a shared public record kept by a network of computers instead of one bank. Bitcoin, launched in 2009, was the first and has a capped supply of 21 million coins.',
  },
  {
    keywords: ['permission', 'approval', 'approve', 'revoke'],
    title: 'Approvals',
    answer:
      'Approving a contract can let it move your tokens later. Read every request, keep a separate low-value wallet for new sites, and revoke permissions you no longer use.',
  },
  {
    keywords: ['2fa', 'password', 'privacy', 'phish'],
    title: 'Digital hygiene',
    answer:
      'Use a password manager with unique passwords, turn on two-factor authentication, keep devices updated, and avoid posting balances or wallet screenshots publicly.',
  },
]
