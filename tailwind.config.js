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
        "accent-from": "#6366f1",
        "accent-to": "#8b5cf6",
        "ai-cyan": "#00f0ff",
        "ai-violet": "#8b5cf6",
        "ai-blue": "#6366f1",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "mesh-1": "mesh-1 18s ease-in-out infinite",
        "mesh-2": "mesh-2 22s ease-in-out infinite",
        "mesh-3": "mesh-3 20s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 10px rgba(99, 102, 241, 0.4), 0 0 20px rgba(139, 92, 246, 0.2)" },
          "100%": { textShadow: "0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(139, 92, 246, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "mesh-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, 30px) scale(1.08)" },
        },
        "mesh-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, 40px) scale(1.05)" },
        },
        "mesh-3": {
          "0%, 100%": { transform: "translate(-50%, 0) scale(1)" },
          "50%": { transform: "translate(-50%, -20px) scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
