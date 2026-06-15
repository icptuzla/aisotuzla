import { useState, useEffect } from "react";
import {
  Coins,
  MapPin,
  ShieldAlert,
  Cpu,
  Layers,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Landmark,
  Copy,
  Wallet,
  Sparkles,
  Award,
  Box,
  RotateCcw,
  TrendingUp,
  Activity,
  FileCheck,
  Check,
  Zap,
  Globe2,
  Lock,
  User,
  Sliders,
  ChevronRight,
  ExternalLink,
  Waves,
  Factory
} from "lucide-react";
import {
  PRESENTATION_SLIDES,
  TOUR_CHECKPOINTS,
  BOSNIA_PLAYERS,
  INITIAL_BATCHES,
  CAVERNS,
  INVESTOR_PROFILES,
  PresentationSlide
} from "./data/presentationData";
import { TRANSLATIONS } from "./data/translations";
import { BATTERY_METRICS, SODIUM_CATHODES, FAQ_DATA } from "./data/batteryComparisonData";
import aisoRebuildImg from "./data/AISO REBUILD.png";
import kenanToyImg from "./data/KenanToy.png";
import kenanAlajbegovicWebp from "./data/kenan-alajbegovic.webp";
import piDemirovicImg from "./data/Pi_Demirovic.webp";
import piDzekoImg from "./data/Pi_dzeko.webp";
import saltAndPaprikaImg from "./data/Salt and Paprika.png";
import bathSaltSolImg from "./data/BathSaltSOL.png";
import saltForSolImg from "./data/SaltForSOL.png";
import solanaTuzlaImg from "./data/SOLanaTuzla.png";
import solNft33Img from "./data/SOLNFT33.png";
import logoAsQualityAssuranceTuzImg from "./data/LogoAsQualityAssuranceTUZ.png";
import tuzProtocolQrImg from "./data/TUZ_ProtocolQR.png";
import {
  TuzProtocolBatch,
  CavernState,
  FinancialInputs,
  FinancialResults,
  InvestorProfile
} from "./types";

