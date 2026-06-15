export interface SlideTranslation {
  title: string;
  subtitle: string;
  content: string[];
}

export interface CheckpointTranslation {
  name: string;
  description: string;
  arFeature: string;
}

export interface TranslationSet {
  // Navigation tabs
  deck: string;
  digital: string;
  physical: string;
  industrial: string;
  financial: string;
  aiTailor: string;
  linksHeader: string;
  portalLink: string;
  tourLink: string;
  shopLink: string;
  tuzProtocolLink: string;
  bosniaCollectionLink: string;

  // Header HUD
  walletHud: string;
  touristStatus: string;
  level: string;
  activeStatus: string;
  gpsTarget: string;
  secAudit: string;

  // Actions / Buttons
  next: string;
  prev: string;
  scanNode: string;
  scanSuccess: string;
  tokenizeCargo: string;
  balancing: string;
  balanceWell: string;
  copyTag: string;
  copied: string;

  // Visual text lines
  mapGuideTitle: string;
  mapGuideDesc: string;
  schemaTitle: string;
  schemaDesc: string;
  schemaLabelName: string;
  schemaLabelDesc: string;
  schemaLabelCoord: string;
  luxuryBoxTitle: string;
  luxuryBoxDesc: string;
  handmadeJewelryTitle: string;
  handmadeJewelryDesc: string;
  wellDeposit: string;
  naclPurity: string;
  batchTonnage: string;
  mintedLedger: string;
  flowStep1: string;
  flowStep2: string;
  flowStep3: string;
  flowStep4: string;
  flowStep1Val: string;
  flowStep2Val: string;
  flowStep3Val: string;
  flowStep4Val: string;
  poweringSource: string;
  poweringVal: string;
  maximumDisplacement: string;
  projectedValuation: string;
  capexInitiative: string;
  annualRevenue: string;
  timelineStatus: string;

  // AI tailor screen
  tailorTitle: string;
  tailorDesc: string;
  chooseProfile: string;
  fundingGoal: string;
  investorQuestion: string;
  generateBrief: string;
  generating: string;
  copiedBrief: string;

  // Slides and Checkpoints
  slides: { [key: string]: SlideTranslation };
  checkpoints: { [key: string]: CheckpointTranslation };
  products: {
    title: string;
    description: string;
    bridgeTitle: string;
    bridgeDesc: string;
    p1Name: string;
    p1Desc: string;
    p2Name: string;
    p2Desc: string;
    p3Name: string;
    p3Desc: string;
  };
}

