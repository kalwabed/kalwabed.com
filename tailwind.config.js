const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Manrope', ...defaultTheme.fontFamily.sans],
      body: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        slate: '#293845',
        dark: '#151715',
        appBg: '#141716',
        subtleAppBg: '#191D1B',
        appBorder: '#303633',
        v2: {
          hover: '#252A27',
          active: '#2A2F2C',
          borderIdle: '#393F3C',
          borderHover: '#4A524E'
        },
        lowContrast: '#99A29E',
        highContrast: '#ECEEED',
        link: '#00C99E',
        iconBg: '#F0F1EC',
        cyan: colors.cyan,
        brand: {
          50: '#ffe2f6',
          100: '#ffb1db',
          200: '#ff7fc1',
          300: '#ff4da8',
          400: '#fe1e90',
          500: '#e50776',
          600: '#b3005c',
          700: '#810042',
          800: '#4f0027',
          900: '#1f000f'
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
