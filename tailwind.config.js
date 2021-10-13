const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        emerald: colors.emerald,
        cyan: colors.cyan,
        blackT: '#1f2937'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
