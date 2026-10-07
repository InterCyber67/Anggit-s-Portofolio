export interface SkillNode {
  id: string;
  name: string;
  categoryCode: string;
  tagline: string;
  coordinates: { x: number; y: number }; // Relative constellation coordinates (0-100)
  connections: string[]; // Connected node IDs
  facets: {
    area: string;
    items: string[];
    description: string;
  }[];
  activeTools: string[];
  philosophicalNote: string;
}

export const CONSTELLATION_NODES: SkillNode[] = [
  {
    id: "ai",
    name: "ARTIFICIAL INTELLIGENCE",
    categoryCode: "NODE-01 // AI",
    tagline: "Pattern discovery, visual recognition, and decision systems.",
    coordinates: { x: 50, y: 18 },
    connections: ["robotics", "computer-science", "data"],
    facets: [
      {
        area: "Machine Learning",
        items: ["Supervised Regression & Classification", "Ensemble Methods (XGBoost, LightGBM)", "Feature Engineering"],
        description: "Building reliable tabular and structured modeling pipelines with disciplined cross-validation.",
      },
      {
        area: "Computer Vision",
        items: ["YOLO Object Detection", "MediaPipe Landmark Tracking", "OpenCV Image Processing"],
        description: "Translating camera feeds into spatial telemetry for edge robotics and gesture recognition.",
      },
      {
        area: "Prediction & Decision Systems",
        items: ["Deterministic Decision Workflows", "Time-series Benchmarking", "Stochastic Simulation"],
        description: "Structuring reasoning loops that evaluate alternatives rather than hallucinating answers.",
      },
    ],
    activeTools: ["Python", "PyTorch", "OpenCV", "Scikit-Learn", "MediaPipe"],
    philosophicalNote: "Treat AI not as an oracle, but as an empirical computational pipeline that must prove its validity under noise.",
  },
  {
    id: "robotics",
    name: "ROBOTICS",
    categoryCode: "NODE-02 // ROBOTICS",
    tagline: "Bridging microcontrollers, motor drivers, and physical dynamics.",
    coordinates: { x: 22, y: 38 },
    connections: ["ai", "computer-science", "software"],
    facets: [
      {
        area: "Competition & Autonomous Systems",
        items: ["Line Maze Navigation", "Virtual Robot Soccer", "Rescue Robot Kinematics"],
        description: "Competitive robotics builds adhering to strict tournament dimensions, time constraints, and fail-safes.",
      },
      {
        area: "Embedded Hardware",
        items: ["ESP32 / Arduino / STM32", "Sensor Interfacing (Ultrasonic, IMU, IR)", "PWM Motor Control & PID Loops"],
        description: "Direct register manipulation, hardware interrupts, and real-time sensor feedback tuning.",
      },
      {
        area: "Vision-Guided Autonomy",
        items: ["Edge Camera Telemetry", "Marker & Color Tracking", "Obstacle Avoidance Vectoring"],
        description: "Connecting microcontrollers with onboard vision compute to navigate physical courses without human input.",
      },
    ],
    activeTools: ["C / C++", "ESP32", "Arduino IDE", "PlatformIO", "Circuitry & Soldering"],
    philosophicalNote: "Hardware is the ultimate sanity check for software. If your code is wrong in robotics, physical motors stall or collide.",
  },
  {
    id: "computer-science",
    name: "COMPUTER SCIENCE",
    categoryCode: "NODE-03 // CS",
    tagline: "Algorithms, discrete mathematics, and computational structures.",
    coordinates: { x: 78, y: 38 },
    connections: ["ai", "software", "cybersecurity"],
    facets: [
      {
        area: "Algorithmic Problem Solving",
        items: ["Graph Theory (BFS/DFS, Dijkstra)", "Dynamic Programming", "Combinatorics & Greedy Algorithms"],
        description: "Competitive programming training through OSN, Olympiad benchmarks, and discrete logic puzzles.",
      },
      {
        area: "Data Structures & Memory",
        items: ["Trees, Heaps, and Tries", "Spatial Partitioning", "Complexity Analysis (Big-O)"],
        description: "Choosing representations that balance space complexity with cache locality and retrieval latency.",
      },
      {
        area: "System Fundamentals",
        items: ["POSIX & Linux Tooling", "Process Management", "Networking Protocols (TCP/IP, UDP, HTTP)"],
        description: "Understanding operating system primitives and the physical machinery beneath abstractions.",
      },
    ],
    activeTools: ["C++", "Python", "Linux / Bash", "Git", "GDB"],
    philosophicalNote: "High-level tooling fades; enduring mastery rests on how efficiently you can manipulate state, memory, and complexity.",
  },
  {
    id: "cybersecurity",
    name: "CYBERSECURITY",
    categoryCode: "NODE-04 // CYBER",
    tagline: "Defensive reconnaissance, CTF exploitation, and security audit.",
    coordinates: { x: 82, y: 72 },
    connections: ["computer-science", "software"],
    facets: [
      {
        area: "Capture The Flag (CTF)",
        items: ["Web Security (OWASP Top 10)", "Cryptography & Ciphers", "Forensics & Packet Inspection"],
        description: "National and international CTF tournaments (Cyber Jawara, ICTF UC, Santa CTF, Polri/TNI challenges).",
      },
      {
        area: "Security Audit & Bug Bounty",
        items: ["Reconnaissance & Asset Discovery", "Vulnerability Reporting", "Permission Escalation Verification"],
        description: "Authorized disclosure programs including Kemendikdasmen bug bounty research.",
      },
      {
        area: "Network & System Security",
        items: ["Network Scanning (Nmap, Wireshark)", "Reverse Engineering Basics", "Linux Hardening"],
        description: "Dissecting communication channels and inspecting protocol payloads for anomalous patterns.",
      },
    ],
    activeTools: ["Wireshark", "Burp Suite", "Nmap", "Linux CLI", "Python Scapy"],
    philosophicalNote: "You cannot defend what you do not understand how to break. Security is the discipline of adversarial curiosity.",
  },
  {
    id: "data",
    name: "DATA SCIENCE",
    categoryCode: "NODE-05 // DATA",
    tagline: "Extracting signal, cleaning noise, and empirical analysis.",
    coordinates: { x: 34, y: 75 },
    connections: ["ai", "computer-science"],
    facets: [
      {
        area: "Exploratory Data Analysis",
        items: ["Distribution Diagnostics", "Multivariate Correlation", "Missing Value Imputation"],
        description: "Dissecting raw datasets systematically before introducing complex modeling machinery.",
      },
      {
        area: "High-School Data Competitions",
        items: ["Wharton High School Data Challenge", "Tabular Benchmark Optimizations", "Hypothesis Testing"],
        description: "Translating ambiguous domain questions into empirical, quantifiable answers backed by charts and metrics.",
      },
      {
        area: "Data Engineering Primitives",
        items: ["Pandas & Polars DataFrames", "Data Pipeline Validation", "CSV/JSON/Parquet Wrangling"],
        description: "Handling multi-megabyte datasets reliably with vectorized arithmetic and deterministic transforms.",
      },
    ],
    activeTools: ["Python", "Pandas", "NumPy", "Matplotlib / Seaborn", "Polars"],
    philosophicalNote: "Data without rigor is just noise with confident formatting.",
  },
  {
    id: "software",
    name: "SOFTWARE ENGINEERING",
    categoryCode: "NODE-06 // SWE",
    tagline: "Architectural discipline, resilient interfaces, and clean systems.",
    coordinates: { x: 50, y: 88 },
    connections: ["robotics", "computer-science", "creative-tech"],
    facets: [
      {
        area: "Frontend Architecture",
        items: ["TypeScript Strict Typing", "Next.js & React Component Systems", "Tailwind CSS & Canvas"],
        description: "Engineering responsive, performant user interfaces that honor typography, contrast, and layout.",
      },
      {
        area: "Backend & Systems",
        items: ["RESTful API Endpoints", "Microcontroller Telemetry Sockets", "State Machine Coordination"],
        description: "Writing maintainable backend logic that communicates cleanly with edge devices and client apps.",
      },
      {
        area: "Engineering Practices",
        items: ["Git Version Control", "Modular File Boundaries", "Self-Documenting Code"],
        description: "Building software that others (and your future self) can inspect, maintain, and expand.",
      },
    ],
    activeTools: ["TypeScript", "React", "Next.js", "Python", "Tailwind CSS"],
    philosophicalNote: "Good software is invisible. It does not demand applause; it simply executes with effortless reliability.",
  },
  {
    id: "creative-tech",
    name: "CREATIVE TECHNOLOGY",
    categoryCode: "NODE-07 // CREATE",
    tagline: "Merging cultural art, 3D worlds, and interactive sensory experiences.",
    coordinates: { x: 18, y: 68 },
    connections: ["software", "ai"],
    facets: [
      {
        area: "Virtual Worlds & Game Dev",
        items: ["Roblox Studio Architecture", "Luau Event-Driven Scripting", "Environmental Atmospheric Lighting"],
        description: "Crafting immersive spaces like 'Whispering Valley' emphasizing peaceful exploration and spatial audio.",
      },
      {
        area: "Heritage & Interactive Art",
        items: ["Sabet Kelir (Wayang AI)", "Digital Shadow Puppetry", "Computer Vision Puppet Shaders"],
        description: "Reinterpreting Javanese shadow puppetry as an interactive computational medium.",
      },
      {
        area: "Real-time Graphics & Interaction",
        items: ["HTML5 Canvas Procedural Rendering", "Mathematical Particle Physics", "Interactive Soundscapes"],
        description: "Synthesizing generative visual art that responds smoothly to human input and environmental timers.",
      },
    ],
    activeTools: ["Roblox Studio", "Luau", "HTML5 Canvas", "Blender Basics", "OpenCV"],
    philosophicalNote: "Code is not merely computational bureaucracy—it is also a lens for culture, atmosphere, and human wonder.",
  },
];
