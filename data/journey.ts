export interface JourneyMilestone {
  step: string;
  stageName: string;
  temporalRange: string;
  headline: string;
  narrative: string;
  catalyst: string;
  keyOutputs: string[];
  themeColor: string;
  starMagnitude: number;
}

export const JOURNEY_STAGES: JourneyMilestone[] = [
  {
    step: "01",
    stageName: "ROBOTICS",
    temporalRange: "2024 — Early Foundations",
    headline: "Where physics meets logic: breadboards, motors, and line sensors.",
    narrative:
      "The exploration began with physical circuits. Soldering headers, calibrating infrared line sensors, and programming microcontrollers under strict tournament rules. Learning that software bugs have physical consequences taught an early respect for rigorous debugging.",
    catalyst: "National robotics competitions: Technoday UNNES, IISRO UIN, Baronas ITS.",
    keyOutputs: [
      "Autonomous maze and line-following robots",
      "Sensor calibration routines in C/C++",
      "Multiple national tournament podiums",
    ],
    themeColor: "#D8B878",
    starMagnitude: 1.0,
  },
  {
    step: "02",
    stageName: "COMPUTER SCIENCE",
    temporalRange: "2024 — Algorithmic Awakening",
    headline: "Transcending hardware limits through pure computational thinking.",
    narrative:
      "Physical robots demanded better algorithms. This sparked an immersion into discrete mathematics, competitive programming, graph traversals, and algorithmic complexity. Understanding how data structures behave in memory unlocked a deeper layer of engineering.",
    catalyst: "Olimpiade Sains Nasional (OSN Informatika) & competitive logic benchmarks.",
    keyOutputs: [
      "Competitive programming routines",
      "Graph traversal and dynamic programming solutions",
      "Sudoku WPF Grand Prix logic puzzles",
    ],
    themeColor: "#8297B8",
    starMagnitude: 0.9,
  },
  {
    step: "03",
    stageName: "AI / COMPUTER VISION",
    temporalRange: "2024–2025 — Perception & Vision",
    headline: "Giving machines eyes: from raw pixel arrays to semantic understanding.",
    narrative:
      "Static sensor arrays felt limiting. Training computer vision models to track moving objects in real-time, detect pest blight on plant leaves, and parse hand gestures opened up a new frontier where algorithms interpret the real world.",
    catalyst: "IERCOO AI (1st Place championship) & Samsung Innovation Campus.",
    keyOutputs: [
      "Real-time object detection models",
      "Webcam gesture tracking for cultural puppetry",
      "IERCOO AI 1st Place victory",
    ],
    themeColor: "#D8B878",
    starMagnitude: 1.2,
  },
  {
    step: "04",
    stageName: "DATA SCIENCE",
    temporalRange: "2025 — Empirical Rigor",
    headline: "Sifting signal from noise across high-dimensional benchmarks.",
    narrative:
      "Curiosity about statistical modeling led to exploring tabular data science, feature engineering, and ensemble prediction models. Learning to avoid data leakage and respect statistical validation proved that guessing has no place in engineering.",
    catalyst: "Wharton High School Data Science Competition & AIrena Nyoo benchmarks.",
    keyOutputs: [
      "LightGBM & XGBoost ensemble pipelines",
      "Stratified cross-validation testbeds",
      "Exploratory multivariate analytics",
    ],
    themeColor: "#758BA8",
    starMagnitude: 0.85,
  },
  {
    step: "05",
    stageName: "CYBERSECURITY",
    temporalRange: "2025–2026 — Adversarial Thinking",
    headline: "Understanding defense through the precision of offensive exploration.",
    narrative:
      "Engineering secure software requires knowing how attackers dismantle systems. Diving into Capture The Flag (CTF) tournaments revealed web vulnerabilities, cryptographic weaknesses, and network protocols from an adversarial perspective.",
    catalyst: "Cyber Jawara, UC Santa Barbara iCTF, Kemendikdasmen Bug Bounty.",
    keyOutputs: [
      "CTF writeups across web, crypto, and forensics",
      "Kemendikdasmen responsible vulnerability disclosure",
      "Participation in national police/military cyber challenges",
    ],
    themeColor: "#A7ADBA",
    starMagnitude: 0.95,
  },
  {
    step: "06",
    stageName: "SOFTWARE ENGINEERING",
    temporalRange: "2025–2026 — Architecture & Synthesis",
    headline: "Bringing disparate disciplines into coherent, reliable software products.",
    narrative:
      "Robotics, AI, and security cannot stay isolated scripts. Structuring full-stack web applications, designing RESTful APIs, and implementing deterministic decision architectures (KAIROS) turned experimental code into structured software systems.",
    catalyst: "Designing KAIROS Decision Intelligence & modern interactive web systems.",
    keyOutputs: [
      "Deterministic simulation pipeline (KAIROS)",
      "TypeScript & Next.js production web architecture",
      "Clean modular codebases with strict typing",
    ],
    themeColor: "#8297B8",
    starMagnitude: 1.0,
  },
  {
    step: "07",
    stageName: "CREATIVE TECHNOLOGY",
    temporalRange: "2026 — Future Horizon",
    headline: "Blending culture, interactive media, and computing into meaningful artifacts.",
    narrative:
      "Technology is at its most potent when it transcends utility to evoke wonder. Bridging Javanese Wayang heritage with computer vision (Sabet Kelir) and designing peaceful exploratory worlds in Roblox Studio (Whispering Valley) marks the current horizon.",
    catalyst: "Sabet Kelir Wayang Vision & Whispering Valley cozy virtual world.",
    keyOutputs: [
      "Interactive digital wayang shadow puppet duel",
      "Sprawling social exploration world in Roblox Studio",
      "OPSI 2026 Research Proposal selection",
    ],
    themeColor: "#D8B878",
    starMagnitude: 1.15,
  },
];
