/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        
      },
      backgroundImage: {
        'msc1': 'url("/music-2.jpg")',
        'msc2': 'url("/music-2.jpg")',
        'msc3': 'url("/music-3.jpg")'
      },
      colors:{
        customWhite:"#F0F0F0",
        blackk:"rgb(26,26,33)",
        backWhite:"rgb(247,247,247)",

      },
      screens: {

        'lg': {'max': '1024px', },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'mmd': { 'max': '890px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'mmd2': { 'max': '790px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }


        'sm': { 'max': '640px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'xs': { 'max': '480px'},
        
  
     
      },
    },
  },
  plugins: [],
}
