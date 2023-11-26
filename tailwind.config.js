/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
// https://davidpiesse.github.io/tailwind-md-colours/

const colors = {
  stefano: {
    50: "#f4faff",  // 207°, 100%, 98%
    100: "#e2f0ff", // 211°, 100%, 94%
    200: "#c4defe", // 213°, 97%, 88%
    300: "#95bbee", // 214°, 72%, 76%
    400: "#5e95e4", // 215°, 71%, 63%
    500: "#2173e6", // 215°, 80%, 52%
    600: "#1358cc", // 218°, 83%, 44%
    700: "#1242a2", // 220°, 80%, 35%
    800: "#1a2e6c", // 225°, 61%, 26%
    900: "#161d38", // 228°, 44%, 15%
    950: "#0e1224", // 229°, 44%, 10%
  },
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      scale: {
        flip: "-1",
      },
      fontFamily: {
        sans: ["var(--font-lato)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
