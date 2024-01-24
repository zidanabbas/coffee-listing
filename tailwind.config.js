/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      dekstop: "1280px",
      tablet: "1024px",
      mobile: "390px",
    },
    extend: {
      colors: {
        primary: "#111315",
        secondary: "#1B1D1F",
        third: "#6F757C",
      },
    },
  },
  plugins: [],
};
