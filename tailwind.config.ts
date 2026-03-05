import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          card: "#12121a",
          elevated: "#1a1a24",
        },
        accent: {
          cyan: "#22d3ee",
          green: "#4ade80",
          purple: "#a78bfa",
          orange: "#fb923c",
          pink: "#f472b6",
        },
        code: {
          comment: "#6b7280",
          keyword: "#22d3ee",
          string: "#4ade80",
          number: "#fb923c",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168, 85, 247, 0.08), transparent)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
