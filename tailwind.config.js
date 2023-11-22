/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // color
      colors: {
        ButtonBorder: '#FFD687',
        priceColor: '#C4C4C4',
        brand1:'#FAE3B6',
        brand2:'#CFA485',
        
      }, 
      // color 

      // font 

      fontFamily: {
        Frank: ['Frank Ruhl Libre', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        
      },

      // font 

      // shadow 
      boxShadow: {
        buttonShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      // shadow 

      // container 
      maxWidth: {
        Container: '1320px',
      },
      // container 

    },
  },
  plugins: [],
}

