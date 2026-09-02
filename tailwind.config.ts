import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E141B",
        graphite: "#33414E",
        steel: "#5C6B79",
        line: "#DFE4EA",
        mist: "#F1F4F7",
        paper: "#FFFFFF",
        navy: {
          DEFAULT: "#103A66",
          deep: "#0A2340",
          soft: "#1B5490",
        },
        signal: "#D2172E",
        azure: "#2E9BD6",
        gold: "#E8B22C",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "76rem",
      },
      boxShadow: {
        panel: "0 1px 2px rgba(14,20,27,.05), 0 12px 32px -18px rgba(14,20,27,.35)",
        lift: "0 2px 4px rgba(14,20,27,.06), 0 28px 60px -28px rgba(14,20,27,.45)",
      },
      keyframes: {
        "stripe-slide": {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
