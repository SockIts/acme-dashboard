const publicAsset = p => p.split('/').pop();
const TOKENOMICS = [
  { label: 'Open Mint', percent: 30, summary: 'Public launch', details: 'Mint at 1 sat on a first-come, first-served basis. No VC allocation and no presale.', className: 'alloc-open' },
  { label: 'Staking Rewards', percent: 30, summary: 'Two-year program', details: '18% unlocks in Year 1 and 12% in Year 2. Staking starts when the 30% open mint completes.', className: 'alloc-staking' },
  { label: 'Community Airdrop', percent: 5, summary: 'Early communities', details: 'For long-time participants across the Stamps, Counterparty, and Ordinals communities.', className: 'alloc-airdrop' },
  { label: 'Minting Rewards', percent: 5, summary: 'Activity incentives', details: 'Calculated weekly in proportion to minting fees paid.', className: 'alloc-minting' },
  { label: 'Team Reserve', percent: 15, summary: 'Two-year lock', details: 'The team reserve is locked, staked, and participates in governance.', className: 'alloc-team' },
  { label: 'DAO Reserve', percent: 15, summary: 'Community treasury', details: 'Reserved for governance, protocol development, and long-term ecosystem growth.', className: 'alloc-dao' },
];
const ACME_PRODUCTS = [
  { name: 'Mainnet', tag: 'LIVE', description: 'Production Bitcoin rail for ACME objects, transfers, commitments, and open mint activity.', icon: 'MN' },
  { name: 'Testnet', tag: 'LAB', description: 'Sandbox for trial mints, wallet flows, indexer checks, and protocol experiments before release.', icon: 'TN' },
  { name: 'Explorer', tag: 'INDEX', description: 'Search blocks, transactions, assets, holders, provenance, and ACME state from the indexer.', icon: 'EX' },
  { name: 'Dex Marketplace', tag: 'MARKET', description: 'Native listings, fills, offers, floors, and transparent price discovery for ACME assets.', icon: 'DX' },
  { name: 'ArtCore Studio', tag: 'CREATE', description: 'Artist-facing creation tools for profiles, collections, editions, signatures, and runtime work.', icon: 'AS' },
  { name: 'ArtCore Directory', tag: 'BROWSE', description: 'Discovery surface for artists, collections, editions, market pages, and protocol-native culture.', icon: 'AD' },
  { name: 'Cortex Universe', tag: 'GRAPH', description: 'The CORTEX relationship graph for identity, metadata, provenance, taxonomy, and asset context.', icon: 'CU' },
  { name: 'Kek.Works', tag: 'PFP', description: 'PFP launchpad for collectible drops, creator campaigns, and community mint moments.', icon: 'KW' },
];
const ROADMAP_ARC = [
  { step: '01', title: 'Mainnet', note: 'Open mint, canonical indexer, and Bitcoin-native ACME state.' },
  { step: '02', title: 'Activate', note: 'Staking begins after 30% public mint; ARTCORE brings creator tools online.' },
  { step: '03', title: 'Expand', note: 'Independent indexers, storage, wallets, galleries, and market builders join.' },
  { step: '04', title: 'DAO', note: 'Open validators and community control over fees, upgrades, reserves, and grants.' },
];
const DOCUMENTS = [
  {
    key: 'cortex',
    title: 'ACME Cortex User Guide',
    kind: 'Creator guide',
    href: publicAsset('Documentation/ACME%20Cortex%20User%20Guide.html'),
    summary: 'Relationship graph workflows for tagging, provenance, references, and richer asset context.',
  },
  {
    key: 'atomic',
    title: 'ACME Atomic Swap Guide',
    kind: 'Trading guide',
    href: publicAsset('Documentation/ACME%20Atomic%20Swap%20Guide.html'),
    summary: 'Practical notes for atomic orders, fills, wallet flow, and deterministic market settlement.',
  },
  {
    key: 'routing',
    title: 'Trustless API Routing + Fees',
    kind: 'Technical paper',
    href: publicAsset('Documentation/ACMEProtocol_TrustlessAPIRoutingAndFeeDistributionArchitecture_TechnicalPaper.pdf'),
    summary: 'Architecture paper covering API routing, fee distribution, incentives, and verifiable service layers.',
  },
  {
    key: 'runtime',
    title: 'ACME Runtime',
    kind: 'Runtime spec',
    href: publicAsset('Documentation/ACME-RUNTIME.pdf'),
    summary: 'Reference material for ACME runtime behavior, programmable assets, and creator-facing execution.',
  },
  {
    key: 'cortex-network',
    title: 'Cortex Neural Art Network',
    kind: 'Network paper',
    href: publicAsset('Documentation/Cortex_Neural_Art_Network.pdf'),
    summary: 'Cortex network reference for neural art workflows, creative graphing, and protocol-aware media systems.',
  },
  {
    key: 'backend-docker',
    title: 'Backend Docker Deployment',
    kind: 'Deployment guide',
    href: publicAsset('Documentation/ACME_Backend_Docker_Deployment_2026-07-05.pdf'),
    summary: 'Docker deployment reference for ACME backend services, runtime setup, and infrastructure operations.',
  },
];
const MAINNET_PREVIEW_ASSETS = [
  { asset: 'INVISIBLE', name: 'Invisible', artist: 'LUAMBRIZ', src: publicAsset('assets/mainnet-preview/invisible.jpg'), detail: 'Browse asset pages, ownership, art metadata, and provenance from the live mainnet indexer.' },
  { asset: 'ECHOES', name: 'Echoes', artist: 'MEGANO', src: publicAsset('assets/mainnet-preview/echoes.jpg'), detail: 'Mainnet assets render directly from ACME media endpoints with verifiable asset records.' },
  { asset: 'FAMILYHOUR', name: 'Family Hour', artist: 'MATURATED', src: 'https://raw.githubusercontent.com/SockIts/acme-token-dashboard/main/public/assets/mainnet-preview/familyhour.gif', detail: 'Collections and animated works can be explored, traded, and referenced across the protocol.' },
  { asset: 'SURREAL', name: 'Surreal', artist: 'HNFTPEPE', src: publicAsset('assets/mainnet-preview/surreal.png'), detail: 'Permanent Bitcoin-native art surfaces through the same asset pipeline used by the mainnet app.' },
];
const PROTOCOL_PILLARS = [
  ['01', 'Permanent UTXO Storage', "Data can be embedded directly in Bitcoin's core UTXO set, replicated by full nodes instead of depending on fragile external services."],
  ['02', 'Merkle-Proof Verification', 'Anyone can verify asset state through Merkle proofs anchored to Bitcoin consensus. ACME is built around verifiable state, not indexer trust.'],
  ['03', 'Mineable Fee Pools', 'A UTXO-based fee pool rewards correct indexer submissions, turning honest indexing into a permissionless and economically aligned activity.'],
  ['04', 'Artist-First Simplicity', 'Clean creator tools sit on top of protocol depth: DEX markets, auctions, generative tooling, curation, royalties, and permanent assets.'],
];
const PROTOCOL_FEATURES = [
  ['Flexible Storage', 'Choose UTXO, Witness, OP_RETURN, or Arweave storage per asset and per use case.'],
  ['Generative Studio', 'Create generative and recursive on-chain art with the art and its engine living together.'],
  ['Native DEX + Marketplace', 'On-chain orders, dispensers, auctions, bids, and offers with deterministic settlement.'],
  ['ACME Cortex + Tagging', 'AI-assisted asset relationships, tags, curation, provenance, and discoverability without centralized metadata.'],
  ['DAO Governance', 'A path to community control over fees, royalties, upgrades, reserve usage, and ecosystem priorities.'],
  ['Staking & BTC Rewards', 'Protocol fee sharing and staking are mapped into the long-term holder program.'],
  ['Upgradable Architecture', 'A modular design intended to adapt as Bitcoin opcodes and app surfaces evolve.'],
  ['Fair Launch Access', 'The open mint puts launch access in the community’s hands, with explicit allocations for staking, DAO, team, and activity rewards.'],
];
const PROTOCOL_TEAM = [
  ['@btc_socks', 'Co-founder', 'Bitcoin maximalist and ACME co-founder focused on decentralized Bitcoin-native tooling for artists and creators.', publicAsset('acme-protocol/team/socks.jpg'), 'https://x.com/btc_socks'],
  ['@hnftpepe', 'Co-founder', 'Digital artist and ACME co-founder specializing in on-chain creativity, vector art, and permissionless Bitcoin NFT markets.', publicAsset('acme-protocol/team/hnftpepe.jpg'), 'https://x.com/HnftPepe'],
  ['@lentymor', 'Co-founder', 'Digital art alchemist and on-chain artist pushing experimental Bitcoin art and fully on-chain creative work.', publicAsset('acme-protocol/team/mortylen.jpg'), 'https://x.com/lentymor'],
  ['@0xDerpNation', 'Tech Devs', 'Bitcoin protocol developer and Stampverse contributor focused on Stamps, recursive protocols, OLGA encoding, and on-chain innovation.', publicAsset('acme-protocol/team/derp.jpg'), 'https://x.com/0xDerpNation'],
  ['@paperbuddha', 'Ambassador', 'Contemporary Buddhist artist blending Thangka influence, vintage pulp, validator culture, and AI building.', publicAsset('acme-protocol/team/paperbuddha.jpg'), 'https://x.com/paperbuddha'],
  ['@kanemayfield', 'Ambassador', 'Writer, cultural curator, meme merchant, and Bitcoin art personality bringing irreverent energy to the ecosystem.', publicAsset('acme-protocol/team/kane.jpg'), 'https://x.com/KaneMayfield'],
  ['@desultor', 'Ambassador', 'Crunchy dystopian Bitcoin artist with bold, gritty, post-apocalyptic on-chain work and long NFT history.', publicAsset('acme-protocol/team/desultor.jpg'), 'https://x.com/desultor'],
];
