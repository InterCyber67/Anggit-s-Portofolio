export type MissionCategory =
  | "ALL"
  | "AI"
  | "ROBOTICS"
  | "CYBERSECURITY"
  | "COMPUTER SCIENCE"
  | "RESEARCH / INNOVATION";

export type MissionResultTier =
  | "FIRST"
  | "SECOND"
  | "THIRD"
  | "SECOND_AND_THIRD"
  | "FINALIST"
  | "PROPOSAL_SELECTED"
  | "PARTICIPATION";

export interface Competition {
  id: number;
  name: string;
  year: number;
  category: Exclude<MissionCategory, "ALL">;
  rawResult: string;
  resultTier: MissionResultTier;
  resultLabel: string;
  featured?: boolean;
  featuredTitle?: string;
  featuredSubtitle?: string;
  highlightNote?: string;
}

export const COMPETITIONS: Competition[] = [
  {
    id: 1,
    name: "Technoday UNNES",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "Juara 3 (3rd)",
    resultTier: "THIRD",
    resultLabel: "3rd Place (Juara 3)",
    featured: true,
    featuredTitle: "Technoday UNNES",
    featuredSubtitle: "3RD PLACE",
    highlightNote: "State University of Semarang technical competition podium.",
  },
  {
    id: 2,
    name: "TED UGM",
    year: 2024,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 3,
    name: "IISRO UIN",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "Juara 2 & 3 (2nd & 3rd)",
    resultTier: "SECOND_AND_THIRD",
    resultLabel: "2nd & 3rd Place",
    featured: true,
    featuredTitle: "IISRO UIN",
    featuredSubtitle: "2ND & 3RD PLACE",
    highlightNote: "International Islamic School Robot Olympiad double podium finish.",
  },
  {
    id: 4,
    name: "SIC 2024",
    year: 2024,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 5,
    name: "ELECTRA ITS",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 6,
    name: "KOSSMI ABAK",
    year: 2024,
    category: "RESEARCH / INNOVATION",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 7,
    name: "Baronas ITS",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 8,
    name: "OSMA",
    year: 2024,
    category: "RESEARCH / INNOVATION",
    rawResult: "Finalis",
    resultTier: "FINALIST",
    resultLabel: "Finalist",
    featured: true,
    featuredTitle: "OSMA",
    featuredSubtitle: "FINALIST",
    highlightNote: "National Madrasah Science Olympiad national finalist ranking.",
  },
  {
    id: 9,
    name: "OSN",
    year: 2024,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 10,
    name: "IERCOO AI",
    year: 2024,
    category: "AI",
    rawResult: "Juara 1 (1st)",
    resultTier: "FIRST",
    resultLabel: "1st Place (Juara 1)",
    featured: true,
    featuredTitle: "IERCOO AI",
    featuredSubtitle: "1ST PLACE",
    highlightNote: "Championship victory in artificial intelligence challenge track.",
  },
  {
    id: 11,
    name: "COMPFEST UI",
    year: 2024,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 12,
    name: "SIC 2025",
    year: 2025,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 13,
    name: "The Ace UNDIP",
    year: 2024,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 14,
    name: "DTE UNSOED",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 15,
    name: "MRC Kemenag",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 16,
    name: "Spectrum UNDIP",
    year: 2024,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 17,
    name: "Elination UNY",
    year: 2024,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 18,
    name: "Essai AMIKOM",
    year: 2024,
    category: "RESEARCH / INNOVATION",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 19,
    name: "Krenova Bappeda WSB",
    year: 2024,
    category: "RESEARCH / INNOVATION",
    rawResult: "Juara 3 (3rd)",
    resultTier: "THIRD",
    resultLabel: "3rd Place (Juara 3)",
    featured: true,
    featuredTitle: "Krenova Bappeda WSB",
    featuredSubtitle: "3RD PLACE",
    highlightNote: "Regional science and innovation research podium award.",
  },
  {
    id: 20,
    name: "Techcomfest POLINES",
    year: 2025,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 21,
    name: "AIrena Nyoo 2025",
    year: 2025,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 22,
    name: "Cyber Security Jateng",
    year: 2025,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 23,
    name: "IISRO",
    year: 2025,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 24,
    name: "Cyber Jawara",
    year: 2025,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 25,
    name: "Opsilon",
    year: 2025,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 26,
    name: "KOSSMI",
    year: 2025,
    category: "RESEARCH / INNOVATION",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 27,
    name: "Lomba Data Science Wharton",
    year: 2025,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 28,
    name: "OSN 2026",
    year: 2026,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 29,
    name: "Minecraft AI Coding Microsoft",
    year: 2025,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 30,
    name: "ICTF University of California",
    year: 2025,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 31,
    name: "CTF Santa",
    year: 2025,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 32,
    name: "AIrena Nyoo 2026",
    year: 2026,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 33,
    name: "OPSI 2026",
    year: 2026,
    category: "RESEARCH / INNOVATION",
    rawResult: "Lolos Proposal",
    resultTier: "PROPOSAL_SELECTED",
    resultLabel: "Proposal Selected",
    featured: true,
    featuredTitle: "OPSI 2026",
    featuredSubtitle: "PROPOSAL SELECTED",
    highlightNote: "Olimpiade Penelitian Siswa Indonesia national research proposal passed.",
  },
  {
    id: 34,
    name: "OSMA 2026",
    year: 2026,
    category: "RESEARCH / INNOVATION",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 35,
    name: "Bug Bounty Kemendikdasmen",
    year: 2026,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 36,
    name: "Bina Talenta 2026",
    year: 2026,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 37,
    name: "Technocorner",
    year: 2025,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 38,
    name: "OSN AI",
    year: 2026,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 39,
    name: "Cyber Security Polri",
    year: 2026,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 40,
    name: "Cyber Security TNI",
    year: 2026,
    category: "CYBERSECURITY",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 41,
    name: "Internasional Junior Coding Competition",
    year: 2025,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 42,
    name: "Sudoku WPF Grand Prix",
    year: 2025,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 43,
    name: "NGN Hacks",
    year: 2025,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 44,
    name: "DTE UNSOED 26",
    year: 2026,
    category: "ROBOTICS",
    rawResult: "Juara 2 (2nd)",
    resultTier: "SECOND",
    resultLabel: "2nd Place (Juara 2)",
    featured: true,
    featuredTitle: "DTE UNSOED 2026",
    featuredSubtitle: "2ND PLACE",
    highlightNote: "Electrical & robotics engineering competition runner-up.",
  },
  {
    id: 45,
    name: "IERCCO AI VISION",
    year: 2026,
    category: "AI",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 46,
    name: "IERCCO VIRTUAL ROBOT SOCCER",
    year: 2026,
    category: "ROBOTICS",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
  {
    id: 47,
    name: "Lomba Roblox Studio",
    year: 2026,
    category: "COMPUTER SCIENCE",
    rawResult: "-",
    resultTier: "PARTICIPATION",
    resultLabel: "Participation",
  },
];

export function getMissionStatistics() {
  const total = COMPETITIONS.length; // 47
  const podium = COMPETITIONS.filter(
    (c) =>
      c.resultTier === "FIRST" ||
      c.resultTier === "SECOND" ||
      c.resultTier === "THIRD" ||
      c.resultTier === "SECOND_AND_THIRD"
  ).length; // 5 events (IERCOO 1st, IISRO 2nd&3rd, DTE UNSOED 26 2nd, Technoday 3rd, Krenova 3rd)
  const finalistOrSelected = COMPETITIONS.filter(
    (c) =>
      c.resultTier === "FINALIST" || c.resultTier === "PROPOSAL_SELECTED"
  ).length; // 2 events (OSMA Finalist, OPSI 2026 Proposal Selected)
  const participation = COMPETITIONS.filter(
    (c) => c.resultTier === "PARTICIPATION"
  ).length; // 40 events

  const categories = {
    AI: COMPETITIONS.filter((c) => c.category === "AI").length,
    ROBOTICS: COMPETITIONS.filter((c) => c.category === "ROBOTICS").length,
    CYBERSECURITY: COMPETITIONS.filter((c) => c.category === "CYBERSECURITY").length,
    "COMPUTER SCIENCE": COMPETITIONS.filter((c) => c.category === "COMPUTER SCIENCE").length,
    "RESEARCH / INNOVATION": COMPETITIONS.filter((c) => c.category === "RESEARCH / INNOVATION").length,
  };

  return {
    total,
    podium,
    finalistOrSelected,
    participation,
    activeYears: "2024–2026",
    categories,
  };
}

export const FEATURED_ACHIEVEMENTS = COMPETITIONS.filter((c) => c.featured);
