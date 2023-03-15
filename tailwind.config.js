/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: {
      fontFamily:{
        'bodyFont':[ 'Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}