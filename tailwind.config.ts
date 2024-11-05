// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "theme-light",
    "theme-dark",
    "bg-primary",
    "hover:bg-primary",
    "bg-secondary",
    "bg-card",
    "text-primary",
    "text-secondary",
    "text-heading",
    "bg-light-gray",
    "btn",
    "btn:hover",
    "bg-primary-gradient",
    "blinking-cursor",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        cardBackground: "var(--color-card-background)",
        text: "var(--color-text)",
        heading: "var(--color-heading)",
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        lightGray: "var(--color-light-gray)",
      },
      fontFamily: {
        sans: ["Saira", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
