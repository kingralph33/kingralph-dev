module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Cantarell', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-blue': '#141e30' 
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
