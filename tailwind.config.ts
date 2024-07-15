import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '10px 10px 20px #babecc, -10px -10px 20px #ffffff',
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        gray: "#f6f6f6",
        white: "#ffffff",
        textgray: "#b0b0b0",
      },
    },
  },
  plugins: [],
};

export default config;
