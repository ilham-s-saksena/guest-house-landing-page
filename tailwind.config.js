/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./node_modules/flowbite/**/*.js",
    "./dist/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(101 67 33 / var(--tw-bg-opacity, 1))',
          50: 'rgb(245 237 224 / var(--tw-bg-opacity, 1))',
          100: 'rgb(235 222 204 / var(--tw-bg-opacity, 1))',
          200: 'rgb(215 190 166 / var(--tw-bg-opacity, 1))',
          300: 'rgb(195 160 133 / var(--tw-bg-opacity, 1))',
          400: 'rgb(155 110 79 / var(--tw-bg-opacity, 1))',
          500: 'rgb(101 67 33 / var(--tw-bg-opacity, 1))',
          600: 'rgb(85 56 28 / var(--tw-bg-opacity, 1))',
          700: 'rgb(70 47 24 / var(--tw-bg-opacity, 1))',
          800: 'rgb(55 37 19 / var(--tw-bg-opacity, 1))',
          900: 'rgb(40 27 14 / var(--tw-bg-opacity, 1))',
          950: 'rgb(25 17 9 / var(--tw-bg-opacity, 1))',
        },
      }      
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

