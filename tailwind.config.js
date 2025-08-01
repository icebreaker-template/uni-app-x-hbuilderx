const { r } = require('./shared')
const { addIconSelectors } = require("@iconify/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    r('./pages/**/*.{uts,uvue}'),
    r('./components/**/*.{uts,uvue}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors(['svg-spinners', 'mdi']),
  ],
  corePlugins: {
    preflight: false,
  },
}
