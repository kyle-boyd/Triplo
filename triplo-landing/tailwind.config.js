/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#6B7280',
      },
      fontFamily: {
        'sans': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

