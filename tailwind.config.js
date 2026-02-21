/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        "primary-dark": "#121212",
        "secondary-dark": "#1a1a1a",
        "ai-cyan": "#00f0ff",
        "ai-violet": "#8a2be2",
        "ai-blue": "#0070f3",
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 10px rgba(138, 43, 226, 0.4), 0 0 20px rgba(138, 43, 226, 0.2)" },
          "100%": { textShadow: "0 0 20px rgba(138, 43, 226, 0.8), 0 0 30px rgba(138, 43, 226, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
};
