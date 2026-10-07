export interface Project {
  id: string;
  name: string;
  codename: string;
  category: string;
  badge: string;
  status: "EXPERIMENTAL" | "ACTIVE PROTOTYPE" | "CONCEPT & MODEL" | "PRODUCTION WORLD";
  shortDescription: string;
  problem: string;
  approach: string;
  technologies: string[];
  currentState: string;
  nextStep: string;
  visualTheme: {
    accentColor: string;
    orbitRadius: number; // for hero / constellation visual mapping
    starSize: number;
    glyph: string;
  };
  architectureSteps?: string[];
  keyHighlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "kairos",
    name: "KAIROS",
    codename: "SYS-01 // KAIROS",
    category: "DECISION INTELLIGENCE",
    badge: "DECISION SYSTEM",
    status: "ACTIVE PROTOTYPE",
    shortDescription:
      "A structured decision intelligence architecture designed to evaluate multi-variable scenarios through sequential simulation and verification, rather than conversational guessing.",
    problem:
      "Standard LLM interfaces generate unstructured prose and conversational assumptions rather than verifiable decision pathways under uncertainty.",
    approach:
      "Engineered around an explicit deterministic pipeline: Objective formulation -> Information intake -> Multi-factor Analysis -> Strategy synthesis -> Monte Carlo Simulation -> Decision scoring -> Explicit Approval gate -> Execution dispatch -> Post-run Verification.",
    technologies: [
      "Python",
      "Decision Trees & Graphs",
      "Simulation Engines",
      "FastAPI",
      "TypeScript",
    ],
    currentState:
      "Pipeline architecture defined and modular simulation stages implemented for constrained decision trees. Initial CLI testbed functional.",
    nextStep:
      "Integrate stochastic environmental perturbation models and build a low-latency visualization inspector.",
    visualTheme: {
      accentColor: "#D8B878",
      orbitRadius: 160,
      starSize: 7,
      glyph: "01",
    },
    architectureSteps: [
      "Objective",
      "Information",
      "Analysis",
      "Strategies",
      "Simulation",
      "Decision",
      "Approval",
      "Execution",
      "Verification",
    ],
    keyHighlights: [
      "Explicit 9-stage deterministic verification pipeline",
      "Multi-candidate strategy simulation under resource constraints",
      "Zero reliance on black-box unverified text generation",
    ],
  },
  {
    id: "sabet-kelir",
    name: "SABET KELIR",
    codename: "SYS-02 // SABET KELIR",
    category: "AI × WAYANG × COMPUTER VISION",
    badge: "CULTURAL VISION",
    status: "ACTIVE PROTOTYPE",
    shortDescription:
      "An interactive virtual wayang shadow-puppet duel concept bridging Javanese cultural heritage with real-time pose estimation and movement tracking via standard webcams.",
    problem:
      "Traditional shadow puppetry (Wayang Kulit) faces dwindling engagement among digital-native youth, while physical puppets lack accessible digital interfaces for interactive simulation.",
    approach:
      "Extract 2D skeletal landmarks from player webcam feeds using lightweight computer vision models, mapping wrist and arm gestures directly to inverse kinematics puppetry controls and silhouette shadow shaders on a virtual kelir (cloth screen).",
    technologies: [
      "Computer Vision",
      "MediaPipe / OpenCV",
      "Python",
      "WebGL / Canvas",
      "Inverse Kinematics",
    ],
    currentState:
      "Single-player motion mapping pipeline tracking dalang hand gestures to Wayang character joint rotations on screen.",
    nextStep:
      "Refine dual-player collision detection for puppet duels and optimize frame rate on lower-spec hardware.",
    visualTheme: {
      accentColor: "#8297B8",
      orbitRadius: 220,
      starSize: 6,
      glyph: "02",
    },
    keyHighlights: [
      "Real-time webcam-driven skeletal puppet manipulation",
      "Algorithmic shadow attenuation resembling authentic oil-lamp (blencong) lighting",
      "Preservation of traditional character motion archetypes in software",
    ],
  },
  {
    id: "whispering-valley",
    name: "WHISPERING VALLEY",
    codename: "SYS-03 // WHISPERING VALLEY",
    category: "COZY SOCIAL WORLD",
    badge: "VIRTUAL ENVIRONMENT",
    status: "PRODUCTION WORLD",
    shortDescription:
      "A large-scale cozy Roblox social exploration world emphasizing non-violent exploration, atmospheric environmental storytelling, and ambient soundscapes.",
    problem:
      "The dominant multiplayer game ecosystem prioritizes aggressive monetization, high-stress combat, and hyper-stimulating loops, leaving few calm, beautifully composed spaces for contemplation.",
    approach:
      "Constructed a sprawling valley landscape using custom low-poly terrain meshes, dynamic lighting presets, atmospheric fog, peaceful exploration routes, ambient discovery mini-games, and cooperative mechanics.",
    technologies: [
      "Roblox Studio",
      "Luau Scripting",
      "3D Environmental Design",
      "Custom Sound Design",
      "Lighting & Particle Systems",
    ],
    currentState:
      "Fully walkable landscape with interactive gathering spots, environmental secrets, and ambient audio systems.",
    nextStep:
      "Expand seasonal micro-events and optimize client memory usage on mobile devices.",
    visualTheme: {
      accentColor: "#9BB4A2",
      orbitRadius: 280,
      starSize: 6,
      glyph: "03",
    },
    keyHighlights: [
      "Vast organic valley landscape with handcrafted vistas",
      "Cooperative non-competitive gathering and exploration mechanics",
      "Atmospheric day-night cycle with custom particle embers",
    ],
  },
  {
    id: "smart-farming-ai",
    name: "SMART FARMING AI",
    codename: "SYS-04 // SMART FARMING",
    category: "AI × COMPUTER VISION × ESP32",
    badge: "AGRITECH IOT",
    status: "CONCEPT & MODEL",
    shortDescription:
      "An edge computer vision and IoT prototype designed for automated agricultural pest detection and micro-targeted environmental response.",
    problem:
      "Rural farming regions suffer severe crop degradation from undetected pest outbreaks, while widespread chemical spraying degrades soil and costs farmers disproportionate capital.",
    approach:
      "Deploy an ESP32-CAM module interfaced with an edge-quantized vision classification model to spot early leaf blight and insect infestations, transmitting alerts and triggering localized micro-actuators.",
    technologies: [
      "ESP32 Microcontroller",
      "Edge Machine Learning",
      "TensorFlow Lite / Edge Impulse",
      "Embedded C++",
      "MQTT Telemetry",
    ],
    currentState:
      "Trained classification model on targeted crop leaf datasets with baseline inference verification on microcontroller dev board.",
    nextStep:
      "Field-test solar power management circuitry and weatherproof enclosure deployment.",
    visualTheme: {
      accentColor: "#C6A16B",
      orbitRadius: 340,
      starSize: 5,
      glyph: "04",
    },
    keyHighlights: [
      "Edge-quantized inference running locally without constant internet connectivity",
      "Low-power sleep cycles paired with motion/lux threshold triggers",
      "Designed specifically for accessible hardware constraints",
    ],
  },
  {
    id: "airena",
    name: "AIRENA",
    codename: "SYS-05 // AIRENA",
    category: "MACHINE LEARNING / PREDICTION",
    badge: "COMPETITIVE ML",
    status: "EXPERIMENTAL",
    shortDescription:
      "A competitive predictive modeling and feature engineering workspace engineered for high-dimensional tabular and time-series benchmark challenges.",
    problem:
      "Competitive machine learning challenges demand rapid feature experimentation, cross-validation discipline, and leak-free preprocessing pipelines under tight deadlines.",
    approach:
      "Constructed a modular experiment tracker and automated feature generator pairing gradient-boosted ensembles (LightGBM, XGBoost, CatBoost) with custom loss functions and rigorous stratified group K-fold validation.",
    technologies: [
      "Python",
      "LightGBM & XGBoost",
      "Scikit-learn",
      "Pandas & Polars",
      "Optuna Hyperparameter Tuning",
    ],
    currentState:
      "Benchmark scripts and automated ensemble blend templates validated across regional AI hackathons (AIrena Nyoo).",
    nextStep:
      "Integrate automated adversarial validation routines to detect train/test distribution shifts automatically.",
    visualTheme: {
      accentColor: "#758BA8",
      orbitRadius: 400,
      starSize: 5,
      glyph: "05",
    },
    keyHighlights: [
      "Rigorous cross-validation pipeline preventing data leakage",
      "Ensemble stacking and weighted rank averaging engine",
      "Lightweight, reproducible pipeline built for rapid contest cycles",
    ],
  },
];
