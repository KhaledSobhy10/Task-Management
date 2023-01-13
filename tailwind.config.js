/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      },
      transitionProperty: {
        width: "width",
        margin: "margin",
      },
      gridTemplateColumns: {
        mainGrid: "repeat(auto-fill, minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
};
