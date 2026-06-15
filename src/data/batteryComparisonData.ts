export interface SIBMetric {
  metric: { en: string; bs: string };
  lfp: { en: string; bs: string };
  nmc: { en: string; bs: string };
  sodium: { en: string; bs: string };
  highlight?: boolean;
}

export interface SIBCathode {
  type: { en: string; bs: string };
  voltage: string;
  features: { en: string; bs: string };
  limitations: { en: string; bs: string };
}

export interface SIBFaq {
  id: string;
  category: "Performance" | "Economics" | "Safety" | "Future";
  categoryBs: "Performanse" | "Ekonomija" | "Sigurnost" | "Budućnost";
  q: { en: string; bs: string };
  a: { en: string; bs: string };
}

export const BATTERY_METRICS: SIBMetric[] = [
  {
    metric: { en: "Energy Density", bs: "Energetska Gustoća" },
    lfp: { en: "150–210 Wh/kg", bs: "150–210 Wh/kg" },
    nmc: { en: "240–350 Wh/kg", bs: "240–350 Wh/kg" },
    sodium: { en: "100–175 Wh/kg", bs: "100–175 Wh/kg" },
    highlight: true
  },
  {
    metric: { en: "Cycle Life (recharges)", bs: "Vijek Trajanja (ciklusi)" },
    lfp: { en: "3,000–6,000 cycles", bs: "3,000–6,000 ciklusa" },
    nmc: { en: "1,000–2,000 cycles", bs: "1,000–2,000 ciklusa" },
    sodium: { en: "4,000–6,000+ cycles (latest >10k)", bs: "4,000–6,000+ ciklusa (najnoviji >10k)" }
  },
  {
    metric: { en: "Nominal Cell Voltage", bs: "Nominalni Napon Ćelije" },
    lfp: { en: "3.2 V", bs: "3.2 V" },
    nmc: { en: "3.6 V - 3.7 V", bs: "3.6 V - 3.7 V" },
    sodium: { en: "2.8 V - 3.2 V (by cathode)", bs: "2.8 V - 3.2 V (ovisno o katodi)" }
  },
  {
    metric: { en: "Raw Carbonate Price", bs: "Cijena Sirove Rude (karbonat)" },
    lfp: { en: "~$10,000–$11,000 / ton", bs: "~$10.000–$11.000 / toni" },
    nmc: { en: "~$10,000–$11,000 / ton", bs: "~$10.000–$11.000 / toni" },
    sodium: { en: "~$600–$650 / ton", bs: "~$600–$650 / toni" },
    highlight: true
  },
  {
    metric: { en: "Est. Cell Cost (Scale)", bs: "Procijenjena Cijena Ćelije" },
    lfp: { en: "~$80 / kWh", bs: "~$80 / kWh" },
    nmc: { en: "~$95 / kWh", bs: "~$95 / kWh" },
    sodium: { en: "~$100 / kWh (2026 pilot) ➔ dropping to $42", bs: "~$100 / kWh (2026 pilot) ➔ pada na $42" }
  },
  {
    metric: { en: "Lithium/Sodium Crust Abundance", bs: "Zastupljenost u Zemljinoj Kori" },
    lfp: { en: "Rare (0.0017%)", bs: "Rijedak (0.0017%)" },
    nmc: { en: "Rare (0.0017%)", bs: "Rijedak (0.0017%)" },
    sodium: { en: "Extremely Abundant (2.6%)", bs: "Veoma Zastupljen (2.6%)" },
    highlight: true
  },
  {
    metric: { en: "Operating Temp Range", bs: "Radni Temperaturni Opseg" },
    lfp: { en: "-20°C to 60°C (Poor in cold)", bs: "-20°C do 60°C (Slabo na hladnoći)" },
    nmc: { en: "-20°C to 60°C (Sub-optimal in cold)", bs: "-20°C do 60°C (Suboptimalno u hladnom)" },
    sodium: { en: "-40°C to 60°C (90% capacity at -20°C)", bs: "-40°C do 60°C (90% kapaciteta na -20°C)" },
    highlight: true
  },
  {
    metric: { en: "Safety & Runway Risk", bs: "Sigurnost i Termički Rizik" },
    lfp: { en: "Medium Risk (Flammable)", bs: "Srednji Rizik (Zapaljivo)" },
    nmc: { en: "High Risk (Highly Flammable)", bs: "Visok Rizik (Izrazito Zapaljivo)" },
    sodium: { en: "Very Low Risk (Non-flammable)", bs: "Veoma Nizak Rizik (Nezapaljivo)" }
  },
  {
    metric: { en: "Shipping Regulations", bs: "Propisi za Transport i Isporuku" },
    lfp: { en: "Hazardous (Class 9 Hazmat)", bs: "Opasna roba (Klasa 9 Hazmat)" },
    nmc: { en: "Hazardous (Class 9 Hazmat)", bs: "Opasna roba (Klasa 9 Hazmat)" },
    sodium: { en: "Safe (Can ship at 0V safely)", bs: "Sigurno (Dozvoljena isporuka na 0V)" }
  }
];

