import { BosniaPlayerNFT, TourCheckpoint, TuzProtocolBatch, CavernState, InvestorProfile } from "../types";

export interface PresentationSlide {
  id: string;
  category: "Vision" | "Digital" | "Physical" | "Industrial" | "Financial";
  title: string;
  subtitle: string;
  content: string[];
  visualId: "map" | "aiso" | "tourism" | "houseOfSalt" | "blockchain" | "industrialFlow" | "cavernSonar" | "financials" | "roadmap";
}

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: "slide_intro",
    category: "Vision",
    title: "Tuzla Solana City Vision",
    subtitle: "The TUZ Protocol: Bridging 140 Years of Salt History with Solana Blockchain & Sodium-Ion Battery Technology",
    content: [
      "A complete multi-stage, circular urban transformation project based in Tuzla, Bosnia & Herzegovina.",
      "Integrates local industrial heritage (Solana d.d. Tuzla established in 1885) and the rich Tetima mine reserves (~400M tonnes of NaCl) to establish Europe's first traceable Sodium-Ion Battery (SIB) materials supply chain.",
      "Powers this vertical value chain with 100% clean circular hydropotentials, while using the Solana blockchain ($SOL / TUZ token symbiosis) for EU Digital Battery Passport origin attestation."
    ],
    visualId: "map"
  },
  {
    id: "slide_digital_foundation",
    category: "Digital",
    title: "AISO & Interactive Tourism",
    subtitle: "Optimizing Local Presence for AI Search Agents and the Tuzla AR Tour Quest",
    content: [
      "AI Search Engine Optimization (AISO): Re-engineering the internet presence of local Tuzla businesses and landmarks so they are natively read, indexed, and recommended by AI Agentic search queries (ChatGPT, Gemini, Perplexity).",
      "Tuzla Tour App: A modern portal inviting travelers on real-world map quests. Visitors visit real Tuzla coordinates (e.g. Trg Slobode, Pannonian Lakes, Solana Muzej) and unlock exclusive Bosnian sports collectible NFTs.",
      "Integrated Digital Wallet: Demonstrating seamless micropayments and digital asset ownership on the ultra-low gas fee, sub-second Solana blockchain."
    ],
    visualId: "aiso"
  },
  {
    id: "slide_nft_album",
    category: "Digital",
    title: "Bosnian World Cup 2026 Solana NFT Album",
    subtitle: "Connecting Athletic Pride with Modern On-Chain Digital Fan Experience",
    content: [
      "World Cup 2026 Bosnia-Herzegovina Football Fan Album is fully digitized on Solana using SPL token standards.",
      "Allows collectors to swap, stake, or complete their digital albums by scanner check-ins at real geographic coordinates in Tuzla.",
      "Showcases how web3 technology elevates tourism, fosters civic engagement, and builds gamified communities with rare commemorative status tiers."
    ],
    visualId: "tourism"
  },
  {
    id: "slide_house_of_salt",
    category: "Physical",
    title: "House of Salt & SOL Symbiosis",
    subtitle: "The Phygital Marketing Key: bridging Physical 'Sol' (Salt) and Solana '$SOL'",
    content: [
      "Establishing Tuzla's 'House of Salt' (https://houseofsalt.base44.app): Artisan salt products, specialty spices, handcrafted crystal figurines, and handmade brine-etched jewelry.",
      "Solana themed box of salt: A physical promotional luxury souvenir target-mailed to global Solana developers and multi-million dollar venture investors.",
      "The 'Sol' and '$SOL' symbiosis: Plays on the direct translational match where 'Sol' is literally 'Salt' in Bosnian/Slavic, creating a natural marketing vector for the world's fastest web3 ecosystem."
    ],
    visualId: "houseOfSalt"
  },
  {
    id: "slide_tuz_protocol",
    category: "Physical",
    title: "TUZ Protocol Traceability Engine",
    subtitle: "A Solana-backed Industrial Attestation for Exporting Commodities to the EU",
    content: [
      "Addressing the EU Battery Passport mandate (Regulation 2023/1542, effective Feb 2027), which forces strict Carbon Footprint, geological origin, and chemical purity reporting.",
      "Every single batch of brine pumped from the Tetima Mine receives an immutable on-chain tokenized NFT Certificate carrying assay properties (99.9% Na-Ion battery standard, ESG score, water footprint).",
      "Connects physical raw mining assets directly to on-chain audits via Program-Derived Addresses (PDAs) and Oracle verifications, fetching raw feed premium values."
    ],
    visualId: "blockchain"
  },
  {
    id: "slide_green_factory",
    category: "Industrial",
    title: "Zero-Coal Green Precursor Hub",
    subtitle: "Combining Solana d.d. Tuzla, Lukavac Soda Plant, and Lake Modrac Hydropotential",
    content: [
      "Merging forces: Unifying the 140-year raw brine extraction expertise of Solana d.d. Tuzla and the advanced processing infrastructure of Şişecam Soda Lukavac to formulate high-margin battery precursors: Pure Sodium Carbonate (Na2CO3) and Sodium Hydroxide (NaOH).",
      "Circular Heat Exchange: Capturing unused thermal cooling discharge from the nearby power plant as recycling energy pipelines to drive evaporation ponds.",
      "Lake Modrac Hydro Loop: Utilizing the natural gravitational flow of cooling water discharge and Lake Modrac hydropotentials through mini-hydro stations to power chemical refining, cutting carbon footprint to near zero."
    ],
    visualId: "industrialFlow"
  },
  {
    id: "slide_subsidence_elimination",
    category: "Industrial",
    title: "Subsidence-Safe Digital Twin Caverns",
    subtitle: "Resolving 1980s Karstification Risks through Modern Geomechanical Engineering",
    content: [
      "Historic Challenge: Historical unmonitored brine over-extraction caused underground karst dissolution, leading to geographic surface subsidence in downtown Tuzla.",
      "The Elimination Strategy: Installing continuous geomechanical sonar cavity sensors and InSAR high-altitude satellite deformation monitoring at the Tetima deposits.",
      "Digital Twin Caverns: Synchronizing subsurface geological structural models to on-chain ledgers. By regulating pressure and backfilling exhausted salt domes, surface displacement is permanently kept below 5mm thresholds."
    ],
    visualId: "cavernSonar"
  },
  {
    id: "slide_financials",
    category: "Financial",
    title: "Bankable Model & Investment Trajectory",
    subtitle: "Highly Viable Multi-Phase Economics and Local Employment Supercharger",
    content: [
      "Phase I (2027-2029): Establishes the 50,000 t/year Battery Grade Salt Platform (Est. EUR 15 Million CAPEX, creating 50 direct industrial jobs).",
      "Phase II (2029-2031): Integrates Soda processing for 100,000 t/year Pure Sodium Chemicals (Est. EUR 60 Million, creating 120 jobs).",
      "Phase III (2031-2035): Scales into active Prussian White Precursor compounds, outputting 20,000 t/year with 12% to 18% net operating cash margins."
    ],
    visualId: "financials"
  },
  {
    id: "slide_roadmap",
    category: "Financial",
    title: "The 10-Year Solana City Roadmap",
    subtitle: "From Organic Souvenirs to a Full-Scale Sovereign Web3 Circular Economy",
    content: [
      "Years 1-2 (Feasibility & AR Tourism): Deploy the Tuzla Tour App, 'House of Salt' tokenized boxes of salt, and finalize regulatory MiCA whitelist templates.",
      "Years 3-5 (Precursor Pilot): Install a demonstration 0.5 GWh/year precursor unit in Lukavac linked with the live on-chain TUZ Protocol.",
      "Years 5-10 (Tuzla Solana City): Transition public city grids, transit lines, industrial billing, energy storage microgrids, and local tourism into full-scale circular SOL/TUZ settlements."
    ],
    visualId: "roadmap"
  }
];

