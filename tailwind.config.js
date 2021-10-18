module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        colorOne: "#ffc872",
        colorTwo: "#ff9b73",
        colorThree: "#b692fe",
        colorFour: "#01d4ff",
        colorFive: "#e4ee90",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
