/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("shared/tailwind.config.js")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)"],
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        background: {
          DEFAULT: "#F1F1F1",
          1: "#F6F6F6",
          2: "#FAFAFA",
        },
        foreground: {
          DEFAULT: "#C2C3C8",
          1: "#8E8F9C",
          2: "#7D7D7D",
        },
      },
      screens: {
        xs: "375",
        sm: "500px",
        md: "800px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
    },
  },
  content: ["./app/**/*.{html,tsx}", "./components/**/*.{ts,tsx}"],
};