export default function App() {
  // Localization states
  const [language, setLanguage] = useState<"en" | "bs">("en");
  const t = TRANSLATIONS[language];

  // Navigation & presentation states
  const [activeTab, setActiveTab] = useState<"deck" | "digital" | "physical" | "industrial" | "financial" | "ai_tailor">("deck");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  // Simulated Web3 / Wallet states
  const [userXp, setUserXp] = useState<number>(100);
  const [solBalance, setSolBalance] = useState<number>(4.2);
  const [tuzBalance, setTuzBalance] = useState<number>(25);
  const [unlockedPlayers, setUnlockedPlayers] = useState<string[]>([]);
  const [lastScannedCheckpoint, setLastScannedCheckpoint] = useState<string | null>(null);
  const [scanMessage, setScanMessage] = useState<string>("");

  // AISO Editor States
  const [landmarkName, setLandmarkName] = useState<string>("Solana Tuzla DD");
  const [landmarkDesc, setLandmarkDesc] = useState<string>("140-year old mineral exporter specializing in high-grade vacuum salt and gourmet table salts.");
  const [landmarkLocality, setLandmarkLocality] = useState<string>("Tuzla, Bosnia");
  const [aisoCopied, setAisoCopied] = useState<boolean>(false);

  // TUZ Protocol Mint States
  const [certifiedBatches, setCertifiedBatches] = useState<TuzProtocolBatch[]>(INITIAL_BATCHES);
  const [selectedSource, setSelectedSource] = useState<"Tetima Deep Well T-1" | "Tetima Deep Well T-2" | "Hukalo Well-V">("Tetima Deep Well T-1");
  const [customTonnage, setCustomTonnage] = useState<number>(1500);
  const [customPurity, setCustomPurity] = useState<number>(99.95);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [mintReport, setMintReport] = useState<string>("");

  // Gigafactory Pipeline States
  const [enableHydroFlow, setEnableHydroFlow] = useState<boolean>(true);
  const [enableRecycledHeat, setEnableRecycledHeat] = useState<boolean>(true);
  
  // Cavern stabilization states
  const [cavernList, setCavernList] = useState<CavernState[]>(CAVERNS);
  const [stablizingId, setStabilizingId] = useState<string | null>(null);

  // Financial slider parameters
  const [financialInputs, setFinancialInputs] = useState<FinancialInputs>({
    gigafactoryScaleGwh: 5,
    rawSaltOutputTpy: 150000,
    batteryCellSellingPrice: 95,
    capexPerGwhMillion: 90,
    greenEnergyRatio: 85,
    brinePurchasePriceT: 25
  });
  const [financialResults, setFinancialResults] = useState<FinancialResults>({
    totalCapexMillion: 0,
    annualRevenueMillion: 0,
    netMarginPercent: 0,
    annualEbitdaMillion: 0,
    irrPercent: 0,
    jobsCreated: 0
  });

  // AI Tailor / Gemini states
  const [selectedInvestorId, setSelectedInvestorId] = useState<string>("solana_vc");
  const [customUserGoal, setCustomUserGoal] = useState<string>("Obtain Phase I early seed capital (EUR 15M) for the Tuzla Battery Precursor Hub.");
  const [customQuestion, setCustomQuestion] = useState<string>("");
  const [tailoredPitch, setTailoredPitch] = useState<string>("");
  const [isGeneratingPitch, setIsGeneratingPitch] = useState<boolean>(false);
  const [recentPitches, setRecentPitches] = useState<{ [key: string]: string }>({});

  // SVG Coordinates HUD Tracker State
  const [hoveredCoords, setHoveredCoords] = useState<string>("44.5385° N, 18.6744° E");

  // Battery comparison & SIB vs Li-ion FAQ states
  const [selectedBatteryType, setSelectedBatteryType] = useState<"sodium" | "lfp" | "nmc">("sodium");
  const [faqSearch, setFaqSearch] = useState<string>("");
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
  const [faqCategoryFilter, setFaqCategoryFilter] = useState<string>("All");

  // Sync presentation slides with respective tabs for user-friendly navigation
  const handleNextSlide = () => {
    if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Jump slide to correct slide tab index
  const jumpToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    const slide = PRESENTATION_SLIDES[index];
    if (slide.category === "Vision") setActiveTab("deck");
    else if (slide.category === "Digital") setActiveTab("digital");
    else if (slide.category === "Physical") setActiveTab("physical");
    else if (slide.category === "Industrial") setActiveTab("industrial");
    else if (slide.category === "Financial") setActiveTab("financial");
  };

  // Trigger financial model updates
  useEffect(() => {
    const scale = financialInputs.gigafactoryScaleGwh;
    const tpyBrine = financialInputs.rawSaltOutputTpy;
    const cellPrice = financialInputs.batteryCellSellingPrice;
    const capexPerGwh = financialInputs.capexPerGwhMillion;
    const brinePrice = financialInputs.brinePurchasePriceT;
    const greenRatio = financialInputs.greenEnergyRatio;

    // Derived formulas matching data in PDFs
    const totalCapex = scale * capexPerGwh + 15; // base salt platform is 15M
    const annualBrineRev = (tpyBrine * brinePrice) / 1000000; // revenue from salt in millions
    const annualBatteryRev = (scale * 1000000 * cellPrice) / 1000000; // scale * GWh cells * price
    const totalRevenue = annualBrineRev + annualBatteryRev;

    // Carbon savings impact margins positively (avoid and save EU Carbon Border adjustment taxes)
    const carbonTaxSavingsRatio = (greenRatio / 100) * 0.05; // up to 5% savings
    const baseMargin = 12; // base margin
    const netMargin = Math.min(22, baseMargin + carbonTaxSavingsRatio * 150); // capped at 22%
    const annualEbitda = (totalRevenue * netMargin) / 100;
    
    // IRR correlates with Net margins and scale
    const irr = 15 + (netMargin - baseMargin) * 2 + (scale * 0.8);
    const jobs = Math.round(scale * 70 + (tpyBrine / 2000)); // 70 direct jobs per GWh, rest in mining

    setFinancialResults({
      totalCapexMillion: parseFloat(totalCapex.toFixed(1)),
      annualRevenueMillion: parseFloat(totalRevenue.toFixed(1)),
      netMarginPercent: parseFloat(netMargin.toFixed(1)),
      annualEbitdaMillion: parseFloat(annualEbitda.toFixed(1)),
      irrPercent: parseFloat(irr.toFixed(1)),
      jobsCreated: jobs
    });
  }, [financialInputs]);

  // Handle location scans for tourist checklists
  const scanCheckpoint = (id: string, xp: number, tokenName: string) => {
    setLastScannedCheckpoint(id);
    setUserXp((prev) => prev + xp);
    setTuzBalance((prev) => prev + xp / 10);
    setSolBalance((prev) => parseFloat((prev + 0.05).toFixed(2))); // minor faucet incentive
    
    // Unlock matching player card
    const randomPlayer = BOSNIA_PLAYERS.find(p => !unlockedPlayers.includes(p.id));
    if (randomPlayer) {
      setUnlockedPlayers((prev) => [...prev, randomPlayer.id]);
      setScanMessage(language === "bs" 
        ? `📍 Provjera Lokacije Uspješna! Otključana sportska NFT kartica: ${randomPlayer.name} (#${randomPlayer.number})! TX potpis: sol_tg_${Date.now().toString(36)}`
        : `📍 Checkpoint Scanned! Unlocked Bosnian WC '26 Sports NFT: ${randomPlayer.name} (#${randomPlayer.number})! Generated TX signature: sol_tg_${Date.now().toString(36)}`);
    } else {
      setScanMessage(language === "bs"
        ? `📍 Provjera Lokacije Uspješna! Osvojene nagrade: +${xp} XP i +${xp/10} TUZ!`
        : `📍 Checkpoint Scanned! Earned rewards: +${xp} XP & +${xp/10} TUZ!`);
    }

    setTimeout(() => {
      setScanMessage("");
    }, 6000);
  };

  // Re-inject water & equalize cavern geomechanical readings (prevent land subsidence)
  const balanceCavern = (id: string) => {
    setStabilizingId(id);
    setTimeout(() => {
      setCavernList((prev) =>
        prev.map((c) => {
          if (c.id === id) {
            return {
              ...c,
              pressureBar: 22.0, // perfect balance standard
              subsidenceRateMm: 1.1, // drops subsidence rate to optimal
              status: "Optimal",
              pressureBalanced: true
            };
          }
          return c;
        })
      );
      setStabilizingId(null);
    }, 2000);
  };

  // A highly resilient helper to fetch and parse response JSON without throwing uncaught "undefined" or malformed exceptions.
  const safeFetchJson = async (url: string, options?: RequestInit) => {
    try {
      const response = await fetch(url, options);
      const text = await response.text();
      if (!text || text.trim() === "" || text === "undefined") {
        return { success: false, error: "Empty or undefined response" };
      }
      return JSON.parse(text);
    } catch (err) {
      console.warn(`[SafeFetch] Failed parsing JSON from ${url}:`, err);
      return { success: false, error: String(err) };
    }
  };

  // Simulate on-chain tokenization with authentic responses
  const mintOnSolana = async () => {
    setIsMinting(true);
    setMintReport("");
    
    try {
      const data = await safeFetchJson("/api/blockchain/mint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          batchId: `TUZ-MINT-${Date.now().toString().substring(8)}`,
          src: selectedSource,
          purity: customPurity
        })
      });
      
      if (data && data.success) {
        const newBatch: TuzProtocolBatch = {
          batchId: `TUZ-${selectedSource.split(" ").slice(-1)[0]}-${Date.now().toString().substring(9)}`,
          timestamp: new Date().toISOString(),
          brineSource: selectedSource,
          tonnage: customTonnage,
          purity: customPurity,
          classification: customPurity >= 99.9 ? "Battery Grade Na-Ion commodity" : "Industrial Grade",
          carbonFootprint: enableHydroFlow ? 0.06 : 0.42,
          certified: true,
          onChainTx: data.txSignature,
          esgRating: customPurity >= 99.9 && enableHydroFlow ? "AAA" : "AA"
        };
        
        setCertifiedBatches((prev) => [newBatch, ...prev]);
        setTuzBalance((prev) => prev + 50); // Rewards on Solana
        setMintReport(`Batch ${newBatch.batchId} successfully tokenized! Recieved ${newBatch.classification} certification. Signature: ${data.txSignature}`);
      } else {
        throw new Error(data?.error || "Execution failed");
      }
    } catch (e: any) {
      console.error(e);
      setMintReport("Simulated local deployment: Minting successful! SPL metadata uploaded to IPFS.");
    } finally {
      setIsMinting(false);
    }
  };

  // Query Gemini / Backend live tailored strategy pitch
  const generatePitchBrief = async () => {
    const profile = INVESTOR_PROFILES.find((p) => p.id === selectedInvestorId);
    if (!profile) return;

    setIsGeneratingPitch(true);
    setTailoredPitch("");

    try {
      const data = await safeFetchJson("/api/pitch/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          investorProfile: profile,
          userGoal: customUserGoal,
          customQuestion: customQuestion
        })
      });
      if (data && data.pitch) {
        setTailoredPitch(data.pitch);
        setRecentPitches((prev) => ({
          ...prev,
          [selectedInvestorId]: data.pitch
        }));
      } else {
        throw new Error(data?.error || "Strategic Pitch compilation engine returned empty payload");
      }
    } catch (e: any) {
      console.error(e);
      setTailoredPitch("Error querying the tailoring engine. Please verify that server.ts is active.");
    } finally {
      setIsGeneratingPitch(false);
    }
  };

  // Autoload standard brief on first user render
  useEffect(() => {
    generatePitchBrief();
  }, [selectedInvestorId]);

  // Copy Schema to Clipboard
  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(generateSchemaObject(), null, 2));
    setAisoCopied(true);
    setTimeout(() => setAisoCopied(false), 2000);
  };

  const generateSchemaObject = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": landmarkName,
      "description": landmarkDesc,
      "url": "https://aiso-tuzla-ai.lovable.app/",
      "logo": "https://houseofsalt.base44.app/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": landmarkLocality.split(",")[0]?.trim() || "Tuzla",
        "addressRegion": "Federation of Bosnia and Herzegovina",
        "addressCountry": "BA"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aiso-tuzla-ai.lovable.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "knowsAbout": ["Sodium-Ion Battery Precursors", "Solana blockchain", "Artisanal salt chemistry"]
    };
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans ambient-bg p-4 md:p-6 flex flex-col justify-between">
      
      {/* 1. Header Navigation Bar */}
      <header className="w-full max-w-7xl mx-auto border-b border-slate-800 pb-5 mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-1 px-2.5 rounded-full text-xs font-mono font-medium text-[#14F195] bg-[#14F195]/10 border border-[#14F195]/30">
              $SOL SYMBIOSE
            </span>
            <span className="p-1 px-2 rounded-full text-xs font-mono font-medium text-slate-400 bg-slate-900 border border-slate-800">
              TUZ-SOL: 1.20 SOL
            </span>
            <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5 select-none shrink-0" id="lang-switcher">
              <button
                onClick={() => setLanguage("en")}
                className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded transition ${
                  language === "en" ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-white"
                }`}
                id="lang-selector-en"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("bs")}
                className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded transition ${
                  language === "bs" ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-white"
                }`}
                id="lang-selector-bs"
              >
                BS
              </button>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight mt-1 text-white">
            Tuzla Solana City <span className="font-light text-slate-400">{language === "bs" ? "Centar Vizije" : "Vision Hub"}</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            {language === "bs" 
              ? "Faza I-III Bankabilna Industrijska Izmjena i Solana Web3 Simbioza" 
              : "Phase I-III Bankable Industrial Transformation & Solana Web3 Symbiosis"}
          </p>
        </div>

        {/* Live Digital Wallet HUD (Representing investor's connected state) */}
        <div className="bg-slate-900/95 border border-slate-800 p-3 rounded-xl flex items-center justify-between sm:justify-end gap-6 shadow-xl w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Wallet className="w-4 h-4" />
            </span>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">{t.walletHud}</p>
              <p className="text-xs font-mono font-bold text-slate-200">
                {solBalance} SOL <span className="text-slate-500">|</span> {tuzBalance} TUZ
              </p>
            </div>
          </div>
          <div className="border-l border-slate-800 h-8 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">{t.touristStatus}</p>
              <p className="text-xs font-mono font-bold text-slate-200">
                {userXp} XP <span className="text-slate-400 text-[10px] bg-slate-800 px-1.5 py-0.5 rounded ml-1">{t.level} 2</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Content Grid - Vertical/Horizontal Tabs Layout */}
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start flex-grow">
        
        {/* Navigation Sidebar Panel (ColumnSpan 3) */}
        <nav className="col-span-1 lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80 sticky top-4 z-40">
          <button
            onClick={() => setActiveTab("deck")}
            className={`flex items-center gap-3 text-sm px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all-300 w-full ${
              activeTab === "deck"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/15"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            id="nav-deck"
          >
            <Layers className="w-4 h-4" />
            <span>{t.deck}</span>
          </button>
          
          <button
            onClick={() => setActiveTab("digital")}
            className={`flex items-center gap-3 text-sm px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all-300 w-full ${
              activeTab === "digital"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            id="nav-digital"
          >
            <Globe2 className="w-4 h-4" />
            <span>{t.digital}</span>
          </button>

          <button
            onClick={() => setActiveTab("physical")}
            className={`flex items-center gap-3 text-sm px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all-300 w-full ${
              activeTab === "physical"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            id="nav-physical"
          >
            <Box className="w-4 h-4" />
            <span>{t.physical}</span>
          </button>

          <button
            onClick={() => setActiveTab("industrial")}
            className={`flex items-center gap-3 text-sm px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all-300 w-full ${
              activeTab === "industrial"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            id="nav-industrial"
          >
            <Cpu className="w-4 h-4" />
            <span>{t.industrial}</span>
          </button>

          <button
            onClick={() => setActiveTab("financial")}
            className={`flex items-center gap-3 text-sm px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all-300 w-full ${
              activeTab === "financial"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            id="nav-financial"
          >
            <Sliders className="w-4 h-4" />
            <span>{t.financial}</span>
          </button>

          <button
            onClick={() => setActiveTab("ai_tailor")}
            className={`flex items-center gap-3 text-sm px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all-300 w-full ${
              activeTab === "ai_tailor"
                ? "bg-gradient-to-r from-slate-700 to-slate-800 text-[#14F195] border border-[#14F195]/20 shadow-md"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
            id="nav-ai-tailor"
          >
            <Sparkles className="w-4 h-4 text-[#14F195]" />
            <span>{t.aiTailor}</span>
          </button>

          <div className="border-t border-slate-800/80 my-3 pt-3 hidden lg:block">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 select-none">
              <p className="text-[10px] font-mono text-slate-500 uppercase">{t.linksHeader}</p>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="https://aiso-tuzla-ai.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
                >
                  <span>{t.portalLink}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://tuzlatourapp.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
                >
                  <span>{t.tourLink}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://houseofsalt.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
                >
                  <span>{t.shopLink}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://tuz-protocol.onhercules.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#14F195] hover:text-[#14F195]/85 flex items-center justify-between border-t border-slate-800/50 pt-2 font-semibold"
                >
                  <span>{t.tuzProtocolLink}</span>
                  <ExternalLink className="w-3 h-3 text-[#14F195]" />
                </a>
                <a
                  href="https://bosnia-collection.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#14F195] hover:text-[#14F195]/85 flex items-center justify-between border-t border-slate-800/50 pt-2 font-semibold"
                >
                  <span>{t.bosniaCollectionLink}</span>
                  <ExternalLink className="w-3 h-3 text-[#14F195]" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Showcase / Workstation Arena (ColumnSpan 9) */}
        <section className="col-span-1 lg:col-span-9 grid grid-cols-1 gap-6">
          
          {/* A. If showing Master Pitch Slides Tab */}
          {activeTab === "deck" && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 bg-slate-900/30 p-1 rounded-2xl">
              
              {/* Left Side: Presentation Card (6/12 columns) */}
              <div className="xl:col-span-7 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <span className="p-1 px-3 text-[10px] font-mono font-bold tracking-widest text-[#14F195] bg-[#14F195]/5 border border-[#14F195]/20 uppercase rounded">
                      {language === "bs" ? "Slajd" : "Slide"} {currentSlideIndex + 1} {language === "bs" ? "od" : "of"} {PRESENTATION_SLIDES.length} : {language === "bs" ? (currentSlide.category === "Vision" ? "Vizija" : currentSlide.category === "Digital" ? "AISO i Turizam" : currentSlide.category === "Physical" ? "Sirovine i Nakit" : currentSlide.category === "Industrial" ? "Gigatvornica" : "Ekonomija") : currentSlide.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {language === "bs" ? "POVJERLJIV PROSPEKAT" : "CONFIDENTIAL PROSPECTUS"}
                    </span>
                  </div>

                  {(() => {
                    const activeSlideTrans = t.slides[currentSlide.id] || currentSlide;
                    return (
                      <>
                        <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight leading-tight">
                          {activeSlideTrans.title}
                        </h2>
                        <p className="text-slate-400 text-sm mt-2 mb-6 border-l-2 border-indigo-500/60 pl-3 leading-relaxed">
                          {activeSlideTrans.subtitle}
                        </p>

                        <ul className="space-y-4 text-slate-300 text-sm md:text-base">
                          {activeSlideTrans.content.map((point, idx) => (
                            <li key={idx} className="flex gap-3 leading-relaxed">
                              <span className="text-indigo-500 font-mono mt-1 text-sm shrink-0">0{idx + 1}.</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    );
                  })()}
                </div>

                {/* Footer Slider Controllers */}
                <div className="flex items-center justify-between mt-8 border-t border-slate-800 pt-6">
                  <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] md:max-w-none">
                    {PRESENTATION_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => jumpToSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0 ${
                          currentSlideIndex === idx ? "bg-[#14F195] w-6" : "bg-slate-700 hover:bg-slate-500"
                        }`}
                        title={`Go to Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handlePrevSlide}
                      disabled={currentSlideIndex === 0}
                      className="p-2.5 px-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 animate-hover"
                      id="slide-prev-btn"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-xs font-mono">{t.prev}</span>
                    </button>
                    
                    <button
                      onClick={handleNextSlide}
                      disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
                      className="p-2.5 px-4 rounded-xl border border-indigo-800 bg-indigo-900 hover:bg-indigo-850 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 animate-hover"
                      id="slide-next-btn"
                    >
                      <span className="text-xs font-mono">{t.next}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Animated Real-time Map and Simulator HUD (5/12 columns) */}
              <div className="xl:col-span-5 bg-slate-950/90 border border-slate-800/80 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden relative">
                
                {/* Header Badge */}
                <div className="p-4 border-b border-slate-800/60 bg-slate-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Activity className="w-3 h-3 text-[#14F195] animate-pulse" />
                    <span>{language === "bs" ? "SINKRONIZOVANA SIMULACIJSKA MREŽA" : "SYNCD SIMULATOR GRID"}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-white bg-slate-850 border border-slate-700">
                    {t.activeStatus}
                  </span>
                </div>

                {/* Simulated Content Area that updates depending on what slide is selected */}
                <div className="p-6 flex-grow flex flex-col justify-center">
                  
                  {/* Visualizer 1: Interactive GIS Map */}
                  {currentSlide.visualId === "map" && (
                    <div className="space-y-4">
                      <div className="bg-slate-900/80 border border-slate-850 p-3 rounded-lg flex justify-between items-center text-xs font-mono text-slate-400">
                        <span>{t.gpsTarget}</span>
                        <span className="text-[#14F195]">{hoveredCoords}</span>
                      </div>
                      
                      {/* Customized Tuzla SVG Blueprint Map Card */}
                      <div className="border border-slate-800 rounded-xl relative p-1.5 overflow-hidden group bg-slate-950">
                        <svg viewBox="0 0 400 250" className="w-full h-auto text-slate-600 bg-slate-950 rounded-lg">
                          <g stroke="#1e293b" strokeWidth="1.5" fill="none">
                            {/* Terrain Topo Rings */}
                            <path d="M50 30 C120 40, 200 10, 350 40" />
                            <path d="M30 90 C150 110, 250 80, 380 120" />
                            <path d="M20 180 C180 200, 300 170, 370 210" />
                            {/* Lake Modrac Contour */}
                            <path d="M 40 180 Q 80 140, 100 200 T 140 190 T 130 240 Z" fill="#1e3a8a" fillOpacity="0.3" stroke="#2563eb" strokeWidth="2" />
                          </g>

                          {/* Connection Pipeline Links */}
                          <line x1="85" y1="180" x2="160" y2="120" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                          <line x1="160" y1="120" x2="260" y2="80" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" />
                          <line x1="260" y1="80" x2="310" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />

                          {/* Map Landmarks Interactive Nodes */}
                          {/* Modrac Hydro */}
                          <g className="cursor-pointer" onMouseEnter={() => setHoveredCoords("44.4989° N, 18.4878° E")}>
                            <circle cx="85" cy="180" r="10" fill="#2563eb" fillOpacity="0.4" className="animate-ping" />
                            <circle cx="85" cy="180" r="6" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1.5" />
                          </g>

                          {/* Lukavac Factory */}
                          <g className="cursor-pointer" onMouseEnter={() => setHoveredCoords("44.5320° N, 18.5280° E")}>
                            <rect x="150" y="110" width="18" height="18" rx="3" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
                          </g>

                          {/* Solana Tuzla DD */}
                          <g className="cursor-pointer" onMouseEnter={() => setHoveredCoords("44.5422° N, 18.6653° E")}>
                            <polygon points="260,70 270,90 250,90" fill="#9945FF" stroke="#dedcff" strokeWidth="1.5" />
                          </g>

                          {/* Tetima Mine Shafts */}
                          <g className="cursor-pointer" onMouseEnter={() => setHoveredCoords("44.5950° N, 18.7201° E")}>
                            <circle cx="310" cy="150" r="8" fill="#f59e0b" className="animate-pulse" />
                            <circle cx="310" cy="150" r="4" fill="#d97706" />
                          </g>

                          {/* City Center Pannonian Lakes */}
                          <g className="cursor-pointer" onMouseEnter={() => setHoveredCoords("44.5401° N, 18.6812° E")}>
                            <ellipse cx="280" cy="120" rx="14" ry="7" fill="#06b6d4" fillOpacity="0.4" stroke="#22d3ee" strokeWidth="1.5" />
                          </g>

                          {/* Map Labels */}
                          <text x="80" y="215" fill="#93c5fd" fontSize="9" fontFamily="font-mono" fontWeight="bold">{language === "bs" ? "Modrac Brana (Hidro)" : "Lake Modrac (Hydro)"}</text>
                          <text x="135" y="100" fill="#34d399" fontSize="9" fontFamily="font-mono">{language === "bs" ? "Sodara Lukavac" : "Lukavac Soda"}</text>
                          <text x="220" y="65" fill="#c084fc" fontSize="9" fontFamily="font-mono">Solana d.d. Tuzla</text>
                          <text x="290" y="170" fill="#fbbf24" fontSize="9" fontFamily="font-mono">{language === "bs" ? "Tetima (Rudnik)" : "Tetima (Salts)"}</text>
                          <text x="290" y="115" fill="#a5f3fc" fontSize="8" fontFamily="font-mono">{language === "bs" ? "Panonska Jezera" : "Pannonian Lakes"}</text>
                        </svg>
                      </div>
                      
                      {/* Floating Tour Logo Emblem in Map View */}
                      <div className="absolute top-16 right-4 w-12 h-12 rounded-full border border-yellow-500/30 bg-slate-900/90 p-1 flex items-center justify-center shadow-lg group pointer-events-none select-none">
                        <img src="/TuzlaTourLogo.png" alt="Tour Logo" className="w-10 h-10 object-contain rounded-full" />
                      </div>
                      
                      <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                        <p className="text-[10px] font-mono text-[#14F195] uppercase font-bold">{t.mapGuideTitle}</p>
                        <p className="text-xs text-slate-350 mt-1">
                          {t.mapGuideDesc}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Visualizer 2: Schema / Google Search Grounding UI */}
                  {currentSlide.visualId === "aiso" && (
                    <div className="space-y-4">
                      <div className="relative border border-slate-800 rounded-xl overflow-hidden group bg-slate-950 shadow-md">
                        <img 
                          src={aisoRebuildImg} 
                          referrerPolicy="no-referrer"
                          alt="AISO Rebuild" 
                          className="w-full h-24 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-2 md:p-3">
                          <span className="text-[9px] bg-indigo-600 text-white font-mono px-2 py-0.5 rounded-md w-max border border-indigo-500/30 uppercase font-bold tracking-wider">
                            {language === "bs" ? "AISO OPTIMIZACIJA ZA AGENTE" : "AISO AGENT SEARCH OPTIMIZATION"}
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <div className="flex items-center justify-between border-b border-slate-850 pb-2 mb-2">
                          <span className="text-[10px] font-mono font-medium text-indigo-400">XML / JSON-LD LLM-READABLE METADATA</span>
                          <button
                            onClick={handleCopySchema}
                            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded transition"
                          >
                            <Copy className="w-3 h-3" />
                            <span>{aisoCopied ? (language === "bs" ? "Kopirano!" : "Copied!") : (language === "bs" ? "Kopiraj" : "Copy")}</span>
                          </button>
                        </div>
                        <pre className="text-[10px] font-mono text-slate-300 overflow-x-auto h-[120px] p-2 bg-slate-950 rounded border border-slate-850">
                          {JSON.stringify(generateSchemaObject(), null, 2)}
                        </pre>
                      </div>
                      <button
                        onClick={() => setActiveTab("digital")}
                        className="w-full text-center text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 bg-indigo-500/10 py-2.5 rounded-lg border border-indigo-500/20"
                      >
                        <span>{language === "bs" ? "Interaktivni Sandbox Konfigurator" : "Interactive Sandbox Configurator"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Visualizer 3: Fan Card Collection */}
                  {currentSlide.visualId === "tourism" && (
                    <div className="space-y-4">
                      {/* Premium Kenan Highlight Hero Row */}
                      <div className="grid grid-cols-2 gap-3 p-3 bg-indigo-950/25 border border-indigo-500/20 rounded-xl relative overflow-hidden">
                        <div className="absolute top-1 left-2 text-[8px] font-mono font-bold text-indigo-400 uppercase tracking-widest animate-pulse">
                          {language === "bs" ? "PRIKAZ KOLEKCIONARSKOG STICKERA" : "FEATURED COLLECTIBLE PREVIEW"}
                        </div>
                        <div className="mt-3 flex flex-col items-center">
                          <div className="w-full max-h-24 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-1 relative flex items-center justify-center">
                            <img src={kenanAlajbegovicWebp} referrerPolicy="no-referrer" alt="Kenan Digital Album Sticker" className="max-h-20 object-contain rounded" />
                          </div>
                          <p className="text-[9px] font-bold text-slate-200 mt-1 truncate max-w-full">Kenan Alajbegović (NFT)</p>
                        </div>
                        <div className="mt-3 flex flex-col items-center">
                          <div className="w-full max-h-24 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-1 relative flex items-center justify-center">
                            <img src={kenanToyImg} referrerPolicy="no-referrer" alt="Kenan Collectible Toy Souvenir" className="max-h-20 object-contain rounded" />
                          </div>
                          <p className="text-[9px] font-bold text-slate-200 mt-1 truncate max-w-full">KenanToy (Gift)</p>
                        </div>
                        <div className="mt-3 flex flex-col items-center">
                          <div className="w-full max-h-24 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-1 relative flex items-center justify-center">
                            <img src={piDemirovicImg} referrerPolicy="no-referrer" alt="Ermedin Demirović" className="max-h-20 object-contain rounded" />
                          </div>
                          <p className="text-[9px] font-bold text-slate-200 mt-1 truncate max-w-full">E. Demirović (NFT)</p>
                        </div>
                        <div className="mt-3 flex flex-col items-center">
                          <div className="w-full max-h-24 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-1 relative flex items-center justify-center">
                            <img src={piDzekoImg} referrerPolicy="no-referrer" alt="Edin Džeko" className="max-h-20 object-contain rounded" />
                          </div>
                          <p className="text-[9px] font-bold text-slate-200 mt-1 truncate max-w-full">Edin Džeko (NFT)</p>
                        </div>
                      </div>



                      <div className="border border-slate-800 p-3 rounded-lg bg-slate-900/50 flex justify-center">
                        <a 
                          href="https://bosnia-collection.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] sm:text-xs font-mono font-bold text-[#14F195] hover:text-white transition-colors flex items-center gap-2"
                        >
                          https://bosnia-collection.vercel.app/
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <button
                        onClick={() => setActiveTab("digital")}
                        className="w-full text-center text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 bg-indigo-500/10 py-2.5 rounded-lg border border-indigo-500/20"
                      >
                        <span>Launch Tourist GPS Simulator</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Visualizer 4: Box of Salt / Phygital Luxury */}
                  {currentSlide.visualId === "houseOfSalt" && (
                    <div className="space-y-4">
                      {/* Interactive physical-digital salt product grid */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl flex flex-col items-center">
                          <div className="w-full h-20 overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center p-1 border border-slate-800">
                            <img src={saltAndPaprikaImg} referrerPolicy="no-referrer" alt="Salt & Paprika" className="h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-bold text-slate-200 mt-1 truncate max-w-full">{language === "bs" ? "So i Crvena Paprika" : "Salt and Paprika"}</p>
                          <p className="text-[9px] font-mono text-[#14F195]">12 TUZ</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl flex flex-col items-center flex-1">
                          <div className="w-full h-20 overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center p-1 border border-slate-800">
                            <img src={bathSaltSolImg} referrerPolicy="no-referrer" alt="Bath Salt SOL" className="h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-bold text-slate-200 mt-1 truncate max-w-full">{language === "bs" ? "Sol za kupanje SOL" : "Bath Salt SOL"}</p>
                          <p className="text-[9px] font-mono text-[#14F195]">15 TUZ</p>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl flex flex-col items-center flex-1">
                          <div className="w-full h-20 overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center p-1 border border-slate-800">
                            <img src={saltForSolImg} referrerPolicy="no-referrer" alt="Salt for SOL" className="h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-bold text-slate-200 mt-1 truncate max-w-full">{language === "bs" ? "Kuhinjska So za SOL" : "Salt for SOL"}</p>
                          <p className="text-[9px] font-mono text-[#14F195]">8 TUZ</p>
                        </div>
                        <div className="bg-slate-900 border border-[#14F195]/30 p-2 rounded-xl flex flex-col items-center bg-indigo-950/20 relative">
                          <span className="absolute top-1 right-1 bg-yellow-500 text-slate-950 text-[7px] px-1 font-mono rounded font-bold uppercase tracking-wider scale-90">LTD</span>
                          <div className="w-full h-20 overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center p-1 border border-indigo-900/60">
                            <img src={solNft33Img} referrerPolicy="no-referrer" alt="Solana Special Limited Edition Pack" className="h-full object-contain" />
                          </div>
                          <p className="text-[10px] font-bold text-slate-200 mt-1 truncate max-w-full">{language === "bs" ? "So u Posebnom Solana Pakovanju" : "SOL NFT Limited Edition"}</p>
                          <p className="text-[9px] font-mono text-yellow-400">0.05 SOL</p>
                        </div>
                      </div>

                      {/* Solana Box Render Overlay */}
                      <div className="border border-slate-800 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#14F195]/5 p-4 relative overflow-hidden flex flex-col md:flex-row items-center gap-3">
                        {/* 3D Box Representation */}
                        <div className="w-16 h-16 bg-gradient-to-tr from-[#9945FF] to-[#14F195] rounded-xl flex items-center justify-center shadow-2xl relative shrink-0 select-none border border-slate-100/20">
                          <div className="text-center text-slate-950 font-bold leading-tight scale-75">
                            <p className="text-[8px] font-mono tracking-widest text-[#030712] opacity-80">PRODUCE OF TUZLA</p>
                            <p className="text-sm font-display uppercase tracking-tighter">TUZ</p>
                            <p className="text-[8px] font-mono font-medium text-slate-900">$SOL CODE</p>
                          </div>
                          <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded bg-white animate-pulse"></div>
                        </div>

                        <div className="max-w-sm">
                          <h4 className="text-xs font-mono font-bold text-slate-200">{language === "bs" ? "Fizički Solana \"Sol\" Suvenir" : "The Solana \"Sol\" / \"Solana\" Souvenir"}</h4>
                          <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">
                            {language === "bs" 
                              ? "Fizički suvenir poslan investitorima sa kristalima slane rude iz Tuzle, sa scan-to-claim QR kodom za preuzimanje pratećih digitalnih tokena i NFT-ova na Solani."
                              : "Mailed physically to VCs containing premium vacuum crystal salt of Tuzla. Backed by a scan-to-claim NFT holding 100 TUZ tokens."}
                          </p>
                          <div className="mt-3 w-full h-24 overflow-hidden rounded-lg bg-slate-950 flex items-center justify-center p-1 border border-slate-800">
                            <img src={solanaTuzlaImg} referrerPolicy="no-referrer" alt="Solana Tuzla Souvenir" className="h-full object-contain" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visualizer 5: TUZ Protocol Certification */}
                  {currentSlide.visualId === "blockchain" && (
                    <div className="space-y-4">
                      {/* Inline Premium Trust Badges */}
                      <div className="grid grid-cols-2 gap-3 p-3 bg-slate-900 border border-slate-800 rounded-xl">
                        <div className="flex flex-col items-center">
                          <div className="w-full h-24 overflow-hidden rounded-lg bg-teal-900/10 flex items-center justify-center p-1 border border-teal-500/20">
                            <img src={logoAsQualityAssuranceTuzImg} referrerPolicy="no-referrer" alt="TUZ Quality Assurance Logo" className="h-full object-contain" />
                          </div>
                          <p className="text-[9px] font-bold text-teal-400 mt-1 uppercase font-mono">{language === "bs" ? "TUZ Pečat Kvaliteta" : "TUZ QA Stamp"}</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-full h-24 overflow-hidden rounded-lg bg-indigo-900/10 flex items-center justify-center p-1.5 border border-indigo-500/20">
                            <img src={tuzProtocolQrImg} referrerPolicy="no-referrer" alt="TUZ Protocol Investor Reach QR" className="h-full object-contain" />
                          </div>
                          <p className="text-[9px] font-bold text-indigo-400 mt-1 uppercase font-mono">{language === "bs" ? "Skeniraj za Investiranje" : "Scan to Invest"}</p>
                        </div>
                      </div>

                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col gap-3">
                        <div className="flex justify-between items-center divide-x divide-slate-800">
                          <div className="pr-3">
                            <p className="text-[10px] text-slate-500 font-mono">ON-CHAIN COMMODITY</p>
                            <p className="text-[#14F195] font-mono text-sm font-semibold">TUZ-SPL NFT</p>
                          </div>
                          <div className="pl-3">
                            <p className="text-[10px] text-slate-500 font-mono">EU PASSPORT CODE</p>
                            <p className="text-slate-200 font-mono text-sm">REG-2023-1542</p>
                          </div>
                        </div>
                        
                        <div className="border border-slate-800 rounded p-2.5 bg-slate-950 text-xs text-slate-300 font-mono leading-relaxed">
                          <span className="text-indigo-400">"attributes"</span>: [
                            <br />&nbsp;&nbsp;{"{"}<span className="text-[#14F195]">"origin"</span>: "Tetima Deep Well"{"}"},
                            <br />&nbsp;&nbsp;{"{"}<span className="text-[#14F195]">"purity_level"</span>: "99.95% NaCl"{"}"},
                            <br />&nbsp;&nbsp;{"{"}<span className="text-[#14F195]">"carbon_kg"</span>: "0.08 kgCO2"{"}"}
                            <br />]
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setActiveTab("physical")}
                        className="w-full text-center text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 bg-indigo-500/10 py-2.5 rounded-lg border border-indigo-500/20"
                      >
                        <span>{language === "bs" ? "Pokreni Simulator Minta" : "Deploy Simulated Solana Mint"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Visualizer 6: Green Gigafactory Pipelines */}
                  {currentSlide.visualId === "industrialFlow" && (
                    <div className="space-y-4">
                      {/* Flow Grid */}
                      <div className="border border-slate-850 p-4 rounded-xl bg-slate-950 space-y-3.5">
                        <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                          <span className="text-slate-400">Carbon Footprint Attestation:</span>
                          <span className={`font-mono font-bold ${enableHydroFlow && enableRecycledHeat ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {enableHydroFlow && enableRecycledHeat ? "0.04 kg CO2/kg" : "0.45 kg CO2/kg"}
                          </span>
                        </div>

                        {/* Control toggles to see impact */}
                        <div className="space-y-2">
                          <label className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:bg-slate-850">
                            <span className="flex items-center gap-2">
                              <Waves className="w-3.5 h-3.5 text-blue-400" />
                              <span>Lake Modrac Hydroflow</span>
                            </span>
                            <input
                              type="checkbox"
                              checked={enableHydroFlow}
                              onChange={(e) => setEnableHydroFlow(e.target.checked)}
                              className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-600 bg-slate-800"
                            />
                          </label>

                          <label className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:bg-slate-850">
                            <span className="flex items-center gap-2">
                              <Zap className="w-3.5 h-3.5 text-orange-400" />
                              <span>Thermal Recycled Heat Loop</span>
                            </span>
                            <input
                              type="checkbox"
                              checked={enableRecycledHeat}
                              onChange={(e) => setEnableRecycledHeat(e.target.checked)}
                              className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-600 bg-slate-800"
                            />
                          </label>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab("industrial")}
                        className="w-full text-center text-xs text-[#14F195] hover:text-[#14F195]/80 flex items-center justify-center gap-1 bg-[#14F195]/10 py-2.5 rounded-lg border border-[#14F195]/20"
                      >
                        <span>Explore Industrial Flowchart</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Visualizer 7: Sonar Cavern Twins */}
                  {currentSlide.visualId === "cavernSonar" && (
                    <div className="space-y-4">
                      {/* Subsurface radar overlay */}
                      <div className="border border-slate-850 p-4 rounded-xl bg-slate-950 flex flex-col gap-3">
                        <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                          <span className="text-slate-400 font-mono">DOME SUB-RADAR SAT:</span>
                          <span className="text-[#14F195] animate-pulse">Telemetry Live</span>
                        </div>
                        
                        {/* Interactive sonar waves */}
                        <div className="h-28 bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden border border-slate-800">
                          {/* Circle radar rings */}
                          <div className="absolute w-24 h-24 rounded-full border border-indigo-500/20 animate-ping"></div>
                          <div className="absolute w-12 h-12 rounded-full border border-teal-500/40 animate-pulse"></div>
                          <div className="absolute w-2 h-2 rounded-full bg-red-500 z-10"></div>
                          {/* Crosshair grids */}
                          <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800"></div>
                          <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800"></div>
                          
                          <span className="absolute bottom-2 left-2 text-[8px] font-mono text-slate-500">InSAR FEED // REF: TETIMA-V1</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab("industrial")}
                        className="w-full text-center text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 bg-indigo-500/10 py-2.5 rounded-lg border border-indigo-500/20"
                      >
                        <span>Sonar Cavern stabilizers</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Visualizer 8: Economics Mini Output */}
                  {currentSlide.visualId === "financials" && (
                    <div className="space-y-4">
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
                        <div>
                          <p className="text-[10px] font-mono text-slate-500">PROJECTED NPV / VALUATION</p>
                          <p className="text-xl font-bold font-display text-white">EUR {financialResults.totalCapexMillion * 2.5} Million</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-850">
                          <div>
                            <p className="text-[9px] text-slate-500 font-mono">CAPEX INITIATIVE</p>
                            <p className="text-xs font-mono font-bold">EUR {financialResults.totalCapexMillion}M</p>
                          </div>
                          <div>
                            <p className="text-[9px] text-slate-500 font-mono">ANNUAL REVENUE</p>
                            <p className="text-xs font-mono font-bold text-emerald-400">EUR {financialResults.annualRevenueMillion}M</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab("financial")}
                        className="w-full text-center text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 bg-indigo-500/10 py-2.5 rounded-lg border border-indigo-500/20"
                      >
                        <span>Open Multi-Phase Calculator</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Visualizer 9: Horizontal Gantt Roadmap */}
                  {currentSlide.visualId === "roadmap" && (
                    <div className="space-y-4">
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                        <p className="text-[10px] font-mono text-slate-500 uppercase">Interactive Timeline Status</p>
                        <div className="space-y-1.5 text-xs">
                          <p className="text-[#14F195]">● Phase I (2027): Vacuum platform</p>
                          <p className="text-indigo-400">● Phase II (2029): Chemicals processing</p>
                          <p className="text-amber-400">● Phase III (2031): Battery precursor export</p>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab("financial")}
                        className="w-full text-center text-xs text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1 bg-indigo-500/10 py-2.5 rounded-lg border border-indigo-500/20"
                      >
                        <span>Launch Project Gantt Board</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                </div>

                {/* Footer Coordinates Indicator */}
                <div className="p-3 bg-slate-900/60 border-t border-slate-800/60 text-center text-[10px] font-mono text-slate-500">
                  SECURE BLOCKCHAIN AUDIT // METADATA ID: TUZ-3.5-FLASH
                </div>
              </div>

            </div>
          )}

          {/* B. If showing Digital AISO & Tour App Tab */}
          {activeTab === "digital" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: AISO Structured Schema Sandbox */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-indigo-400" />
                    <span>AISO Structured Markup Generator</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    By providing structured schema.org blocks (JSON-LD), we make local Tuzla attractions discoverable by AI search agents. Standard SEO targets keywords; AI optimization targets semantically structured truth.
                  </p>
                  
                  <div className="space-y-3.5 mt-5">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Landmark/Business Name</label>
                      <input
                        type="text"
                        value={landmarkName}
                        onChange={(e) => setLandmarkName(e.target.value)}
                        className="w-full text-xs font-mono p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-250 focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Knowledge description</label>
                      <textarea
                        value={landmarkDesc}
                        onChange={(e) => setLandmarkDesc(e.target.value)}
                        className="w-full text-xs font-mono p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-250 focus:border-indigo-500 outline-none h-16 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">Location coordinates / area</label>
                      <input
                        type="text"
                        value={landmarkLocality}
                        onChange={(e) => setLandmarkLocality(e.target.value)}
                        className="w-full text-xs font-mono p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-250 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-850 flex items-center justify-between gap-3 text-xs">
                  <span className="text-[10px] text-slate-500 font-mono">SCHEMA.ORG / LOCALBUSINESS</span>
                  <button
                    onClick={handleCopySchema}
                    className="p-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-2 transition"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{aisoCopied ? "Copied!" : "Copy Tag"}</span>
                  </button>
                </div>
              </div>

              {/* Box 2: Tour App and Collectibles Wallet */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-[#14F195]" />
                    <span>Tuzla Tour AR Check-in Simulator</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Virtual tourist app with real GPS coordination checking. Visit real landmarks to scan AR guides and unlock collectible sports NFTs for the Bosnia National Team on World Cup 2026.
                  </p>

                  <div className="space-y-2 mt-5 max-h-[170px] overflow-y-auto pr-1">
                    {TOUR_CHECKPOINTS.map((cp) => (
                      <div key={cp.id} className="p-2.5 rounded bg-slate-950 border border-slate-850 flex items-center justify-between gap-2 text-xs">
                        <div>
                          <p className="font-bold text-slate-200">{cp.name}</p>
                          <p className="text-[10px] font-mono text-slate-500">{cp.coordinates}</p>
                        </div>
                        <button
                          onClick={() => scanCheckpoint(cp.id, cp.xpAwarded, cp.nftTokenName)}
                          className="p-1 px-3 rounded hover:bg-[#14F195] hover:text-slate-950 text-slate-300 font-mono font-bold bg-slate-850 transition"
                        >
                          SCAN NODE
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-850">
                  {scanMessage ? (
                    <div className="p-2 text-xs bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 font-mono">
                      {scanMessage}
                    </div>
                  ) : (
                    <div className="text-center text-[10px] font-mono text-indigo-400">
                      Click "SCAN NODE" to discover and mint Solana players.
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* C. If showing Physical Souvenirs & TUZ Tab */}
          {activeTab === "physical" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: House of Salt Catalogue */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                      <Box className="w-5 h-5 text-amber-400" />
                      <span>House of Salt Handicraft Store</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Tuzla derives from Turkish "tuz", translating literally to Salt. In Bosnian/Slavic, sol signifies salt, creating an organic symbiose with Solana L1 ($SOL token). We formulate products bridging both realms.
                    </p>
                  </div>
                  <div className="w-16 h-16 shrink-0 ml-4 bg-slate-950 border border-slate-800 rounded-lg p-1">
                    <img src={saltAndPaprikaImg} alt="Salt and Paprika" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="p-3 border border-slate-800 rounded bg-slate-950 flex flex-col justify-center">
                    <p className="text-xs font-bold text-slate-200">Luxury Solana Salt Box</p>
                    <p className="text-[10px] font-mono text-[#14F195] mt-0.5">Mailed to Investors</p>
                    <p className="text-[11px] text-slate-400 mt-1">Solana themed packaging holding 1 kg raw vacuum crystal salts.</p>
                  </div>
                  <div className="p-3 border border-slate-800 rounded bg-slate-950 flex flex-col justify-center">
                    <p className="text-xs font-bold text-slate-200">Handmade Brine Jewelry</p>
                    <p className="text-[10px] font-mono text-purple-400 mt-0.5">TUZ SPL Wrapped</p>
                    <p className="text-[11px] text-slate-400 mt-1">Physical crystals etched under continuous pressure. Tied with NFC tags.</p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 text-xs border border-slate-800 rounded-lg flex items-center gap-3">
                  <div className="flex-1">
                    <p className="font-bold text-amber-400">Physical-to-Digital Bridge:</p>
                    <p className="text-slate-350 mt-1 font-mono text-[11px]">
                      Every souvenir carries an on-chain verification tag. Scanning confirms the physical geological origin at **Tetima** and authenticity.
                    </p>
                  </div>
                  <div className="w-16 h-16 shrink-0 rounded p-1 border border-indigo-500/30 bg-slate-900/50">
                    <img src={tuzProtocolQrImg} alt="TUZ Protocol QR" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Box 2: TUZ Protocol Certification Mint Sandbox */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Coins className="w-5 h-5 text-[#14F195]" />
                    <span>TUZ Protocol On-Chain Assayer</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Configure raw mining outputs, assay chemical purities, and deploy custom SPL tokens to satisfy European Battery Passport standards.
                  </p>

                  <div className="space-y-4 mt-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-mono text-slate-400 block mb-1">SELECT DEPOSIT WELL</label>
                        <select
                          value={selectedSource}
                          onChange={(e) => setSelectedSource(e.target.value as any)}
                          className="w-full text-xs font-mono p-2 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          <option value="Tetima Deep Well T-1">Tetima Well T-1</option>
                          <option value="Tetima Deep Well T-2">Tetima Well T-2</option>
                          <option value="Hukalo Well-V">Hukalo Well-V</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-slate-400 block mb-1">NaCl PURITY (%)</label>
                        <input
                          type="number"
                          step="0.01"
                          value={customPurity}
                          onChange={(e) => setCustomPurity(parseFloat(e.target.value))}
                          className="w-full text-xs font-mono p-2 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-mono text-slate-400 block mb-1">BATCH TONNAGE (t)</label>
                        <input
                          type="number"
                          value={customTonnage}
                          onChange={(e) => setCustomTonnage(parseInt(e.target.value))}
                          className="w-full text-xs font-mono p-2 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        />
                      </div>
                      <div className="flex flex-col justify-end">
                        <button
                          onClick={mintOnSolana}
                          disabled={isMinting}
                          className="p-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-bold text-xs disabled:opacity-50 transition"
                        >
                          {isMinting ? "MINTING CERT..." : "TOKENIZE CARGO"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-850">
                  {mintReport ? (
                    <div className="p-2.5 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-mono">
                      {mintReport}
                    </div>
                  ) : (
                    <div className="max-h-[105px] overflow-y-auto space-y-1 text-[11px] font-mono text-slate-450 pr-1 select-none">
                      <p className="text-[10px] text-slate-500">MINTED COMMODITIES LEDGER</p>
                      {certifiedBatches.slice(0, 3).map((b, idx) => (
                        <p key={idx} className="truncate">
                          √ {b.batchId} | {b.purity}%NaCl | CF:{b.carbonFootprint} | Tx:{b.onChainTx?.substring(0, 8)}...
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* D. If showing Industrial Precursors Tab */}
          {activeTab === "industrial" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: Industrial Pipeline Flow */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <Factory className="w-5 h-5 text-[#14F195]" />
                    <span>Circular Resource Pipeline</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Unifying resources across the region: Raw high-grade brine from **Tetima** is processed into pure soda ash (Na2CO3) and NaOH at the **Lukavac** / **Solana Tuzla** plants, formulating the fundamental precursors for Sodium-Ion battery cell manufacturing.
                  </p>

                  {/* Flow Steps Graphic */}
                  <div className="flex flex-col gap-2 mt-5">
                    <div className="p-2.5 bg-slate-950 rounded border border-slate-850 flex justify-between text-xs font-mono">
                      <span className="text-amber-500">1. Sub-surface Mining:</span>
                      <span>Tetima Salt Dome (Feedstock)</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded border border-slate-850 flex justify-between text-xs font-mono">
                      <span className="text-indigo-500">2. Refining Evaporators:</span>
                      <span>Solana d.d. vacuum facility</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded border border-slate-850 flex justify-between text-xs font-mono">
                      <span className="text-pink-500">3. Precursor compound:</span>
                      <span>Lukavac Soda soda ash loop</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded border border-slate-850 flex justify-between text-xs font-mono">
                      <span className="text-emerald-500">4. Battery Passport export:</span>
                      <span>EU Green Manufacturer</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-850 flex justify-between items-center text-xs text-slate-400">
                  <span>Powering source:</span>
                  <span className="text-indigo-400 font-mono font-bold">Lake Modrac Gravitational Flow</span>
                </div>
              </div>

              {/* Box 2: Geomechanical Cavern Subsidence Monitor */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-[#14F195]" />
                    <span>Geomechanical Cavern HUD Monitor</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Subsidence elimination: Mining over-extraction in downtown Tuzla in the 1980s caused land subsidence. At Tetima, continuous geomechanical sonar, pressure, and InSAR satellite tracking keeps subsidence permanently below 5mm thresholds.
                  </p>

                  <div className="space-y-2 mt-5">
                    {cavernList.map((c) => (
                      <div key={c.id} className="p-2.5 rounded bg-slate-950 border border-slate-850 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <p className="font-bold text-slate-350">{c.name}</p>
                          <p className="text-[10px] font-mono text-slate-500">
                            Depth: {c.depthRange} | Pres: {c.pressureBar} bar
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`p-1 px-1.5 rounded text-[10px] font-mono font-medium ${
                            c.status === "Optimal" ? "text-emerald-400 bg-emerald-500/10" : "text-amber-400 bg-amber-500/10"
                          }`}>
                            {c.subsidenceRateMm.toFixed(1)} mm/yr
                          </span>
                          {!c.pressureBalanced && (
                            <button
                              onClick={() => balanceCavern(c.id)}
                              disabled={stablizingId === c.id}
                              className="block mt-1 font-mono text-[9px] text-[#14F195] underline hover:text-white"
                            >
                              {stablizingId === c.id ? "STABILIZING..." : "BALANCE WELL"}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-850 text-center text-[10px] font-mono text-slate-500 font-medium">
                  InSAR TRACKING SYSTEM // MAXIMUM Displacement: &lt; 5.0mm
                </div>
              </div>

            </div>

            {/* F. SIB vs Li-ion Comparative Research Hub (Full Width) */}
            <div className="mt-8 space-y-8">
              <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-5 gap-4">
                  <div>
                    <span className="p-1 px-2 rounded bg-[#14F195]/15 text-[#14F195] text-[10px] font-mono tracking-wider font-bold uppercase">
                      {language === "bs" ? "NAUČNO PREISPITIVANJE" : "SCIENTIFIC PEER COGNITION"}
                    </span>
                    <h2 className="text-xl md:text-2xl font-display font-medium text-white flex items-center gap-2 mt-2">
                      <Zap className="w-6 h-6 text-[#14F195] animate-pulse" />
                      <span>
                        {language === "bs" 
                          ? "SIB vs Litijum: Interaktivno Uporedno Istraživanje" 
                          : "Sodium-Ion vs Lithium-Ion: Multi-Dimensional Research Hub"}
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                      {language === "bs"
                        ? "Tehničke, ekonomske i geopolitičke komparativne analize. Istražite zašto Tuzla i Solana blockchain grade bankabilni preduslovni lanac za novu eru natrijum-jonskih baterija."
                        : "State-of-the-art comparative physics and mineral cost-structures. Explore how Tuzla's Tetima reserves position the TUZ Protocol as a global pillar for upcoming sodium-ion commercial deployments."}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedBatteryType("sodium")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                        selectedBatteryType === "sodium"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-slate-905 text-slate-400 border border-slate-800 hover:text-white"
                      }`}
                    >
                      {language === "bs" ? "Natrijum-jonske (SIB)" : "Sodium-Ion (SIB)"}
                    </button>
                    <button
                      onClick={() => setSelectedBatteryType("lfp")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                        selectedBatteryType === "lfp"
                          ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                          : "bg-slate-905 text-slate-400 border border-slate-800 hover:text-white"
                      }`}
                    >
                      Lithium LFP
                    </button>
                    <button
                      onClick={() => setSelectedBatteryType("nmc")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                        selectedBatteryType === "nmc"
                          ? "bg-pink-500/20 text-pink-400 border border-pink-500/40"
                          : "bg-slate-905 text-slate-400 border border-slate-800 hover:text-white"
                      }`}
                    >
                      Lithium NMC
                    </button>
                  </div>
                </div>

                {/* Grid layout for comparison and details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                  
                  {/* Table Column (Takes 2 grid spaces on desktop) */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-display font-medium text-slate-200 uppercase tracking-wider font-mono">
                        {language === "bs" ? "📑 Tehnološko-Ekonomska Matrica poređenja" : "📑 Technological & Cost Structure Matrix"}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {language === "bs" ? "Ažurirano 2026 // Bonnen Battery" : "2026 Scientific Data // Bonnen Battery Source"}
                      </span>
                    </div>

                    <div className="border border-slate-850 rounded-xl overflow-hidden bg-slate-1000">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="bg-slate-900/80 border-b border-slate-850 text-[10px] text-slate-400 font-mono uppercase font-semibold">
                              <th className="p-3">{language === "bs" ? "Parametar" : "Metric Factor"}</th>
                              <th className="p-3">Lithium LFP</th>
                              <th className="p-3">Lithium NMC</th>
                              <th className="p-3 text-emerald-400">{language === "bs" ? "Natrijum-jonska (TUZ)" : "Sodium-ion (TUZ)"}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-900 font-mono">
                            {BATTERY_METRICS.map((metricRow, idx) => (
                              <tr 
                                key={idx} 
                                className={`hover:bg-slate-900/40 transition-colors ${
                                  metricRow.highlight ? "bg-indigo-950/10 text-slate-100" : "text-slate-350"
                                }`}
                              >
                                <td className="p-3 font-medium text-slate-200">
                                  {language === "bs" ? metricRow.metric.bs : metricRow.metric.en}
                                </td>
                                <td className="p-3">{language === "bs" ? metricRow.lfp.bs : metricRow.lfp.en}</td>
                                <td className="p-3">{language === "bs" ? metricRow.nmc.bs : metricRow.nmc.en}</td>
                                <td className="p-3 text-emerald-400 font-semibold bg-emerald-950/5">
                                  {language === "bs" ? metricRow.sodium.bs : metricRow.sodium.en}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Proactive shipping note */}
                    <p className="text-[10px] font-mono text-slate-500 leading-normal bg-slate-950 p-2.5 rounded border border-slate-900">
                      ⚠️ <strong>{language === "bs" ? "Logistička napomena:" : "Logistics Insight:"}</strong>{" "}
                      {language === "bs"
                        ? "Litijumske baterije spadaju u opasnu klasu zrakoplovnog transporta (Hazmat Class 9). Natrijum-jonske ćelije se mogu potpuno isprazniti na 0 volti bez oštećenja, što uklanja rizik od termalnog proboja, dramatično pojeftinjujući globalni kargo transport."
                        : "Lithium cells are classified as hazardous freight requiring special packaging and increased shipping rates. In contrast, SIBs can be completely discharged to 0V for secure transport, entirely neutralizing air freights thermal runaway hazards."}
                    </p>
                  </div>

                  {/* Active detailed card column side-by-side */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-display font-medium text-slate-200 uppercase tracking-wider font-mono">
                      {language === "bs" ? "🔎 Detaljni Fokus Ćelije" : "🔎 Focus Chemistry Insight"}
                    </h3>

                    <div className="bg-slate-950 rounded-xl border border-slate-850 p-4 space-y-4">
                      {selectedBatteryType === "sodium" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                            <span className="text-emerald-400 font-semibold text-sm">Sodium-Ion (TUZ / Salt)</span>
                            <span className="p-1 px-1.5 bg-emerald-500/10 text-emerald-400 rounded text-[9px] font-bold">ABUNDANT & CHEAP</span>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="text-xs text-slate-400">
                              {language === "bs"
                                ? "Kombinuje sirovi natrijum i ekološke spojeve prusko bijelog ili slojevitih oksida. Zamjenjuje skupi litijum i u potpunosti eliminiše kobalt i nikl."
                                : "Employs simple sodium carbonate and safe Prussian white/iron precursors. Eliminates expensive lithium, cobalt, and nickel dependence entirely."}
                            </p>
                            <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono">
                              <div className="bg-slate-900 p-2 rounded">
                                <span className="block text-slate-500">PROS:</span>
                                <span className="text-emerald-400 font-semibold">
                                  {language === "bs" ? "Jeftino, Hladno, Brz upad" : "Ultra cheap, -40°C performance, 15m Fast Charge"}
                                </span>
                              </div>
                              <div className="bg-slate-900 p-2 rounded">
                                <span className="block text-slate-500">CONS:</span>
                                <span className="text-amber-400 font-semibold">
                                  {language === "bs" ? "Niža gustoća, težina" : "Lower energy density, heavier packs"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-905">
                            <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                              {language === "bs" ? "Geopolitički Položaj:" : "Geopolitical Leverage:"}
                            </span>
                            <p className="text-[11px] text-slate-300 leading-normal">
                              {language === "bs"
                                ? "Natrijum pokriva 2,6% Zemljine kore (soli ima svuda). Za razliku od litijuma čiji je geopolitički lanac monopolizovan, natrijum omogućava Evropi i regiji Tuzle potpunu energetsku autonomiju."
                                : "Sodium resides across 2.6% of Earth's crust (omnipresent in salt reserves). Provides democratic sovereign supply lines, shielding European energy grids from highly protective Lithium export cartels."}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedBatteryType === "lfp" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                            <span className="text-indigo-400 font-semibold text-sm">Lithium LFP (LiFePO₄)</span>
                            <span className="p-1 px-1.5 bg-indigo-500/10 text-indigo-400 rounded text-[9px] font-bold">STABLE WORKHORSE</span>
                          </div>

                          <div className="space-y-2">
                            <p className="text-xs text-slate-400">
                              {language === "bs"
                                ? "Najstabilnija komercijalna litijumska hemija. Koristi gvožđe-fosfat, što smanjuje rizik od zapaljenja ali ima ograničenu energetsku gustinu."
                                : "The standard stable commercial lithium chemistry. Utilizes iron-phosphate, eliminating high-hazard cobalt, though showing limited energy density growth."}
                            </p>
                            <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono">
                              <div className="bg-slate-900 p-2 rounded">
                                <span className="block text-slate-500">PROS:</span>
                                <span className="text-emerald-400 font-semibold">
                                  {language === "bs" ? "Dug vijek, siguran" : "3000+ cycles, proven production"}
                                </span>
                              </div>
                              <div className="bg-slate-900 p-2 rounded">
                                <span className="block text-slate-500">CONS:</span>
                                <span className="text-amber-400 font-semibold">
                                  {language === "bs" ? "Slabo na hladnoći" : "Severe performance drop in sub-zero temp"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-905">
                            <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                              {language === "bs" ? "Tržišna uloga:" : "Market Share Profile:"}
                            </span>
                            <p className="text-[11px] text-slate-300 leading-normal">
                              {language === "bs"
                                ? "Široko rasprostranjena u Tesla, BYD i stacionarnim energetskim kontejnerima. Međutim, potražnja za LFP litijumom i dalje drži cijenu ćelije osjetljivom na fluktuaciju tržišta."
                                : "Dominates stationary battery setups and entry-level EVs (such as Tesla Model Y Standard). While robust, high mineral pressure ensures cell cost remains highly vulnerable to raw lithium price surges."}
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedBatteryType === "nmc" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                            <span className="text-pink-400 font-semibold text-sm">Lithium NMC</span>
                            <span className="p-1 px-1.5 bg-pink-500/10 text-pink-400 rounded text-[9px] font-bold">ULTRA-HIGH ENERGY</span>
                          </div>

                          <div className="space-y-2">
                            <p className="text-xs text-slate-400">
                              {language === "bs"
                                ? "Premium industrijski standard za performanse. Sadrži kobalt, nikl i mangan za postizanje ekstremno visoke energetske gustine."
                                : "Premium industry-standard chemistry for ultra-long range. Infuses cobalt, nickel, and manganese layout to drive spectacular density thresholds."}
                            </p>
                            <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono">
                              <div className="bg-slate-900 p-2 rounded">
                                <span className="block text-slate-500">PROS:</span>
                                <span className="text-emerald-400 font-semibold">
                                  {language === "bs" ? "Ogroman domet, lako" : "Highest energy, lightweight packs"}
                                </span>
                              </div>
                              <div className="bg-slate-900 p-2 rounded">
                                <span className="block text-slate-500">CONS:</span>
                                <span className="text-amber-400 font-semibold">
                                  {language === "bs" ? "Vatra, skup kobalt" : "Extreme thermal runaway risk, ethical cobalt"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-905">
                            <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-1.5">
                              {language === "bs" ? "Zabrinutost o održivosti:" : "Sustainability Concerns:"}
                            </span>
                            <p className="text-[11px] text-slate-300 leading-normal">
                              {language === "bs"
                                ? "Eksploatacija kobalta (naročito u DRC) često nosi teške optužbe o dječijem radu i devastaciji okoline. Reciklaža je složena."
                                : "Cobalt and Nickel extraction are heavily linked with toxic heavy-metal processing. Causes severe localized soil contamination and raises substantial supply audit hazards."}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick navigation link back to financial simulation */}
                    <div className="p-3 bg-indigo-500/5 rounded-lg border border-indigo-500/10 flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 leading-tight">
                        {language === "bs" ? "Provjerite profitabilnost u modelaru:" : "Simulate SIB factory outputs:"}
                      </span>
                      <button 
                        onClick={() => setActiveTab("financial")}
                        className="text-[#14F195] font-mono hover:underline font-bold"
                      >
                        {language === "bs" ? "MODELAR ➔" : "MODELER ➔"}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Sub-section: SIB Cathode structures details */}
                <div className="mt-8 pt-6 border-t border-slate-850">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-sm font-display font-medium text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        <span>{language === "bs" ? "Arhitektura Katodnih Sistema kod Natrijuma" : "Sodium-Ion Cathode System Architectures"}</span>
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {language === "bs" 
                          ? "Natrijum-jonske ćelije variraju u nominalnim naponima na osnovu različitih primijenjenih katodnih materijala (layered, polyanionic, prussian white):" 
                          : "Sodium-ion cells display slight differences in nominal voltage platforms based on the exact active cathode material used (layered, polyanionic, prussian white):"}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono p-1 px-2 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      Na<sub>x</sub>MO<sub>2</sub> vs. NaV vs. Prussian White
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {SODIUM_CATHODES.map((cathode, cidx) => (
                      <div key={cidx} className="bg-slate-950/80 border border-slate-900 rounded-lg p-3.5 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-slate-200">{language === "bs" ? cathode.type.bs : cathode.type.en}</span>
                          <span className="p-1 px-1.5 bg-indigo-500/15 text-indigo-400 rounded text-[9px] font-mono font-bold">
                            {cathode.voltage}
                          </span>
                        </div>
                        <div className="text-[11px] space-y-1">
                          <div>
                            <span className="text-slate-500 text-[10px] uppercase block font-mono">
                              {language === "bs" ? "Prednosti:" : "Advantages:"}
                            </span>
                            <p className="text-slate-300 font-sans leading-tight">
                              {language === "bs" ? cathode.features.bs : cathode.features.en}
                            </p>
                          </div>
                          <div className="pt-1.5">
                            <span className="text-slate-500 text-[10px] uppercase block font-mono">
                              {language === "bs" ? "Izazovi:" : "Limitations:"}
                            </span>
                            <p className="text-amber-500 font-sans leading-tight">
                              {language === "bs" ? cathode.limitations.bs : cathode.limitations.en}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-section: 15 Guided FAQ Deep Dive search & accordion */}
                <div className="mt-8 pt-6 border-t border-slate-850 space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-sm font-display font-medium text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span>{language === "bs" ? "Knjiga Istraživačkih FAQ Pitanja (15 Tema)" : "Frequently Asked Questions (FAQ) Reference Vault"}</span>
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {language === "bs" 
                          ? "Bonnen Battery i Jean-Marie Tarascon naučna istraživanja strukturisana u 15 jasnih tehničkih poglavlja." 
                          : "Curated comparative research encompassing 15 key technical areas compiled across international battery peer literature."}
                      </p>
                    </div>

                    {/* Category quick selectors */}
                    <div className="flex flex-wrap gap-1">
                      {["All", "Performance", "Economics", "Safety", "Future"].map((cat) => {
                        const translatedCatMap: { [key: string]: string } = {
                          All: language === "bs" ? "Sve" : "All",
                          Performance: language === "bs" ? "Performanse" : "Performance",
                          Economics: language === "bs" ? "Ekonomija" : "Economics",
                          Safety: language === "bs" ? "Sigurnost" : "Safety",
                          Future: language === "bs" ? "Budućnost" : "Future"
                        };
                        return (
                          <button
                            key={cat}
                            onClick={() => setFaqCategoryFilter(cat)}
                            className={`p-1 px-2.5 rounded text-[10px] font-mono transition-all ${
                              faqCategoryFilter === cat
                                ? "bg-slate-800 text-white font-bold border border-slate-700"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {translatedCatMap[cat]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Search filter input */}
                  <div className="relative">
                    <input
                      type="text"
                      value={faqSearch}
                      onChange={(e) => setFaqSearch(e.target.value)}
                      placeholder={
                        language === "bs"
                          ? "Pretraži 15 tehničkih istraživačkih pitanja (npr. 'hladno', 'cijena', 'cijus').-."
                          : "Search 15 technical battery research topics (e.g. 'cold', 'abundant', 'copper', '0V')..."
                      }
                      className="w-full bg-slate-950 border border-slate-850 p-2.5 px-4 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
                    />
                    {faqSearch && (
                      <button
                        onClick={() => setFaqSearch("")}
                        className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-350 text-xs font-mono"
                      >
                        [CLEAR]
                      </button>
                    )}
                  </div>

                  {/* FAQ Accordion output */}
                  <div className="space-y-2 mt-4 max-h-[480px] overflow-y-auto pr-1">
                    {(() => {
                      const filtered = FAQ_DATA.filter((faq) => {
                        const matchesCategory = faqCategoryFilter === "All" || faq.category === faqCategoryFilter;
                        const qText = (language === "bs" ? faq.q.bs : faq.q.en).toLowerCase();
                        const aText = (language === "bs" ? faq.a.bs : faq.a.en).toLowerCase();
                        const s = faqSearch.toLowerCase();
                        const matchesSearch = qText.includes(s) || aText.includes(s);
                        return matchesCategory && matchesSearch;
                      });

                      if (filtered.length === 0) {
                        return (
                          <div className="p-8 text-center border border-dashed border-slate-850 rounded-xl text-slate-500 text-xs font-mono">
                            {language === "bs" ? "Nema rezultata za pretragu. Pokušajte sa kraćom rječju." : "No matching research questions found. Try a different keyword."}
                          </div>
                        );
                      }

                      return filtered.map((faq) => {
                        const isExpanded = expandedFaqId === faq.id;
                        return (
                          <div 
                            key={faq.id} 
                            className={`border border-slate-900 rounded-xl transition-all ${
                              isExpanded ? "bg-slate-950 border-slate-800" : "bg-slate-950/40 hover:bg-slate-900/15"
                            }`}
                          >
                            <button
                              onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                              className="w-full text-left p-4 flex justify-between items-center gap-4 focus:outline-none"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase mt-0.5 font-bold ${
                                  faq.category === "Performance" ? "bg-indigo-500/10 text-indigo-400" :
                                  faq.category === "Economics" ? "bg-emerald-500/10 text-emerald-400" :
                                  faq.category === "Safety" ? "bg-amber-500/10 text-amber-400" : "bg-pink-500/10 text-pink-400"
                                }`}>
                                  {language === "bs" ? faq.categoryBs : faq.category}
                                </span>
                                <h4 className="text-xs font-semibold text-slate-200 leading-relaxed font-sans">
                                  {language === "bs" ? faq.q.bs : faq.q.en}
                                </h4>
                              </div>
                              <span className="text-slate-500 font-mono text-xs select-none">
                                {isExpanded ? "[-]" : "[+]"}
                              </span>
                            </button>

                            {isExpanded && (
                              <div className="p-4 pt-0 border-t border-slate-900/60 text-xs text-slate-400 leading-relaxed font-sans space-y-2">
                                <p>{language === "bs" ? faq.a.bs : faq.a.en}</p>
                              </div>
                            )}
                          </div>
                        );
                      });
                    })()}
                  </div>
                  
                  {/* Research Author Credit Line */}
                  <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-slate-500 border-t border-slate-900/50">
                    <span>
                      {language === "bs" ? "Uredio: Dr. Jean-Marie Tarascon, Profesor na Collège de France" : "Edited by: Prof. Jean-Marie Tarascon, Collège de France"}
                    </span>
                    <span>
                      bonnenbatteries.com
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

          {/* E. If showing Investor Economics and Financial Sliders Tab */}
          {activeTab === "financial" && (
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-indigo-400" />
                  <span>Interactive Multi-Phase Financial Modeler</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Adjust scale parameters to forecast capital requirements, jobs generated, net margin multipliers, and estimated internal rate of return (IRR) on Phase I-III.
                </p>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Sliders Group */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="font-mono uppercase font-bold">Battery Factory Scale:</span>
                      <span className="text-[#14F195] font-bold">{financialInputs.gigafactoryScaleGwh} GWh / year</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={financialInputs.gigafactoryScaleGwh}
                      onChange={(e) => setFinancialInputs({ ...financialInputs, gigafactoryScaleGwh: parseInt(e.target.value) })}
                      className="w-full bg-slate-800 accent-[#14F195] h-1.5 rounded"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="font-mono uppercase font-bold">Vacuum Salt Extraction:</span>
                      <span className="text-[#14F195] font-bold">{financialInputs.rawSaltOutputTpy.toLocaleString()} t / year</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="250000"
                      step="10000"
                      value={financialInputs.rawSaltOutputTpy}
                      onChange={(e) => setFinancialInputs({ ...financialInputs, rawSaltOutputTpy: parseInt(e.target.value) })}
                      className="w-full bg-slate-800 accent-[#14F195] h-1.5 rounded"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="font-mono uppercase font-bold">Battery Cell wholesale:</span>
                      <span className="text-[#14F195] font-bold">EUR {financialInputs.batteryCellSellingPrice} / kWh</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="150"
                      value={financialInputs.batteryCellSellingPrice}
                      onChange={(e) => setFinancialInputs({ ...financialInputs, batteryCellSellingPrice: parseInt(e.target.value) })}
                      className="w-full bg-slate-800 accent-[#14F195] h-1.5 rounded"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="font-mono uppercase font-bold">Circular Green Energy Mix:</span>
                      <span className="text-[#14F195] font-bold">{financialInputs.greenEnergyRatio}% Neutral</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="100"
                      value={financialInputs.greenEnergyRatio}
                      onChange={(e) => setFinancialInputs({ ...financialInputs, greenEnergyRatio: parseInt(e.target.value) })}
                      className="w-full bg-slate-800 accent-[#14F195] h-1.5 rounded"
                    />
                  </div>
                </div>

                {/* Outputs Panel */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[9px] font-mono text-slate-500 uppercase">Est. CAPEX Capital</p>
                      <p className="text-lg font-bold text-slate-100">EUR {financialResults.totalCapexMillion}M</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-slate-500 uppercase">Gross Revenue / year</p>
                      <p className="text-lg font-bold text-emerald-400">EUR {financialResults.annualRevenueMillion}M</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-slate-500 uppercase">Target Net Margin</p>
                      <p className="text-lg font-bold text-indigo-400">{financialResults.netMarginPercent}%</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-slate-500 uppercase">Estimated IRR</p>
                      <p className="text-lg font-bold text-purple-400">{financialResults.irrPercent}%</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 mt-4 pt-4 flex justify-between items-center bg-slate-900/40 p-2.5 rounded">
                    <div>
                      <p className="text-[9px] font-mono text-slate-500">REGIONAL JOBS FORMED</p>
                      <p className="text-base font-bold text-white tracking-tight">{financialResults.jobsCreated} FTE workers</p>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/20 uppercase font-bold">
                      70 jobs / Gwh
                    </span>
                  </div>
                </div>

              </div>

              {/* Multi-phase Timeline Overview */}
              <div className="border-t border-slate-800 pt-6">
                <p className="text-[10px] font-mono text-slate-500 block mb-3 uppercase">Master Roadmap Phase schedule</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-850">
                    <p className="text-xs font-mono font-bold text-blue-400 uppercase">Phase I (2027 - 2029)</p>
                    <p className="text-sm font-semibold text-slate-200 mt-1">Battery Salt Platform</p>
                    <p className="text-[11px] text-slate-400 mt-1">Vac salt extraction scale. Cavern digital twin install. Seed target: EUR 15 Million.</p>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-850">
                    <p className="text-xs font-mono font-bold text-[#14F195] uppercase">Phase II (2029 - 2031)</p>
                    <p className="text-sm font-semibold text-slate-200 mt-1">Chemical Soda Ash loop</p>
                    <p className="text-[11px] text-slate-400 mt-1">Pure soda ash and NaOH formulation at Lukavac process plants. CAPEX: EUR 60 Million.</p>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-850">
                    <p className="text-xs font-mono font-bold text-amber-500 uppercase">Phase III (2031 - 2035)</p>
                    <p className="text-sm font-semibold text-slate-100 mt-1">Precursor &amp; Giga Assembly</p>
                    <p className="text-[11px] text-slate-400 mt-1">Formulating Prussian White cathode CAM and exporting certified Sodium-Ion battery packs.</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* F. If showing Live Gemini AI Pitch Customizer */}
          {activeTab === "ai_tailor" && (
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
              
              <div>
                <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#14F195]" />
                  <span>Gemini AI Investor Briefing Compiling Engine</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  This system utilizes our server-side **Gemini 3.5 Flash** model to synthesize these massive multi-layered industrial databases. Choose an investor persona below to watch Gemini tailor an immediate persuasive brief.
                </p>
              </div>

              {/* Selector Panels */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                
                {/* Left Side options Selection (5/12) */}
                <div className="xl:col-span-4 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Select Investor Persona Mindset</p>
                    <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
                      {INVESTOR_PROFILES.map((profile) => (
                        <button
                          key={profile.id}
                          onClick={() => setSelectedInvestorId(profile.id)}
                          className={`w-full p-2.5 rounded-lg border text-left flex items-start justify-between gap-2 transition-all-300 ${
                            selectedInvestorId === profile.id
                              ? "bg-slate-950 border-[#14F195]/40"
                              : "bg-slate-950/30 border-slate-850 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-100">{profile.name}</p>
                            <span className="text-[9px] font-mono text-slate-500 block truncate mt-0.5 max-w-[150px]">
                              Focus: {profile.focus}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono bg-slate-800 text-slate-350 px-1.5 py-0.5 rounded shrink-0">
                            {profile.badge}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">PROSPECTUS CORE ASSUMPTION GOAL</label>
                    <input
                      type="text"
                      value={customUserGoal}
                      onChange={(e) => setCustomUserGoal(e.target.value)}
                      className="w-full text-xs font-mono p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300 outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">OPTIONAL: CUSTOM INVESTOR QUESTION</label>
                    <input
                      type="text"
                      placeholder="e.g. How does Tuzla prevent underground subsidence?"
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      className="w-full text-xs font-mono p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300 outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    onClick={generatePitchBrief}
                    disabled={isGeneratingPitch}
                    className="w-full p-3 rounded-lg bg-[#14F195] hover:bg-[#11d885] text-slate-950 font-bold font-mono text-xs shadow-lg transition-all disabled:opacity-50"
                  >
                    {isGeneratingPitch ? "COMPILING STRATEGY BRIEF..." : "COMPILE TARGETED PITCH"}
                  </button>
                </div>

                {/* Right Side Pitch Output Card (8/12) */}
                <div className="xl:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-5 md:p-6 flex flex-col justify-between min-h-[350px]">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#14F195]" />
                        <span className="text-xs font-mono text-slate-400 uppercase">Compiled Markdown Briefing</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">
                        MODEL: gemini-3.5-flash
                      </span>
                    </div>

                    {isGeneratingPitch ? (
                      <div className="space-y-3 py-6 animate-pulse select-none">
                        <div className="h-4 bg-slate-800 rounded w-1/3"></div>
                        <div className="h-3 bg-slate-800 rounded w-full"></div>
                        <div className="h-3 bg-slate-800 rounded w-5/6"></div>
                        <div className="h-3 bg-slate-800 rounded w-full"></div>
                        <div className="h-3 bg-slate-800 rounded w-2/3"></div>
                      </div>
                    ) : (
                      <div className="text-xs md:text-sm text-slate-300 space-y-4 max-h-[380px] overflow-y-auto pr-1 leading-relaxed whitespace-pre-wrap">
                        {tailoredPitch || "Compiled strategy pitch results appear here."}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-900 mt-4 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500 select-none">
                    <span>AISO CUSTOMIZER INTEGRATION</span>
                    <span>TUZ PROTOCOL CO-AUTHORED</span>
                  </div>
                </div>

              </div>
              
            </div>
          )}

        </section>

      </main>

      {/* 3. Global Decorative Footer */}
      <footer className="w-full max-w-7xl mx-auto border-t border-slate-850 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-450 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Tuzla Solana dApp Framework // Verificado en la blockchain de Solana</span>
        </div>
        <div className="flex gap-4">
          <span>TUZ: SPL Token standard on Solana</span>
          <span>•</span>
          <span>Bosnia World Cup 2026 Sports Album digital collector</span>
        </div>
      </footer>

    </div>
  );
}
