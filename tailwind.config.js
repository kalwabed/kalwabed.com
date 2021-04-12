const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        slate: '#293845',
        dark: '#151515',
        primary: {
          50: '#ffeae0',
          100: '#fbc7b7',
          200: '#f2a38c',
          300: '#ec7f60',
          400: '#e55c34',
          500: '#cb421a',
          600: '#9f3213',
          700: '#72240d',
          800: '#471405',
          900: '#1f0300'
        },
        secondary: {
          50: '#daffff',
          100: '#b3f9f7',
          200: '#88f2f0',
          300: '#5cece9',
          400: '#32e6e3',
          500: '#19cdc9',
          600: '#059f9d',
          700: '#007371',
          800: '#004544',
          900: '#001918'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
