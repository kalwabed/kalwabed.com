const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
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
      },
      typography: theme => ({
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300')
              },
              strong: {
                color: theme('colors.white')
              },
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600')
              },
              hr: {
                borderColor: theme('colors.gray.200')
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600')
              },
              h1: {
                color: theme('colors.white')
              },
              h2: {
                color: theme('colors.white')
              },
              h3: {
                color: theme('colors.white')
              },
              h4: {
                color: theme('colors.white')
              },
              'figure figcaption': {
                color: theme('colors.gray.400')
              },
              code: {
                color: theme('colors.white')
              },
              'a code': {
                color: theme('colors.white')
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800')
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600')
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