export const TOUR_CHECKPOINTS: TourCheckpoint[] = [
  {
    id: "cp_1",
    name: "Solana Tuzla Museum",
    description: "The historical heart of salt manufacturing since 1885. Scan the original salt basin machinery for an entry pass.",
    coordinates: "44.5422° N, 18.6653° E",
    arFeature: "3D Hologram of historical salt evaporators",
    nftImageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=400&auto=format&fit=crop",
    nftTokenName: "TUZ-HIST-1885",
    difficulty: "Easy",
    xpAwarded: 150
  },
  {
    id: "cp_2",
    name: "Trg Slobode Fountain",
    description: "Tuzla's main civic square housing ancient underground neolithic salt-well extraction models.",
    coordinates: "44.5385° N, 18.6744° E",
    arFeature: "Water flow mapping with integrated $SOL particles",
    nftImageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400&auto=format&fit=crop",
    nftTokenName: "TUZ-NEO-WELL",
    difficulty: "Easy",
    xpAwarded: 100
  },
  {
    id: "cp_3",
    name: "Panonska Jezera (Pannonian Lakes)",
    description: "The unique artificial salt lakes in the center of Tuzla. High curative brine health waters.",
    coordinates: "44.5401° N, 18.6812° E",
    arFeature: "Raw brine mineral density analyzer HUD",
    nftImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop",
    nftTokenName: "TUZ-PAN-LAKE",
    difficulty: "Medium",
    xpAwarded: 250
  },
  {
    id: "cp_4",
    name: "Tetima Salt Mine Reserve",
    description: "The core subterranean brine reserves yielding up to 320 g/L of pure geological minerals.",
    coordinates: "44.5950° N, 18.7201° E",
    arFeature: "Geological sub-surface layer visualizer overlay",
    nftImageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&auto=format&fit=crop",
    nftTokenName: "TUZ-MET-WELL",
    difficulty: "Challenging",
    xpAwarded: 500
  }
];

