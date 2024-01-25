/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "1024px",
      dekstop: "1280px",
    },
    extend: {
      colors: {
        primary: "#111315", //black
        secondary: "#1B1D1F", //gray
        third: "#6F757C", //light gray
        fourth: "#BEE3CC", //price
      },
      fontFamily: {
        "DM-sans": ["dm-sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
