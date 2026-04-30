/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d1117",
        surface: "#161b22",
        border: "#21262d",
        teal: "#14b8a6",
        cyan: "#06b6d4",
        green: "#10b981",
        amber: "#f59e0b",
        orange: "#f97316",
        text: "#e6edf3",
        muted: "#8b949e",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        teal: "0 0 20px rgba(20, 184, 166, 0.3)",
        "teal-lg": "0 0 40px rgba(20, 184, 166, 0.4)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1s step-end infinite",
      },
      backgroundImage: {
        "dot-grid": `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%2314b8a6' opacity='0.04'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
};
