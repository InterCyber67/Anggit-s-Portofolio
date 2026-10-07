import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#05070D",
          900: "#080B12",
          850: "#0B1020",
          800: "#0F162B",
          700: "#172038",
        },
        stardust: {
          gold: "#D8B878",
          "gold-dim": "#A88E56",
          "gold-subtle": "rgba(216, 184, 120, 0.08)",
          "gold-border": "rgba(216, 184, 120, 0.25)",
        },
        astro: {
          blue: "#8297B8",
          "blue-dim": "#576985",
          "blue-subtle": "rgba(130, 151, 184, 0.08)",
          "blue-border": "rgba(130, 151, 184, 0.18)",
        },
        text: {
          primary: "#F5F2EA",
          secondary: "#A7ADBA",
          muted: "#697181",
        },
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'IBM Plex Mono'", "Consolas", "monospace"],
      },
      letterSpacing: {
        astronomic: "0.25em",
        cosmic: "0.4em",
      },
      animation: {
        "orbit-slow": "orbit 60s linear infinite",
        "orbit-reverse": "orbit-reverse 80s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "star-twinkle": "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
