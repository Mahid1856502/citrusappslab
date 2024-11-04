// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping CSS variables to Tailwind color names
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
        sans: ["Saira", "sans-serif"], // Set Saira as the default sans font
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
