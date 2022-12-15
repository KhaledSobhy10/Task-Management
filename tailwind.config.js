/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        mainGrid: "repeat(auto-fill, minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
};
