/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
// https://davidpiesse.github.io/tailwind-md-colours/

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        flip: "-1",
      },
      fontFamily: {
        sans: ["var(--font-funnel-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
