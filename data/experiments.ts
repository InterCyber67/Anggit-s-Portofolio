export interface LabExperiment {
  id: string;
  notebookCode: string;
  title: string;
  domain: string;
  dateOrEra: string;
  status: "ARCHIVED" | "EXPLORING" | "PROTOTYPE" | "BENCHMARKED";
  observation: string;
  technicalArtifact: string;
  keyTakeaway: string;
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "exp-01",
    notebookCode: "EXP-082",
    title: "ESP32 Low-Power Interrupt Loop",
    domain: "Embedded Robotics",
    dateOrEra: "Q3 2024",
    status: "ARCHIVED",
    observation:
      "Deep sleep current draw dropped from 65mA to 14μA using external ULP coprocessor wakeups on GPIO 33 rather than continuous polling.",
    technicalArtifact: "ESP-IDF / FreeRTOS sleep timer & analog comparator wake",
    keyTakeaway: "Battery longevity in remote sensors is determined by sleep hygiene, not battery size.",
  },
  {
    id: "exp-02",
    notebookCode: "EXP-104",
    title: "YOLOv8 Nano Quantization on ARM Cortex",
    domain: "Computer Vision",
    dateOrEra: "Q4 2024",
    status: "BENCHMARKED",
    observation:
      "INT8 post-training quantization reduced model weight footprint by 72% with only a 1.4% mAP50 degradation on custom pest leaf dataset.",
    technicalArtifact: "PyTorch -> ONNX -> TFLite INT8 Quantization",
    keyTakeaway: "Edge models don't need floating-point precision to distinguish pests from healthy leaf veins.",
  },
  {
    id: "exp-03",
    notebookCode: "EXP-119",
    title: "Luau Spatial Partitioning Grid",
    domain: "Roblox Systems",
    dateOrEra: "Q1 2025",
    status: "PROTOTYPE",
    observation:
      "Chunk-based spatial hash grid reduced proximity queries for 400 interactive fireflies from O(N²) to O(1) cell lookup, recovering 16 FPS on mobile.",
    technicalArtifact: "Spatial Hash Table implemented in Roblox Luau",
    keyTakeaway: "Game engine physics engines get bogged down by unindexed spatial raycasts. Build your own grid.",
  },
  {
    id: "exp-04",
    notebookCode: "EXP-137",
    title: "CTF Heap Chunk Alignment Probe",
    domain: "Cybersecurity",
    dateOrEra: "Q2 2025",
    status: "ARCHIVED",
    observation:
      "Analyzing glibc 2.35 tcache double-free mitigation behaviors across custom x86_64 binary exploitation challenges.",
    technicalArtifact: "GDB-pwndbg memory dump script & exploit POC",
    keyTakeaway: "Modern memory mitigations turn simple bugs into complex multi-stage alignment puzzles.",
  },
  {
    id: "exp-05",
    notebookCode: "EXP-152",
    title: "Synthetic Shadow Shading on Canvas",
    domain: "Creative Technology",
    dateOrEra: "Q3 2025",
    status: "EXPLORING",
    observation:
      "Simulated flickering oil lamp (blencong) lighting for Sabet Kelir usingPerlin noise modulation across radial gradient alpha stops.",
    technicalArtifact: "HTML5 Canvas 2D multi-layer radial light attenuator",
    keyTakeaway: "Slight imperfect luminance jitter creates visceral organic warmth that mathematical static lights cannot fake.",
  },
  {
    id: "exp-06",
    notebookCode: "EXP-168",
    title: "LightGBM Adversarial Validation Splitter",
    domain: "Data Science",
    dateOrEra: "Q4 2025",
    status: "BENCHMARKED",
    observation:
      "Trained an auxiliary binary classifier to differentiate train vs. test distributions; high ROC-AUC (0.89) revealed temporal covariate shift in competition dataset.",
    technicalArtifact: "Python script with scikit-learn & LightGBM",
    keyTakeaway: "Never trust cross-validation if your training distribution doesn't match the evaluation reality.",
  },
  {
    id: "exp-07",
    notebookCode: "EXP-181",
    title: "Custom Headless Linux Audio Daemon",
    domain: "Linux / Systems",
    dateOrEra: "Q1 2026",
    status: "ARCHIVED",
    observation:
      "Stripped down PipeWire and ALSA buffer sizes to achieve sub-4ms roundtrip audio latency on an old ThinkPad workstation.",
    technicalArtifact: "Systemd service + customized ALSA configuration",
    keyTakeaway: "Bloat in the OS stack hides behind fast processors until you demand real-time guarantees.",
  },
  {
    id: "exp-08",
    notebookCode: "EXP-195",
    title: "Deterministic State Machine for KAIROS",
    domain: "Software Architecture",
    dateOrEra: "Q1 2026",
    status: "EXPLORING",
    observation:
      "Formalizing multi-agent decisions into strict state transitions (Approval -> Dispatch -> Verification) prevents circular execution loops.",
    technicalArtifact: "Typed finite state machine in TypeScript with rollback hooks",
    keyTakeaway: "Reliability is not an accident of good prompts; it is an invariant enforced by state machines.",
  },
];
