module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {

    fontFamily: {
      'body': ['Open Sans', 'sans-serif']

    },
    width: {
      '1/7': '30%',
      '3/9': '90%',
      '3/8': '6rem'
      
    }

     
   },
   variants: {
    extend: {
      // ...
     fill: ['hover', 'focus'],
    }
  },
   plugins: [],
 }