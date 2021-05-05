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
          50: '#dcf3ff',
          100: '#aedaff',
          200: '#7cc0ff',
          300: '#4aa7ff',
          400: '#1a8eff',
          500: '#0074e6',
          600: '#005ab4',
          700: '#004182',
          800: '#002751',
          900: '#000e21'
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
  plugins: [require('@tailwindcss/typography')]
}
