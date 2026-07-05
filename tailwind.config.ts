import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand (mandated)
        forest: {
          DEFAULT: "#2E7D32",
          dark: "#14251A", // deep off-grid night green, used for dark sections
          light: "#E8F0E6", // sage tint for card backgrounds
        },
        gold: {
          DEFAULT: "#FFC107",
          dim: "#B8860B",
        },
        amber: "#FF8A00", // secondary "sunlight" accent
        paper: "#FAF9F5", // warm off-white background
        ink: "#1E2420", // charcoal text
        danger: "#C0392B", // grid outage red, used only in the Grid vs Solar strip
      },
      fontFamily: {
        display: ["var(--font-sora)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      backgroundImage: {
        "sun-arc": "linear-gradient(180deg, #FFF6DC 0%, #FFE39B 28%, #FFC107 55%, #2E7D32 100%)",
        "dusk-fade": "linear-gradient(180deg, #14251A 0%, #1B3324 100%)",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(20, 37, 26, 0.25)",
        glow: "0 0 40px rgba(255, 193, 7, 0.35)",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(46,125,50,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(46,125,50,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(46,125,50,0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        sunTravel: {
          "0%": { transform: "translateX(-6%) translateY(0)" },
          "50%": { transform: "translateX(6%) translateY(-4%)" },
          "100%": { transform: "translateX(-6%) translateY(0)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.2s infinite",
        flicker: "flicker 1.6s infinite",
        sunTravel: "sunTravel 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