export const SODIUM_CATHODES: SIBCathode[] = [
  {
    type: { en: "Layered Oxides (NaₓMO₂)", bs: "Slojeviti Oksidi (NaₓMO₂)" },
    voltage: "3.0 V",
    features: {
      en: "Highest specific capacity, highly commercialized, stable voltage platform.",
      bs: "Najveći specifični kapacitet, široko komercijalizovan, stabilna kriva napona."
    },
    limitations: {
      en: "Prone to air degradation, sensitive moisture management required.",
      bs: "Skloni degradaciji na zraku, zahtijeva strogu kontrolu vlage."
    }
  },
  {
    type: { en: "Polyanionic (e.g., Sodium Vanadium)", bs: "Polianioni (npr. Natrijum Vanadijum)" },
    voltage: "2.8 V - 2.9 V",
    features: {
      en: "Superior thermal stability, exceptional cycle life (>10,000), extremely safe.",
      bs: "Vrhunska termalna stabilnost, izuzetan vijek ciklusa (>10.000), ekstremno siguran."
    },
    limitations: {
      en: "Lower energy density due to heavier molecular weight.",
      bs: "Niža energetska gustoća zbog teže molekularne mase."
    }
  },
  {
    type: { en: "Prussian Blue / Prussian White", bs: "Prusko Plavo / Prusko Bijelo" },
    voltage: "3.2 V",
    features: {
      en: "High voltage potential close to lithium, cheap materials with iron/carbon.",
      bs: "Visoki naponski potencijal blizak litijumu, jeftin materijal (željezo/karbon)."
    },
    limitations: {
      en: "Lower capacity retention & stability challenges during rapid cycling.",
      bs: "Slaba retencija kapaciteta i izazovi sa stabilnošću pri brzom punjenju."
    }
  }
];