export const BOSNIA_PLAYERS: BosniaPlayerNFT[] = [
  {
    id: "p_kenan",
    name: "Kenan Alajbegović",
    position: "FW",
    number: 19,
    grade: "Legendary",
    mintAddress: "Ken9...82vG",
    imageUrl: "/KenanAlajbegovic.png",
    scanned: false
  },
  {
    id: "p_1",
    name: "Edin Džeko",
    position: "FW",
    number: 11,
    grade: "Legendary",
    mintAddress: "Dzk8...864S",
    imageUrl: "FW",
    scanned: false
  },
  {
    id: "p_2",
    name: "Ermedin Demirović",
    position: "FW",
    number: 10,
    grade: "Epic",
    mintAddress: "Dmr7...333M",
    imageUrl: "FW",
    scanned: false
  },
  {
    id: "p_3",
    name: "Amar Dedić",
    position: "DF",
    number: 2,
    grade: "Epic",
    mintAddress: "Ded2...999X",
    imageUrl: "DF",
    scanned: false
  },
  {
    id: "p_4",
    name: "Sead Kolašinac",
    position: "DF",
    number: 3,
    grade: "Rare",
    mintAddress: "Kol3...111Y",
    imageUrl: "DF",
    scanned: false
  },
  {
    id: "p_5",
    name: "Benjamin Tahirović",
    position: "MF",
    number: 8,
    grade: "Rare",
    mintAddress: "Tah8...444A",
    imageUrl: "MF",
    scanned: false
  },
  {
    id: "p_6",
    name: "Nikola Vasilj",
    position: "GK",
    number: 1,
    grade: "Common",
    mintAddress: "Vas1...555B",
    imageUrl: "GK",
    scanned: false
  }
];

export const INITIAL_BATCHES: TuzProtocolBatch[] = [
  {
    batchId: "TUZ-BRINE-2026-004A",
    timestamp: "2026-06-14T05:22:11Z",
    brineSource: "Tetima Deep Well T-1",
    tonnage: 1250,
    purity: 99.92,
    classification: "Battery Grade Na-Ion commodity",
    carbonFootprint: 0.12,
    certified: true,
    onChainTx: "3mUu...F4uQ",
    esgRating: "AA"
  },
  {
    batchId: "TUZ-BRINE-2026-004B",
    timestamp: "2026-06-14T06:11:45Z",
    brineSource: "Tetima Deep Well T-2",
    tonnage: 940,
    purity: 99.95,
    classification: "Battery Grade Na-Ion commodity",
    carbonFootprint: 0.08,
    certified: true,
    onChainTx: "4rYw...H89P",
    esgRating: "AAA"
  },
  {
    batchId: "TUZ-BRINE-2026-004C",
    timestamp: "2026-06-14T06:44:00Z",
    brineSource: "Hukalo Well-V",
    tonnage: 1400,
    purity: 98.45,
    classification: "Industrial Grade",
    carbonFootprint: 0.45,
    certified: false,
    esgRating: "A"
  }
];

export const CAVERNS: CavernState[] = [
  {
    id: "cav_1",
    name: "Cavern Alpha (Tetima Dome North)",
    depthRange: "180 - 240 m",
    volumeM3: 450000,
    pressureBar: 24.5,
    lastSonarScan: "2026-06-10",
    subsidenceRateMm: 1.2,
    status: "Optimal",
    pressureBalanced: true
  },
  {
    id: "cav_2",
    name: "Cavern Beta (Central Syncline Unit)",
    depthRange: "220 - 300 m",
    volumeM3: 620000,
    pressureBar: 18.2,
    lastSonarScan: "2026-06-12",
    subsidenceRateMm: 3.4,
    status: "Optimal",
    pressureBalanced: true
  },
  {
    id: "cav_3",
    name: "Cavern Gamma (Southern Outcrop)",
    depthRange: "150 - 210 m",
    volumeM3: 310000,
    pressureBar: 11.4,
    lastSonarScan: "2026-06-13",
    subsidenceRateMm: 6.8, // over 5mm
    status: "Action Required",
    pressureBalanced: false
  }
];

export const INVESTOR_PROFILES: InvestorProfile[] = [
  {
    id: "solana_vc",
    name: "Solana Ecosystem Venture Capitalist",
    focus: "Meme-to-phygital utility, sub-second SPL speed, Web3 tourism adoption, dApp scalability & high yield tokenomics.",
    badge: "Solana Whale",
    color: "from-[#14F195] to-[#9945FF]"
  },
  {
    id: "eu_green",
    name: "European Circular Energy Transition Fund",
    focus: "Carbon reduction metrics, environmental mine safety, EU Battery Passport (Regulation 2023/1542), ESG audit compliance.",
    badge: "EU ESG Inspector",
    color: "from-emerald-500 to-blue-600"
  },
  {
    id: "gov_mu",
    name: "Bosnia & Tuzla Municipal Policymaker",
    focus: "Sustainable job creation, restoring historical areas, mine subsidence safety, and green technology diversification.",
    badge: "Civic Leader",
    color: "from-amber-500 to-red-600"
  },
  {
    id: "oem_battery",
    name: "Automotive & Grid Battery OEM Partner",
    focus: "99.9% raw chemical feedstock purity, raw sodium carbonate/NaOH off-take volumes, stable SIB supply chains.",
    badge: "Industrial Partner",
    color: "from-blue-500 to-purple-600"
  }
];
