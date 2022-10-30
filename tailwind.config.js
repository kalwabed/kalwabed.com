/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx', './app/**/*.tsx'],
  theme: {
    // fontFamily: {
    //   display: [manrope.style.fontFamily, ...defaultTheme.fontFamily.sans],
    //   body: [inter.style.fontFamily, ...defaultTheme.fontFamily.sans]
    // },
    extend: {
      colors: {
        appBg: '#141716', // sageDark sage1
        subtleAppBg: '#191D1B', // sageDark sage2
        appBorder: '#303633', // sageDark sage6
        btn: {
          hover: '#252A27', // sageDark sage4
          active: '#2A2F2C' // sageDark sage5
        },
        bdr: {
          idle: '#393F3C', // sageDark sage7
          hover: '#4A524E' // sageDark sage8
        },
        lowContrast: '#99A29E', // sageDark sage11
        highContrast: '#ECEEED', // sageDark sage12
        link: '#00C99E' // mintA mintA9
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
