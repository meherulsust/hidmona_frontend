const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#9a9a9a',
          500: '#777777',
          600: '#464646',
        },
        primary: {
          DEFAULT: '#4A42EA',
          50: '#DDDCE5',
          100: '#D6D6E6',
          200: '#C6C4E6',
          300: '#B7B5E7',
          400: '#A7A3E7',
          500: '#9793E7',
          600: '#8884E8',
          700: '#7973E9',
          800: '#6963E9',
          900: '#5A52EA',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
