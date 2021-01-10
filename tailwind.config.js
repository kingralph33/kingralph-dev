module.exports = {
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
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
      transform: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}
