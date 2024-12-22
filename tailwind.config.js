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
          DEFAULT: 'rgb(217 70 239 / var(--tw-bg-opacity, 1))',
          50 : 'rgb(253 244 255 / var(--tw-bg-opacity, 1))',
          100: 'rgb(250 232 255 / var(--tw-bg-opacity, 1))',
          200: 'rgb(245 208 254 / var(--tw-bg-opacity, 1))', 
          300: 'rgb(240 171 252 / var(--tw-bg-opacity, 1))', 
          400: 'rgb(232 121 249 / var(--tw-bg-opacity, 1))', 
          500: 'rgb(217 70 239 / var(--tw-bg-opacity, 1))',
          600: 'rgb(192 38 211 / var(--tw-bg-opacity, 1))',
          700: 'rgb(162 28 175 / var(--tw-bg-opacity, 1))',
          800: 'rgb(134 25 143 / var(--tw-bg-opacity, 1))',
          900: 'rgb(112 26 117 / var(--tw-bg-opacity, 1))',
          950: 'rgb(74 4 78 / var(--tw-bg-opacity, 1))',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