export const FAQ_DATA: SIBFaq[] = [
  {
    id: "faq_1",
    category: "Performance",
    categoryBs: "Performanse",
    q: {
      en: "What exactly is a sodium-ion battery, and how does it differ from lithium-ion?",
      bs: "Šta je tačno natrijum-jonska baterija i kako se razlikuje od litijum-jonske?"
    },
    a: {
      en: "A sodium-ion battery is a type of rechargeable battery that uses sodium ions (Na+) as charge carriers instead of lithium ions (Li+). While both share a similar 'rocking-chair' architecture - moving ions back and forth between anode and cathode - the primary difference lies in resource abundance: sodium is the sixth most abundant element on Earth (found in common salt), making it a sustainable and low-cost alternative to scarce lithium.",
      bs: "Natrijum-jonska baterija (sodium-ion battery) je punjiva baterija koja koristi jone natrijuma (Na+) kao prenosioce naboja umjesto litijumovih jona (Li+). Iako dijele sličnu 'rocking-chair' arhitekturu - kretanje jona naprijed-nazad između anode i katode - osnovna razlika leži u izobilju resursa: natrijum je šesti najzastupljeniji element na Zemlji (nalazi se u kuhinjskoj soli), što ga čini ekološki održivom i višestruko jeftinijom alternativom rijetkom litijumu."
    }
  },
  {
    id: "faq_2",
    category: "Performance",
    categoryBs: "Performanse",
    q: {
      en: "Which battery has a higher energy density, sodium or lithium?",
      bs: "Koja baterija ima veću energetsku gustoću, natrijum ili litijum?"
    },
    a: {
      en: "Lithium-ion batteries hold the lead in energy density, ranging from 150-210 Wh/kg (LFP) up to 240-350 Wh/kg (NMC). Sodium-ion batteries offer between 100-175 Wh/kg. This means that for the same weight, a lithium-ion battery stores roughly 30% to 50% more energy, making lithium ideal for long-range electric vehicles and high-end compact consumer electronics, while sodium works best for heavy stationary storage and short-range urban commuting.",
      bs: "Litijum-jonske baterije drže vodstvo u energetskoj gustoći, u rasponu od 150-210 Wh/kg (LFP) do 240-350 Wh/kg (NMC). Natrijum-jonske baterije nude između 100-175 Wh/kg. To znači da za istu težinu, litijum-jonska baterija skladišti otprilike 30% do 50% više energije, što litijum čini idealnim za električna vozila dugog dometa i mobilne uređaje, dok natrijum izvrsno služi za fiksna skladišta i gradska vozila."
    }
  },
  {
    id: "faq_3",
    category: "Economics",
    categoryBs: "Ekonomija",
    q: {
      en: "Is sodium-ion really cheaper than lithium-ion?",
      bs: "Da li je natrijum-jonska tehnologija zaista jeftinija od litijumove?"
    },
    a: {
      en: "Yes, sodium-ion batteries are significantly cheaper at the raw material level. Sodium salts are hundreds of times cheaper than lithium carbonate ($600/ton vs. $10,000+/ton). Furthermore, sodium batteries use cheap aluminum foil for both cathode and anode conductors, whereas lithium requires expensive copper on the anode side. While low manufacturing volume currently keeps 2026 cell prices on par with lithium at ~$100/kWh, costs will drop to ~$42/kWh with industrial scale.",
      bs: "Da, natrijum-jonske baterije su znatno jeftinije na nivou sirovina. Soli natrijuma su stotinama puta jeftinije od litijum-karbonata ($600/toni naspram $10.000+/toni). Dodatno, natrijumske baterije koriste jeftinu aluminijumsku foliju za oba kolektora struje (anodu i katodu), dok litijum zahtijeva skupi bakar za anodu. Iako trenutni mali obim proizvodnje u 2026. drži cijene na nivou litijuma (~$100/kWh), ekspanzija industrije će srušiti cijene na prognoziranih ~$42/kWh."
    }
  },
  {
    id: "faq_4",
    category: "Performance",
    categoryBs: "Performanse",
    q: {
      en: "How do sodium-ion batteries perform in extremely cold weather?",
      bs: "Kako se natrijum-jonske baterije ponašaju u ekstremno hladnim uslovima?"
    },
    a: {
      en: "Sodium-ion batteries exhibit spectacular low-temperature performance compared to lithium. They retain over 80-90% of their rated capacity at temperatures as low as -20°C (-4°F) and can discharge all the way down to -40°C. This is a massive improvement over traditional lithium cells, which experience severe power loss, sluggish chemical reaction speeds, and high internal resistance in freezing climates.",
      bs: "Natrijum-jonske baterije pokazuju spektakularne performanse na niskim temperaturama u poređenju sa litijumom. Zadržavaju preko 80-90% svog deklarisanog kapaciteta na temperaturama do -20°C i funkcionišu bez problema sve do -40°C. To je ogroman napredak u odnosu na litijumske ćelije koje u ekstremno hladnim klimatskim uslovima pate od gubitka snage i usporene hemijske reakcije."
    }
  },
  {
    id: "faq_5",
    category: "Safety",
    categoryBs: "Sigurnost",
    q: {
      en: "Are sodium-ion batteries safer to transport and use?",
      bs: "Da li su natrijum-jonske baterije sigurnije za transport i upotrebu?"
    },
    a: {
      en: "Absolutely. Sodium-ion chemistry is inherently more stable and less prone to dangerous thermal runaway (rapid overheating leading to fire). Additionally, sodium-ion batteries can be completely discharged to 0 volts for transport. This eliminates the risk of short-circuit fires during shipping - a feat that would permanently damage and ruin a standard lithium-ion battery pack.",
      bs: "Apsolutno. Natrijum-jonska hemija je inherentno stabilnija i manje podložna opasnom termičkom proboju (brzom pregrijavanju koje vodi do požara). Dodatno, natrijum-jonske ćelije se mogu potpuno isprazniti na 0 volti za potrebe transporta. To u potpunosti eliminiše rizik od požara uslijed kratkog spoja tokom isporuke - što bi kod litijum-jonske baterije izazvalo trajno oštećenje i uništenje."
    }
  },
  {
    id: "faq_6",
    category: "Performance",
    categoryBs: "Performanse",
    q: {
      en: "Do sodium-ion batteries charge faster than lithium-ion?",
      bs: "Da li se natrijum-jonske baterije pune brže nego litijum-jonske?"
    },
    a: {
      en: "Yes, sodium-ion cells support exceptionally high ionic conductivity, which translates to faster charging rates. Most sodium-ion designs can charge from 0% to 80% state of charge (SOC) in just 15 minutes at room temperature. This is twice as fast as typical lithium iron phosphate (LFP) packs which often require 30 to 45 minutes of thermal preparation and slow trickle stages.",
      bs: "Da, natrijum-jonske ćelije podržavaju izuzetno visoku provodljivost jona, što omogućava brže punjenje. Većina natrijum-jonskih dizajna može napuniti bateriju od 0% do 80% kapaciteta za samo 15 minuta na sobnoj temperaturi. To je dvostruko brže od uobičajenih litijum-gvozdenih (LFP) pakovanja kojima obično treba 30 do 45 minuta uz sporo balansiranje temperature."
    }
  },
  {
    id: "faq_7",
    category: "Future",
    categoryBs: "Budućnost",
    q: {
      en: "Will sodium-ion batteries replace lithium-ion in electric cars?",
      bs: "Hoće li natrijum-jonske baterije u potpunosti zamijeniti litijum u električnim autima?"
    },
    a: {
      en: "No, they will complement rather than replace lithium. Because lithium-ion retains a high energy-to-weight ratio, premium long-range EVs (300+ miles) will continue to rely on NMC/LFP chemistries. However, sodium-ion is the perfect solution for 'budget' or 'entry-level' city commuter cars (150-250 miles range), heavy fleet logistics, city transit buses, and low-speed light vehicles where upfront purchase cost and weather resilience are prioritized.",
      bs: "Ne, one će komplementirati prije nego potpuno zamijeniti litijum. Pošto litijum-jonske baterije zadržavaju superioran omjer energije i težine, premium električna vozila dugog dometa i dalje će se oslanjati na NMC/LFP hemiju. Ipak, natrijum-jonske baterije su savršeno rješenje za gradska vozila kraćeg dometa (150-250 milja), autobuse, te dostavna vozila u hladnim krajevima gdje su prioritet niska cijena i otpornost na niske temperature."
    }
  },
  {
    id: "faq_8",
    category: "Future",
    categoryBs: "Budućnost",
    q: {
      en: "Can I use sodium-ion batteries for home solar energy storage?",
      bs: "Mogu li se natrijum-jonske baterije koristiti za skladištenje kućne solarnu energije?"
    },
    a: {
      en: "Yes, home solar storage and grid-scale energy storage systems (ESS) are the ultimate use cases for sodium-ion. Since stationary setups care very little about battery size and weight, sodium's lower energy density is not a drawback. Home and grid systems benefit enormously from sodium's lower price-per-kWh, absolute safety profile (no risk of indoor battery fire), and extremely durable cyclic resistance.",
      bs: "Da, kućne solarne baterije i mrežni sistemi za skladištenje energije (ESS) predstavljaju najvažnije polje primjene za natrijum. Pošto stacionarnim instalacijama nije bitna težina i veličina baterije, slabija energetska gustoća ne predstavlja nikakav problem. Sistemi za domove imaju ogromnu korist od natrijumove niske cijene po kWh, apsolutne sigurnosti (nulti rizik od požara u kući) i trajnosti."
    }
  },
  {
    id: "faq_9",
    category: "Safety",
    categoryBs: "Sigurnost",
    q: {
      en: "Which battery is more environmentally friendly?",
      bs: "Koja je baterija više ekološki prihvatljiva i zelenija?"
    },
    a: {
      en: "Sodium-ion batteries are significantly greener. They require absolutely no cobalt or nickel—materials heavily tied to highly harmful ethical mining violations and hazardous local ecosystems. By relying purely on abundant rock salt (or soda ash) and steel-cased aluminum foil, the geological mining footprint is less resource-intense and has a much shorter, environmentally cleaner logistical supply chain.",
      bs: "Natrijum-jonske baterije su znatno zelenije. One u potpunosti eliminišu potrebu za kobaltom ili niklom—materijalima čije je iskopavanje povezano sa teškim narušavanjem ekosistema i nehumanim uslovima rada. Zahvaljujući upotrebi obične kamene soli (ili sode soli) i aluminijumskih folija, rudarski otisak je minimalan, a logistika ekološki mnogo čistija."
    }
  },
  {
    id: "faq_10",
    category: "Performance",
    categoryBs: "Performanse",
    q: {
      en: "How many charge cycles can I expect from a sodium-ion battery?",
      bs: "Koliko ciklusa punjenja mogu očekivati od natrijum-jonske baterije?"
    },
    a: {
      en: "Currently, commercial sodium-ion cells comfortably yield 4,000 to 6,000 cycles at 80% depth of discharge. While high-grade LFP lithium batteries can reach similar figures, sodium-ion crystal architectures (particularly polyanionic types) are structurally incredibly stable and are rapidly scaling past 10,000+ cycles in latest industrial trials - translating to over 15 years of daily active service.",
      bs: "Trenutno, komercijalne natrijum-jonske ćelije lako dostižu 4.000 do 6.000 punih ciklusa pri 80% dubine pražnjenja. Dok visokokvalitetne LFP litijumske baterije imaju slične brojke, kristalne strukture natrijuma (naročito polianionski tipovi) su izuzetno stabilne i u najnovijim industrijskim testovima prelaze preko 10.000+ ciklusa, što osigurava preko 15 godina svakodnevne upotrebe."
    }
  },
  {
    id: "faq_11",
    category: "Performance",
    categoryBs: "Performanse",
    q: {
      en: "Why are sodium-ion batteries heavier if they use the same tech?",
      bs: "Zašto su natrijum-jonske baterije teže ako koriste istu tehnologiju?"
    },
    a: {
      en: "The weight penalty relates directly to fundamental chemistry. A single sodium ion is about 25% larger and three times physically heavier than a lithium ion. As a result, the active electrode material and separators must be scaled up to safely accommodate these larger ions during the charging/discharging loop. This extra volume translates to a heavier battery pack for the exact same amount of electricity stored.",
      bs: "Težinski panel ovisi direktno o fundamentalnoj hemiji. Pojedinačni jon natrijuma je oko 25% volumenski veći i tri puta fizički teži od jona litijuma. Zbog toga aktivni materijali elektrode i separator moraju biti veći kako bi primili ove veće jone tokom punjenja i pražnjenja. Taj extra volumen uzrokuje da je baterija teža za istu količinu pohranjene struje."
    }
  },
  {
    id: "faq_12",
    category: "Economics",
    categoryBs: "Ekonomija",
    q: {
      en: "Can sodium-ion batteries be manufactured on existing production lines?",
      bs: "Mogu li se natrijum-jonske baterije proizvoditi u postojećim fabrikama litijuma?"
    },
    a: {
      en: "Yes, this is one of sodium-ion's biggest structural advantages! It shares over 90% commonality with existing lithium-ion wet chemistry manufacturing lines. Standard assembly, battery winding, and electrolyte filling machines are fully compatible. Gigafactories can transition from lithium to sodium-ion cell manufacturing with minimal re-tooling capital expenditure, accelerating broad commercial scaling worldwide.",
      bs: "Da, ovo je jedna od najvećih strateških prednosti natrijuma! On dijeli preko 90% istih proizvodnih procesa sa postojećim litijum-jonskim fabrikama. Standardne mašine za slaganje, namotavanje i punjenje elektrolita su potpuno kompatibilne. Gigafabrike mogu preći sa litijuma na natrijum uz minimalne troškove re-alatiranja, ubrzavajući širenje na globalno tržište."
    }
  },
  {
    id: "faq_13",
    category: "Economics",
    categoryBs: "Ekonomija",
    q: {
      en: "What are the best applications for sodium-ion batteries right now?",
      bs: "Koje su trenutno najbolje primjene za natrijum-jonske baterije?"
    },
    a: {
      en: "The three ultimate niches where sodium-ion reigns supreme are: 1) Stationary Grid Energy Storage (ESS) and residential solar backup where weight is a non-issue. 2) Electric Micro-mobility - urban electric scooters, e-scooters, commuter three-wheelers, and forklifts. 3) Cold-climate commercial and utility infrastructure operating in freezing regions where lithium would fail entirely.",
      bs: "Tri ključna sektora u kojima natrijum-jonske baterije dominiraju su: 1) Stacionarno skladištenje mrežne energije (ESS) i kućni solarni sistemi gdje težina nije faktor. 2) Mikro-mobilnost - električni skuteri, dostavna vozila, viljuškari. 3) Komercijalna i industrijska infrastruktura u ekstremno hladnim krajevima gdje bi tradicionalni litijum u potpunosti zakazao."
    }
  },
  {
    id: "faq_14",
    category: "Safety",
    categoryBs: "Sigurnost",
    q: {
      en: "Are there any downsides to using sodium-ion batteries?",
      bs: "Postoje li negativne strane ili mane kod natrijum-jonskih baterija?"
    },
    a: {
      en: "The primary drawback is lower spatial energy density - meaning you need a physically larger and heavier battery pack. This makes them unsuitable for highly weight-conscious products like commercial drones, premium high-performance smartphones, compact laptops, or long-range performance electric vehicles. Additionally, because the ecosystem is in its infancy, materials and supply chains are currently less mature than the lithium market.",
      bs: "Glavna mana je manja energetska gustoća - što znači da trebate fizički veće i teže kućište baterije. Zbog toga nisu pogodne za prenosive uređaje koji traže minimalnu težinu poput dronova, pametnih telefona, ultra-tankih laptopa ili dugometražnih EV-ova. Također, pošto je lanac snabdijevanja natrijumovim materijalima još u povoju, tržište je manje zrelo od litijumovog."
    }
  },
  {
    id: "faq_15",
    category: "Future",
    categoryBs: "Budućnost",
    q: {
      en: "How do I choose between sodium-ion and lithium-ion for my project?",
      bs: "Kako da odaberem između natrijum-jonske i litijum-jonske tehnologije za svoj projekat?"
    },
    a: {
      en: "Apply this quick three-step framework: 1) Evaluate spatial energy limits. If absolute minimum weight & ultra-high range are critical (e.g., premium EV), select NMC/LFP Lithium. 2) Evaluate safety and project budget. For lowest cost-per-kWh, maximum fire safety, and maintenance-free structures, select Sodium-ion. 3) Ambient Temperature. If operating in persistent freezing climates (-10°C or lower), Sodium-ion is the clear superior performer.",
      bs: "Primijenite ovaj jednostavan trostepeni okvir: 1) Procijenite težinske limite. Ako su minimalna težina i maksimalni domet prioritet (npr. dron ili premium auto), birajte litijum (NMC/LFP). 2) Provjerite budžet i sigurnost. Za najnižu konačnu cijenu, nulti rizik od požara i jednostavno održavanje, izaberite natrijum. 3) Radna temperatura. Ako radite na trajnim nisko-temperaturnim lokacijama, natrijum je apsolutni pobjednik."
    }
  }
];
