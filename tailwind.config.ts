// tailwind.config.js
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        "space-mono": ["Space Mono", "monospace"],
        italiana: ["Italiana", "serif"], // Correcting the font family to serif
      },
      fontSize: {
        "h2-xl": "130px",
        "h2-lg": "100px",
        responsive: "calc(1.325rem + .9vw)",
      },
      lineHeight: {
        "h2-xl": "130px",
        "h2-lg": "100px",
      },
      screens: {
        "1500px": { max: "1500px" },
        "1200px": { min: "1200px" },
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out",
        slideOut: "slideOut 1s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