export const TRANSLATIONS: { en: TranslationSet; bs: TranslationSet } = {
  en: {
    deck: "📽️ Master Pitch Slides",
    digital: "🌐 AISO & Tour App",
    physical: "📦 House of Salt & TUZ",
    industrial: "🔋 Green gigafactory",
    financial: "📊 Investor Economics",
    aiTailor: "🤖 AI Pitch Customizer",
    linksHeader: "DIGITAL DEEP DIVE LINKS",
    portalLink: "AISO Tuzla Portal",
    tourLink: "Tuzla Tour dApp",
    shopLink: "House of Salt Shop",
    tuzProtocolLink: "TUZ Protocol Tracker 🔗",
    bosniaCollectionLink: "Bosnia NFT Collection 🔗",

    walletHud: "SOLANA PWA WALLET",
    touristStatus: "TOURIST STATUS",
    level: "Lvl",
    activeStatus: "TUZ-SYS // ACTIVE",
    gpsTarget: "🛰️ GPS Target Frame:",
    secAudit: "SECURE BLOCKCHAIN AUDIT // METADATA ID: TUZ-3.5-FLASH",

    next: "NEXT",
    prev: "PREV",
    scanNode: "SCAN NODE",
    scanSuccess: "Checkpoint Scanned! Unlocked Bosnian WC '26 Sports NFT",
    tokenizeCargo: "TOKENIZE CARGO",
    balancing: "STABILIZING...",
    balanceWell: "BALANCE WELL",
    copyTag: "Copy Tag",
    copied: "Copied!",

    mapGuideTitle: "INTERACTIVE MAP GUIDE",
    mapGuideDesc: "Hover on the nodes: see live geographic coordinates sync on the HUD above. It links our core resources (Tetima, Soda Lukavac, Lake Modrac) as a cohesive spatial system.",
    schemaTitle: "AISO Structured Markup Generator",
    schemaDesc: "By providing structured schema.org blocks (JSON-LD), we make local Tuzla attractions discoverable by AI search agents. Standard SEO targets keywords; AI optimization targets semantically structured truth.",
    schemaLabelName: "Landmark/Business Name",
    schemaLabelDesc: "Knowledge description",
    schemaLabelCoord: "Location coordinates / area",
    luxuryBoxTitle: "Tuzla Solana Premium Salt Box",
    luxuryBoxDesc: "Mailed to global VC partners to introduce Tuzla and $SOL.",
    handmadeJewelryTitle: "Handmade Brine Jewelry",
    handmadeJewelryDesc: "Crystals etched with blockchain tags.",
    wellDeposit: "SELECT DEPOSIT WELL",
    naclPurity: "NaCl PURITY (%)",
    batchTonnage: "BATCH TONNAGE (t)",
    mintedLedger: "MINTED COMMODITIES LEDGER",
    flowStep1: "1. Sub-surface Mining:",
    flowStep1Val: "Tetima Salt Dome (Feedstock)",
    flowStep2: "2. Refining Evaporators:",
    flowStep2Val: "Solana d.d. vacuum facility",
    flowStep3: "3. Precursor compound:",
    flowStep3Val: "Lukavac Soda soda ash loop",
    flowStep4: "4. Battery Passport export:",
    flowStep4Val: "EU Green Battery Market",
    poweringSource: "Powering source:",
    poweringVal: "Lake Modrac Gravitational Flow",
    maximumDisplacement: "InSAR TRACKING SYSTEM // MAXIMUM DISPLACEMENT: < 5.0mm",
    projectedValuation: "PROJECTED NPV / FUTURE VALUATION",
    capexInitiative: "CAPEX INITIATIVE",
    annualRevenue: "ANNUAL REVENUE",
    timelineStatus: "INTERACTIVE TIMELINE STATUS",

    tailorTitle: "AI Bespoke Investor Configurator",
    tailorDesc: "Deduce and write a fully custom investor prospectus tuned in real-time. This queries our twin model to frame carbon, transport, yield, or geological factors depending on your sector target.",
    chooseProfile: "SELECT THE DIRECT TARGET:",
    fundingGoal: "ENTER PROJECT OR FUNDING GOAL:",
    investorQuestion: "ASK OPTIONAL CUSTOM INVESTOR QUESTION:",
    generateBrief: "Draft Strategy Brief",
    generating: "Tailoring brief...",
    copiedBrief: "Prospectus Copied to Clipboard!",

    products: {
      title: "House of Salt Premium Showcase",
      description: "Custom artisan products crafted in Tuzla, linking physical salt ('sol' in Bosnian) with on-chain Solana utility. Experience physical luxury backed by Solana's ultra-fast ledger technology.",
      bridgeTitle: "Physical-to-Digital Bridge",
      bridgeDesc: "Every premium product carries an embedded NFC verification tag. Scanning is linked directly to a unique Solana SPL metadata record, certifying its Tetima Mine chemical purity and eco-audited production.",
      p1Name: "OL-TUZ Kitchen Salt Collection",
      p1Desc: "Two high-purity table salt vials beautifully nested in a custom-engraved premium wooden walnut box with Solana branding. Ideal developer souvenir.",
      p2Name: "Tuzla Bath $SOL Brine Crystals",
      p2Desc: "Premium curative geothermal bathing salts infused with real organic lavender, peppermint, and rose petals, sourced from curative Pannonian saline pools.",
      p3Name: "Traditional Salt & Paprika Blend",
      p3Desc: "A robust, smoky blend of vacuum-evaporated pure saline crystals paired with slow-roasted, sweet Bosnian organic paprika for premium culinary creations."
    },

    slides: {
      slide_intro: {
        title: "Tuzla Solana City Vision",
        subtitle: "The TUZ Protocol: Bridging 140 Years of Salt History with Solana Blockchain & Sodium-Ion Battery Technology",
        content: [
          "A complete multi-stage, circular urban transformation project based in Tuzla, Bosnia & Herzegovina.",
          "Integrates local industrial heritage (Solana d.d. Tuzla established in 1885) and the rich Tetima mine reserves (~400M tonnes of NaCl) to establish Europe's first traceable Sodium-Ion Battery (SIB) materials supply chain.",
          "Powers this vertical value chain with 100% clean circular hydropotentials, while using the Solana blockchain ($SOL / TUZ token symbiosis) for EU Digital Battery Passport origin attestation."
        ]
      },
      slide_digital_foundation: {
        title: "AISO & Interactive Tourism",
        subtitle: "Optimizing Local Presence for AI Search Agents and the Tuzla AR Tour Quest",
        content: [
          "AI Search Engine Optimization (AISO): Re-engineering the internet presence of local Tuzla businesses and landmarks so they are natively read, indexed, and recommended by AI Agentic search queries (ChatGPT, Gemini, Perplexity).",
          "Tuzla Tour App: A modern portal inviting travelers on real-world map quests. Visitors visit real Tuzla coordinates (e.g. Trg Slobode, Pannonian Lakes, Solana Muzej) and unlock exclusive Bosnian sports collectible NFTs.",
          "Integrated Digital Wallet: Demonstrating seamless micropayments and digital asset ownership on the ultra-low gas fee, sub-second Solana blockchain."
        ]
      },
      slide_nft_album: {
        title: "Bosnian World Cup 2026 Solana NFT Album",
        subtitle: "Connecting Athletic Pride with Modern On-Chain Digital Fan Experience",
        content: [
          "World Cup 2026 Bosnia-Herzegovina Football Fan Album is fully digitized on Solana using SPL token standards.",
          "Allows collectors to swap, stake, or complete their digital albums by scanner check-ins at real geographic coordinates in Tuzla.",
          "Showcases how web3 technology elevates tourism, fosters civic engagement, and builds gamified communities with rare commemorative status tiers."
        ]
      },
      slide_house_of_salt: {
        title: "House of Salt & SOL Symbiosis",
        subtitle: "The Phygital Marketing Key: bridging Physical 'Sol' (Salt) and Solana '$SOL'",
        content: [
          "Establishing Tuzla's 'House of Salt' (https://houseofsalt.base44.app): Artisan salt products, specialty spices, handcrafted crystal figurines, and handmade brine-etched jewelry.",
          "Solana themed box of salt: A physical promotional luxury souvenir target-mailed to global Solana developers and multi-million dollar venture investors.",
          "The 'Sol' and '$SOL' symbiosis: Plays on the direct translational match where 'Sol' is literally 'Salt' in Bosnian/Slavic, creating a natural marketing vector for the world's fastest web3 ecosystem."
        ]
      },
      slide_tuz_protocol: {
        title: "TUZ Protocol Traceability Engine",
        subtitle: "A Solana-backed Industrial Attestation for Exporting Commodities to the EU",
        content: [
          "Addressing the EU Battery Passport mandate (Regulation 2023/1542, effective Feb 2027), which forces strict Carbon Footprint, geological origin, and chemical purity reporting.",
          "Every single batch of brine pumped from the Tetima Mine receives an immutable on-chain tokenized NFT Certificate carrying assay properties (99.9% Na-Ion battery standard, ESG score, water footprint).",
          "Connects physical raw mining assets directly to on-chain audits via Program-Derived Addresses (PDAs) and Oracle verifications, fetching raw feed premium values."
        ]
      },
      slide_green_factory: {
        title: "Zero-Coal Green Precursor Hub",
        subtitle: "Combining Solana d.d. Tuzla, Lukavac Soda Plant, and Lake Modrac Hydropotential",
        content: [
          "Merging forces: Unifying the 140-year raw brine extraction expertise of Solana d.d. Tuzla and the advanced processing infrastructure of Şişecam Soda Lukavac to formulate high-margin battery precursors: Pure Sodium Carbonate (Na2CO3) and Sodium Hydroxide (NaOH).",
          "Circular Heat Exchange: Capturing unused thermal cooling discharge from the nearby power plant as recycling energy pipelines to drive evaporation ponds.",
          "Lake Modrac Hydro Loop: Utilizing the natural gravitational flow of cooling water discharge and Lake Modrac hydropotentials through mini-hydro stations to power chemical refining, cutting carbon footprint to near zero."
        ]
      },
      slide_subsidence_elimination: {
        title: "Subsidence-Safe Digital Twin Caverns",
        subtitle: "Resolving 1980s Karstification Risks through Modern Geomechanical Engineering",
        content: [
          "Historic Challenge: Historical unmonitored brine over-extraction caused underground karst dissolution, leading to geographic surface subsidence in downtown Tuzla.",
          "The Elimination Strategy: Installing continuous geomechanical sonar cavity sensors and InSAR high-altitude satellite deformation monitoring at the Tetima deposits.",
          "Digital Twin Caverns: Synchronizing subsurface geological structural models to on-chain ledgers. By regulating pressure and backfilling exhausted salt domes, surface displacement is permanently kept below 5mm thresholds."
        ]
      },
      slide_financials: {
        title: "Bankable Model & Investment Trajectory",
        subtitle: "Highly Viable Multi-Phase Economics and Local Employment Supercharger",
        content: [
          "Phase I (2027-2029): Establishes the 50,000 t/year Battery Grade Salt Platform (Est. EUR 15 Million CAPEX, creating 50 direct industrial jobs).",
          "Phase II (2029-2031): Integrates Soda processing for 100,000 t/year Pure Sodium Chemicals (Est. EUR 60 Million, creating 120 jobs).",
          "Phase III (2031-2035): Scales into active Prussian White Precursor compounds, outputting 20,000 t/year with 12% to 18% net operating cash margins."
        ]
      },
      slide_roadmap: {
        title: "The 10-Year Solana City Roadmap",
        subtitle: "From Organic Souvenirs to a Full-Scale Sovereign Web3 Circular Economy",
        content: [
          "Years 1-2 (Feasibility & AR Tourism): Deploy the Tuzla Tour App, 'House of Salt' tokenized boxes of salt, and finalize regulatory MiCA whitelist templates.",
          "Years 3-5 (Precursor Pilot): Install a demonstration 0.5 GWh/year precursor unit in Lukavac linked with the live on-chain TUZ Protocol.",
          "Years 5-10 (Tuzla Solana City): Transition public city grids, transit lines, industrial billing, energy storage microgrids, and local tourism into full-scale circular SOL/TUZ settlements."
        ]
      }
    },

    checkpoints: {
      cp_1: {
        name: "Solana Tuzla Museum",
        description: "The historical heart of salt manufacturing since 1885. Scan the original salt basin machinery for an entry pass.",
        arFeature: "3D Hologram of historical salt evaporators"
      },
      cp_2: {
        name: "Trg Slobode Fountain",
        description: "Tuzla's main civic square housing ancient underground neolithic salt-well extraction models.",
        arFeature: "Water flow mapping with integrated $SOL particles"
      },
      cp_3: {
        name: "Panonska Jezera (Pannonian Lakes)",
        description: "The unique artificial salt lakes in the center of Tuzla. High curative brine health waters.",
        arFeature: "Raw brine mineral density analyzer HUD"
      },
      cp_4: {
        name: "Tetima Salt Mine Reserve",
        description: "The core subterranean brine reserves yielding up to 320 g/L of pure geological minerals.",
        arFeature: "Geological sub-surface layer visualizer overlay"
      }
    }
  },
  bs: {
    deck: "📽️ Prezentacija Vizije",
    digital: "🌐 AISO i Turizam",
    physical: "📦 Kuća Soli i TUZ",
    industrial: "🔋 Zelena Gigatvornica",
    financial: "📊 Investicioni Kalkulator",
    aiTailor: "🤖 AI Prilagođavanje",
    linksHeader: "WEB WEB3 PORTALI I RESURSI",
    portalLink: "AISO Tuzla Portal",
    tourLink: "Tuzla Tour dApp",
    shopLink: "Kuća Soli Prodavnica",
    tuzProtocolLink: "TUZ Protokol Praćenje 🔗",
    bosniaCollectionLink: "Kolekcija NFT Bosna 🔗",

    walletHud: "SOLANA MOBILNI NOVČANIK",
    touristStatus: "TURISTIČKI STATUS",
    level: "Nivo",
    activeStatus: "TUZ-SYS // AKTIVAN",
    gpsTarget: "🛰️ GPS Koordinatni Okvir:",
    secAudit: "SIGURNOSNI AUDIT LANCA // METAPODACI ID: TUZ-3.5-FLASH",

    next: "SLJEDEĆA",
    prev: "PRETHODNA",
    scanNode: "SKENIRAJ LOKACIJU",
    scanSuccess: "Čestitamo! Lokacija skenirana! Otključan bh. reprezentativac NFT za SP '26",
    tokenizeCargo: "TOKENIZIRAJ TERET",
    balancing: "BALANSIRANJE...",
    balanceWell: "BALANSIRAJ BUŠOTINU",
    copyTag: "Kopiraj Kod",
    copied: "Kopirano!",

    mapGuideTitle: "INTERAKTIVNI KARTOGRAFSKI VODIČ",
    mapGuideDesc: "Zadržite kursor iznad čvorova: pratite geografske koordinate uživo u realnom vremenu na HUD-u iznad. Povezujemo resurse (Tetima, Lukavac Soda, Jezero Modrac) u integrisan sistem.",
    schemaTitle: "AISO Generator Strukturiranih Podataka",
    schemaDesc: "Korištenjem strukturiranih Google schema.org objekata (JSON-LD), činimo tuzlanske znamenitosti tražljivim za AI agente. Klasični SEO optimizira ključne riječi; AISO optimizira semantičku istinu.",
    schemaLabelName: "Naziv znamenitosti ili biznisa",
    schemaLabelDesc: "Konstruisani opis",
    schemaLabelCoord: "Geografske koordinate / podneblje",
    luxuryBoxTitle: "Tuzla Solana Premium Luksuzna Kutija",
    luxuryBoxDesc: "Fizička reprezentativna kutija poslana globalnim investitorima za promociju Tuzle i $SOL.",
    handmadeJewelryTitle: "Unikatni Nakit Od Kristala Soli",
    handmadeJewelryDesc: "Ručno rađeni kristali sa ugrađenim NFC čipovima.",
    wellDeposit: "IZABERI OKNO / BUŠOTINU",
    naclPurity: "NaCl ČISTOĆA (%)",
    batchTonnage: "KOLIČINA TERETA (t)",
    mintedLedger: "REGISTAR TOKENIZIRANOG MATERIJALA",
    flowStep1: "1. Podzemno crpljenje:",
    flowStep1Val: "Tetima slana kupola (Sirovine)",
    flowStep2: "2. Vakuumsko isparavanje:",
    flowStep2Val: "Solana d.d. Tuzla pogon",
    flowStep3: "3. Prekursorski spojevi:",
    flowStep3Val: "Lukavac Soda - soda pepeo",
    flowStep4: "4. Izvoz i Battery Passport:",
    flowStep4Val: "EU Ekološko Tržište Baterija",
    poweringSource: "Izvor napajanja pogona:",
    poweringVal: "Gravitacioni Hidropotencijal Jezera Modrac",
    maximumDisplacement: "InSAR SATELITSKO DEFORMACIONO PRAĆENJE // MAX SPUŠTANJE: < 5.0mm",
    projectedValuation: "PROJEKTOVANA NPV / BUDUĆA EVALUACIJA",
    capexInitiative: "INVESTICIONI CAPEX",
    annualRevenue: "GODIŠNJI PRIHOD",
    timelineStatus: "INTERAKTIVAN STATUS PROJEKTA",

    tailorTitle: "AI Generator Prezentacije Za Investitore",
    tailorDesc: "Analizirajte i kreirajte potpuno prilagođeni investicioni prospekat u realnom vremenu. Sistem komunicira sa Gemini LLM modelom kako bi naglasio ugljične, ekološke, energetske ili finansijske faktore prilagođene profilu investitora.",
    chooseProfile: "ODABERITE PROFIL INVESTITORA:",
    fundingGoal: "UNESITE CILJ ILI SPECIFIČAN ZADATAK INVESTICIJE:",
    investorQuestion: "UNESITE OPCIONO PITANJE ZA AI SAVJETNIKA:",
    generateBrief: "Kreiraj AI Prospekat",
    generating: "Dizajniram prospekat...",
    copiedBrief: "AI Prospekat kopiran u međuspremnik!",

    products: {
      title: "Kuća Soli Tuzla - Premium Predstavljanje",
      description: "unikatni zanatski i luksuzni proizvodi napravljeni u Tuzli koji spajaju tradicionalnu 'sol' sa modernim Solana dApp mogućnostima ($SOL). Iskusite luksuz i autentičnost uz blockchain sljedivost.",
      bridgeTitle: "Most Između Fizičkog i Digitalnog",
      bridgeDesc: "Svaki luksuzni proizvod u sebi ima ugrađen NFC čip. Skeniranjem potvrđujete porijeklo kristala direktno iz rudnika Tetima i uvid u digitalnu eko-deklaraciju sertifikovanu na Solana blockchain mreži.",
      p1Name: "Kuhinjska Kolekcija $OL-TUZ",
      p1Desc: "Dvije epruvete najčistije vakuumske soli smještene u ručno graviranoj kutiji od premium orahovog drveta sa Solana obilježjem. Savršen poklon za programere.",
      p2Name: "$SOL Kristali Za Kupanje - Tuzla Bath",
      p2Desc: "Terapeutska pannonijska slana so obogaćena prirodnim uljima i laticama organske lavande, mente i divlje ruže sa slanih gejzira Panonskih jezera.",
      p3Name: "Tradicionalni Tuzlanski Mix - So i Paprika",
      p3Desc: "Jedinstvena kulinarska mješavina vakuumske kristalne soli i sporo pečene, dimljene organske bosanske slatke paprike za vrhunski gourmet doživljaj."
    },

    slides: {
      slide_intro: {
        title: "Tuzla Solana City Vizija",
        subtitle: "Protokol TUZ: Spajanje 140 Godina Tuzlanske Soli sa Solana Blockchainom i Tehnologijom Natrijum-Ionskih Baterija",
        content: [
          "Kompletan višefazni, cirkularni projekat urbane i industrijske transformacije Tuzle (Bosna i Hercegovina).",
          "Integracija lokalnog industrijskog naslijeđa (Solana d.d. Tuzla osnovana 1885. godine) i bogatih rezervi Tetima rudnika (~400M tona soli) u prvi održivi lanac natrijum-ionskih (Na-Ion) sirovina u Evropi.",
          "Napajanje lanca 100% čistim gravitacionim hidro-potencijalima, uz korištenje Solana blockchaina ($SOL / TUZ token) za izdavanje EU digitalnih pasoša za baterije (origin attestation)."
        ]
      },
      slide_digital_foundation: {
        title: "AISO i Interaktivni Turizam",
        subtitle: "Optimizacija Online Prisustva za AI Agente i Tuzlanski AR Turistički Quest",
        content: [
          "AI Search Optimization (AISO): Re-inženjering internet prisustva lokalnih znamenitosti i firmi kako bi ih pretraživački AI agenti (Gemini, ChatGPT) direktno pronalazili i preporučivali.",
          "Tuzla Tour App: Mobilni turistički portal. Posjetioci prate GPS tačke u Tuzli (Solana muzej, Trg Slobode, Panonska jezera), rješavaju kvizove i otključavaju rijetke NFT dresove sportista BiH.",
          "Integrisani Novčanik: Dokazivanje brzih mikro-transakcija i potvrde digitalnog vlasništva na Solana mreži bez uobičajenih bankovnih barijera."
        ]
      },
      slide_nft_album: {
        title: "Bosanskohercegovački Solana NFT Album - SP 2026",
        subtitle: "Povezivanje Nacionalnog Ponosa sa Modernim On-Chain Iskustvom Navijača",
        content: [
          "Digitalni album reprezentacije Bosne i Hercegovine za Svjetsko Prvenstvo 2026. godine, izgrađen na Solana SPL standardu.",
          "Omogućava kolekcionarima razmjenu, 'stejkovanje' ili kompletiranje albuma putem geografskih check-ina na stvarnim lokacijama u Tuzli.",
          "Pokazuje kako Web3 tehnologija i geolokacione igre mogu podići nivo turizma i povezati sportske zajednice uz interaktivne nagradne statuse."
        ]
      },
      slide_house_of_salt: {
        title: "Kuća Soli Tuzla i Simbioza sa $SOL",
        subtitle: "Spoj Tradicije i Blockchain Tehnologije: Fizička Sol i Solana '$SOL'",
        content: [
          "Osnivanje tuzlanske 'Kuće Soli' (https://houseofsalt.base44.app): Artisan proizvodi od ljekovite soli, začinske mješavine, prepoznatljivi slani ukrasi i ručno rađeni nakit od slane otopine.",
          "Solana Tematska Kutija Soli: Premium promotivni fizikalni poklon namijenjen globalnim programerima, preduzetnicima i fondovima u Solana ekosistemu.",
          "Simbioza 'Soli' i '$SOL-a': Korištenje jezičke podudarnosti gdje se pojam 'Salt' kod nas naziva 'Sol', stvarajući savršen marketinški adut u Web3 industriji."
        ]
      },
      slide_tuz_protocol: {
        title: "traceability platforma - Protokol TUZ",
        subtitle: "Tehnička Certifikacija i Siguran Izvoz Industrijskih Sirovina za Evropsku Uniju",
        content: [
          "Ispunjenje predstojeće regulative za EU Baterijski Pasoš (Uredba 2023/1542, stupa na snagu u februaru 2027.), koja zahtijeva precizan ugljični otisak i hemijsku deklaraciju.",
          "Svaki pojedinačni industrijski teret slanice crpljen iz ležišta Tetima dobija on-chain tokenizaciju i NFT sertifikat sa hemijskom analizom (čistoća 99.9% NaCl, ESG ocjena i trag vode).",
          "Povezivanje fizičkog rudnika direkto sa on-chain revizijama i verifikacijama (Oracle), što povećava izvoznu premiju naših industrijskih proizvoda."
        ]
      },
      slide_green_factory: {
        title: "Zeleni Prekursor Pogon Bez Uglja",
        subtitle: "Sinergija Solana d.d., Fabrike Soda Lukavac i Hidropotencijala Jezera Modrac",
        content: [
          "Spajanje snaga: Kombinovanje 140 godina rudarskog znanja Solana d.d. Tuzla i hemijske prerade Şişecam Soda Lukavac za formulu visoko-profitnih baterijskih sirovina: čistog natrijum karbonata i natrijum hidroksida.",
          "Korištenje termalnog hlađenja: Povrat toplote iz termoelektrane Tuzla kao ekološki izvor energije za isparavanje, eliminišući potrebu za ugljem u krugu fabrike.",
          "Ekološki krug Modrac: Upotreba prirodnog toka rashladne vode i hidropotencijala akumulacije Modrac kroz mini-hidroelektrane, smanjujući CO2 otisak na minimum."
        ]
      },
      slide_subsidence_elimination: {
        title: "Digitalni Blizanci Slane Kupole i Slijeganje Tla",
        subtitle: "Rješavanje Istorijskog Slijeganja Tla kroz Geomehanički Inženjering",
        content: [
          "Istorijski izazov: Nekontrolisano crpljenje slanice iznad nekadašnjih bušotina uzrokovalo je slijeganje tla u samom centru grada Tuzla 1980-ih godina.",
          "Strategija rješavanja: Instalacija kontinuiranih geomehaničkih sonara velike preciznosti u bušotinama i satelitsko radarsko praćenje deformacija (InSAR) na ležištima Tetima.",
          "Usklađivanje lanca: Prenos radarskih podmetača direktno na Solana blockchain. Balansiranjem pritisaka i kontrolisanim punjenjem praznih bušotina, kretanje tla je smanjeno na zanemarljiv nivo (< 5mm)."
        ]
      },
      slide_financials: {
        title: "Ekonomski Model i Tijek Investicija",
        subtitle: "Povoljni Višefazni Finansijski Pokazatelji i Generisanje Radnih Mjesta",
        content: [
          "Faza I (2027-2029): Uspostavljanje baze za baterijsku so kapaciteta 50.000 tona/godišnje (CAPEX EUR 15 Miliona, 50 direktnih radnih mjesta u industriji).",
          "Faza II (2029-2031): Integracija hemijskog postrojenja za 100.000 tona čistih natrijumskih soli (CAPEX EUR 60 Miliona, dodatnih 120 poslova).",
          "Faza III (2031-2035): Skaliranje u proizvodnju Prussian White prekursora baterija, kapacitet 20.000 tona uz operativne marže od 12% do 18%."
        ]
      },
      slide_roadmap: {
        title: "10-godišnji Plan Solana Grada",
        subtitle: "Od Organskih Poklona do Suverene Cirkularne Ekonomije Grada na Solana Mreži",
        content: [
          "Godine 1-2 (Dizajn i Turizam): Razvoj dApp-a Tuzla Tour, poklon kutije sa NFC čipovima za Kuću Soli, i regulatorno prilagođavanje u skladu sa EU MiCA okvirima.",
          "Godine 3-5 (Prekursorski Pilot): Postavljanje testne linije kapaciteta 0.5 GWh/godišnje u Lukavcu integrisane sa živim podacima Protokola TUZ.",
          "Godine 5-10 (Sovereign Solana City): Integracija gradske mreže, javnog prevoza, industrijskih plaćanja, baterijske mikro-mreže i turističke potrošnje u SOL/TUZ valutu."
        ]
      }
    },

    checkpoints: {
      cp_1: {
        name: "Muzej Soli Solana Tuzla",
        description: "Istorijsko sjedište proizvodnje soli od 1885. godine. Skenirajte staru mašinu za vakuumsko uparavanje za propusnicu.",
        arFeature: "3D animacija istorijskih isparivača soli"
      },
      cp_2: {
        name: "Fasada kod fontane Trg Slobode",
        description: "Glavni gradski trg u Tuzli koji baštini ostatke neolitskih sohara i crpilišta.",
        arFeature: "Vizualizacija vodenog toka sa ugrađenim $SOL česticama"
      },
      cp_3: {
        name: "Slana Panonska Jezera",
        description: "Jedinstvena umjetna slana jezera u samom centru Tuzle sa mineralnom i ljekovitom slanom vodom.",
        arFeature: "HUD displej analize gustoće mineralne vode"
      },
      cp_4: {
        name: "Rudnik soli Tetima",
        description: "Glavne podzemne slane naslage odakle se crpi čista slanica mineralne gustoće do 320 g/L.",
        arFeature: "Slojeviti geološki prikaz podzemnih kopova"
      }
    }
  }
};
