const { r } = require('./shared')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    r('./pages/**/*.{uts,uvue}'),
    r('./components/**/*.{uts,uvue}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [

  ],
  corePlugins: {
    preflight: false,
  },
}
