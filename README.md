# STARDUST — Personal Universe of Anggit Maulana Abdi

> **"I build things somewhere between code, curiosity, and chaos."**

[![Live Demo](https://img.shields.io/badge/Live_Demo-stardust--portfolio--eight.vercel.app-d8b878?style=for-the-badge&logo=vercel&logoColor=white)](https://stardust-portfolio-eight.vercel.app)
[![Framework](https://img.shields.io/badge/Framework-Next.js_15_App_Router-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Custom_Stardust_Theme-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 🌌 Overview

**STARDUST** is a clean, cinematic digital portfolio and personal universe inspired by deep space, astronomy, observatories, star maps, and technical exploration.

It represents the evolving journey of **Anggit Maulana Abdi** (Student at MAN 2 Wonosobo, Central Java, Indonesia) across:
```
ROBOTICS ➔ COMPUTER SCIENCE ➔ AI / COMPUTER VISION ➔ DATA SCIENCE ➔ CYBERSECURITY ➔ SOFTWARE ARCHITECTURE ➔ CREATIVE TECHNOLOGY
```

### 🔭 Design Philosophy: "Minimalist Deep Space Editorial"
* **Space creates atmosphere, UI remains clean.** Negative space, fine hairline borders, and restrained typography over noisy neon gradients.
* **Palette:** Very dark deep space navy (`#05070D`, `#080B12`, `#0B1020`), soft ivory text (`#F5F2EA`), muted astronomical blue (`#8297B8`), and rare warm stardust gold (`#D8B878`) reserved strictly for achievements and selected highlights.
* **Truthful Architecture:** **Zero fabrication.** No fake corporate positions, no invented university credentials, and no fake skill percentages (e.g., no "Python 95%"). Every competition and milestone is verified.
* **Performance First:** 100% DOM and procedural HTML5 Canvas based. First Load JS is only **~133 kB**, statically pre-rendered with Next.js 15.

---

## ✨ Features & Stellar Sectors

| Sector | Description |
| :--- | :--- |
| **Cinematic Loader** | Fast observatory initialization (~1.8s) with real-time telemetry steps and an instant skip escape hatch. |
| **Fixed Nav & Universe Mode** | Fixed minimal navigation with status indicator (`● EXPLORING`) and a signature full-screen interactive constellation warp map. |
| **Hero Celestial System** | Abstract 5-ring orbital system (*AI*, *Robotics*, *Code*, *Cyber*, *Data*) with 3D cursor tilt parallax and hover telemetry cards. |
| **About the Observer** | Editorial 2-column layout showcasing origin (*Wonosobo, ID*), current environment (*MAN 2 Wonosobo*), and core technical horizons. |
| **My Constellation** | Interactive star network connecting 7 technical disciplines. Clicking nodes reveals verified technical facets, active toolchains, and engineering invariants. |
| **The Journey** | Horizontal evolution timeline spanning 2024–2026, documenting catalysts, narratives, and concrete artifacts. |
| **Signal Detected** | Verified podium finishes: IERCOO AI (1st Place), IISRO UIN (2nd & 3rd Place), DTE UNSOED 2026 (2nd Place), Technoday UNNES (3rd Place), Krenova Bappeda WSB (3rd Place), OSMA (Finalist), and OPSI 2026 (Proposal Selected). |
| **Mission Log** | Full archive of **47 competitions** with dynamic statistics, category filters (*AI*, *Robotics*, *Cybersecurity*, *CS*, *Research*), live search, and stellar tier indicators (Gold, Silver, Bronze, White, Dim). |
| **Project Galaxy** | Planetary cards with in-depth case study modals: **KAIROS** (9-stage deterministic decision pipeline), **SABET KELIR** (Wayang AI & CV), **WHISPERING VALLEY** (Cozy Roblox World), **SMART FARMING AI** (ESP32 Edge CV), and **AIRENA** (ML prediction). |
| **The Lab** | Quiet research notebook documenting 8 empirical benchmarks and hardware/software experiments. |
| **Current Mission** | 5 active strategic directives for engineering growth. |
| **Unknown Space** | Minimalist section featuring cursor-reactive physics on unmapped coordinates (`?`). |
| **Establish Transmission** | Clean contact form with transmission packet preparation, one-click clipboard copy, and direct email dispatch. |

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router, Static Generation)
* **Language:** TypeScript 5.7 (Strict Typing)
* **Styling:** Tailwind CSS 3.4 + Custom Astronomical Tokens
* **Icons:** Lucide React
* **Graphics:** Procedural HTML5 Canvas (Layered Parallax Stars & Nebula)
* **Fonts:** Space Grotesk (Headings), Inter (Body), IBM Plex Mono (Telemetry & Code)
* **Deployment:** Vercel Edge Network

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css           # Deep space tokens, custom scrollbars, grain overlays
│   ├── icon.svg              # Astronomical SVG favicon
│   ├── layout.tsx            # Root layout, fonts, and Open Graph SEO metadata
│   ├── page.tsx              # Main orchestrator page
│   ├── robots.ts             # Search engine crawler directives
│   └── sitemap.ts            # Dynamic XML sitemap generator
├── components/
│   ├── About/                # Observer bio and philosophy
│   ├── Achievements/         # Signal Detected featured podium finishes
│   ├── Constellation/        # Interactive 7-node knowledge graph
│   ├── Contact/              # Transmission channel & direct frequency
│   ├── CurrentMission/       # 5 numbered strategic directives
│   ├── CustomCursor/         # Subtle desktop cursor with hover physics
│   ├── Footer/               # Minimalist footer & closing philosophy
│   ├── Hero/                 # Hero typography & HeroCelestialSystem
│   ├── Journey/              # Horizontal evolution timeline (2024-2026)
│   ├── Lab/                  # Research notebook sketches
│   ├── LoadingScreen/        # Observatory initialization sequence
│   ├── MissionLog/           # 47-competition database & filter engine
│   ├── Navigation/           # Fixed navbar & status badge
│   ├── ProjectGalaxy/        # System cards & ProjectModal case studies
│   ├── StarField/            # Procedural multi-layer canvas starfield
│   ├── UniverseModal/        # Full-screen constellation warp overlay
│   └── UnknownSpace/         # Minimalist cursor-reactive section
├── data/
│   ├── competitions.ts       # 47 competition records & dynamic stat counters
│   ├── experiments.ts        # The Lab research notebook entries
│   ├── journey.ts            # Evolution stages & catalysts
│   ├── profile.ts            # Bio, location, social links, contact email
│   ├── projects.ts           # Case studies & technical architectures
│   └── skills.ts             # Constellation nodes & active toolchains
├── lib/
│   └── utils.ts              # Classname merging utility (clsx + tailwind-merge)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json               # Vercel deployment configuration
```

---

## 🚀 Getting Started

### 1. Clone or Open the Repository
```bash
git clone https://github.com/AnggitMaulanaAbdi/stardust.git
cd stardust
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 4. Build for Production
```bash
npm run build
npm start
```

### 5. Deploy to Vercel
```bash
npm run deploy
# atau langsung ke production
npx vercel --prod
```

---

## ⚙️ Customizing Content

All data is decoupled from the UI inside the `/data` directory:
* **Edit Profile & Socials:** [`data/profile.ts`](data/profile.ts)
* **Update Competition Records:** [`data/competitions.ts`](data/competitions.ts)
* **Add Projects:** [`data/projects.ts`](data/projects.ts)
* **Add Lab Experiments:** [`data/experiments.ts`](data/experiments.ts)
* **Modify Constellation Facets:** [`data/skills.ts`](data/skills.ts)

---

## 📜 Invariant Truthfulness Guarantee

This portfolio strictly presents verified facts:
* Competitions with `-` denote participation/attempts without exaggeration.
* Projects marked `EXPERIMENTAL` or `ACTIVE PROTOTYPE` reflect actual bench testing.
* No fabricated affiliations, degrees, or corporate titles.

---

## 🛰️ Transmission

* **Observer:** Anggit Maulana Abdi
* **Origin:** Wonosobo, Central Java, Indonesia
* **Email:** `mozarelaenak1@gmail.com`
* **Live Deployment:** [https://stardust-portfolio-eight.vercel.app](https://stardust-portfolio-eight.vercel.app)

*“BUILDING IN PUBLIC. EXPLORING IN PRIVATE.”*
