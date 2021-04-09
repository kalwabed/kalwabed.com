const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      sans: ['Public Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        dark: '#151515',
        primary: {
          50: '#e4f6fd',
          100: '#c9dee7',
          200: '#abc6d3',
          300: '#8cafc0',
          400: '#6d98ac',
          500: '#547f93',
          600: '#3f6373',
          700: '#2b4653',
          800: '#162b34',
          900: '#001016'
        },
        secondary: {
          50: '#fff3df',
          100: '#f7deb9',
          200: '#efc790',
          300: '#e7b165',
          400: '#e09b3a',
          500: '#c78221',
          600: '#9a6518',
          700: '#6e480f',
          800: '#432b05',
          900: '#1b0d00'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
