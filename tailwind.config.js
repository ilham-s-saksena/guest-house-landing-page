/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-typography/**/*.js",
    "./dist/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'oklch(0.704 0.14 182.503)',
          50: 'oklch(0.984 0.014 180.72)',
          100: 'oklch(0.953 0.051 180.801)',
          200: 'oklch(0.91 0.096 180.426)',
          300: 'oklch(0.855 0.138 181.071)',
          400: 'oklch(0.777 0.152 181.912)',
          500: 'oklch(0.704 0.14 182.503)',
          600: 'oklch(0.6 0.118 184.704)',
          700: 'oklch(0.511 0.096 186.391)',
          800: 'oklch(0.437 0.078 188.216)',
          900: 'oklch(0.386 0.063 188.416)',
          950: 'oklch(0.277 0.046 192.524)',
        },
      }      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
    require('flowbite/plugin')({
      wysiwyg: true,
  }),
  ],
}

