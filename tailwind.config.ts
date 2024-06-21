import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        "space-mono": ["Space Mono", "monospace"],
        italiana: ["Italiana", "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          // "90%": { transform: "translateY(-5%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          // "20%": { transform: "translateY(-10%)", opacity: "1" },
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
