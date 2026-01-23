/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mazzo-red': '#D32F2F',
        'mazzo-cream': '#F9F5F0',
        'mazzo-green': '#0D2922',
        'mazzo-lime': '#03933e',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        script: ['"Yellowtail"', 'cursive'],
      }
    },
  },
  plugins: [],
}