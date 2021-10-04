module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#f24998',
          darkPurple: '#3c2e59',
          lightPurple: '#6d5e8c',
          green: '#03a63c',
          yellow: '#f29d35',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
