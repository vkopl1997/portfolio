/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature: ["Great Vibes"],
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
