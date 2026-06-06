import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101114",
        paper: "#f7f5ef",
        moss: "#577061",
        nickel: "#b7b5ad",
        coral: "#dd6b5f"
      },
      boxShadow: {
        panel: "0 18px 60px rgba(16, 17, 20, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
