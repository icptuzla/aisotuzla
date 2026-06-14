export interface AisoDataSchema {
  "@context": string;
  "@type": string;
  "name": string;
  "description": string;
  "url": string;
  "logo": string;
  "address": {
    "@type": string;
    "streetAddress": string;
    "addressLocality": string;
    "postalCode": string;
    "addressCountry": string;
  };
  "potentialAction"?: {
    "@type": string;
    "target": string;
    "query-input"?: string;
  };
}

export interface TourCheckpoint {
  id: string;
  name: string;
  description: string;
  coordinates: string;
  arFeature: string;
  nftImageUrl: string;
  nftTokenName: string;
  difficulty: "Easy" | "Medium" | "Challenging";
  xpAwarded: number;
}

export interface BosniaPlayerNFT {
  id: string;
  name: string;
  position: "GK" | "DF" | "MF" | "FW";
  number: number;
  grade: "Common" | "Rare" | "Epic" | "Legendary";
  mintAddress: string;
  imageUrl: string;
  scanned: boolean;
}

export interface TuzProtocolBatch {
  batchId: string;
  timestamp: string;
  brineSource: "Tetima Deep Well T-1" | "Tetima Deep Well T-2" | "Hukalo Well-V";
  tonnage: number;
  purity: number; // e.g. 99.9 or 99.95
  classification: "Industrial Grade" | "Battery Grade Na-Ion commodity";
  carbonFootprint: number; // kg CO2 / kg
  certified: boolean;
  onChainTx?: string;
  esgRating: "A" | "AA" | "AAA";
}

export interface CavernState {
  id: string;
  name: string;
  depthRange: string;
  volumeM3: number;
  pressureBar: number;
  lastSonarScan: string;
  subsidenceRateMm: number; // target < 5mm
  status: "Optimal" | "Action Required" | "Critical";
  pressureBalanced: boolean;
}

export interface FinancialInputs {
  gigafactoryScaleGwh: number; // 1 to 10
  rawSaltOutputTpy: number; // 50,000 to 250,000
  batteryCellSellingPrice: number; // 30 to 150 EUR/kWh
  capexPerGwhMillion: number; // 80 to 120
  greenEnergyRatio: number; // 0 to 100%
  brinePurchasePriceT: number; // 10 to 50 EUR/tonne
}

export interface FinancialResults {
  totalCapexMillion: number;
  annualRevenueMillion: number;
  netMarginPercent: number;
  annualEbitdaMillion: number;
  irrPercent: number;
  jobsCreated: number;
}

export interface InvestorProfile {
  id: string;
  name: string;
  focus: string;
  badge: string;
  color: string;
}
