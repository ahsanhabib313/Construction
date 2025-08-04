/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'primary-colors' : '#fe538d',
        'secondary-brand': '#FFB703',
        'text-color' : '#000'
      },
       fontFamily: {
        // 'your-custom-name' will be the utility class (e.g., font-your-custom-name)
        'rubik': ['Rubik', 'sans-serif'], // 'YourFontName' must match the font-family used in @import/@font-face
      },
      fontSize:{
        
        'h1':'4.5em',
        'h2':'3em',
        'h3':'2em',
        'p':'1.2em',
       
      }
    },
  },
  plugins: [],
}

