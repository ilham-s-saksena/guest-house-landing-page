/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./node_modules/flowbite/**/*.js",
    "./dist/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

