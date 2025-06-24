/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
      tablet: "736px",
      desktop: "1200px",
    },
    colors: {
      error: "#E80F3B",
      ui: "#3E29E3",
      "button-gradient": "#DD80ED", //переименовать
    },
  },
  plugins: [],
};
