/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "transparent",
        card: "rgba(255, 255, 255, 0.08)",
        line: "rgba(255, 255, 255, 0.3)",
        chrome: {
          start: "#000000",
          end: "#000000",
        },
      },
      fontFamily: {
        sans: ["Kanit", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "Times New Roman", "serif"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(90deg, #A855F7 0%, #D946A8 50%, #F97316 100%)",
      },
    },
  },
  plugins: [],
};
