import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyle = css`
  * {
    scroll-behavior: smooth;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.transparent`};
    scrollbar-width: thin;
    scrollbar-color: ${theme`colors.subtleAppBg`} ${theme`colors.appBorder`};
    ${tw`antialiased`}
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-thumb {
    ${tw`bg-appBorder`}
  }

  body::-webkit-scrollbar-thumb:hover {
    ${tw`bg-link`}
  }

  body::-webkit-scrollbar-track {
    background-color: ${theme`colors.subtleAppBg`};
    border: 1px solid ${theme`colors.appBorder`};
  }

  *::selection {
    background-color: #01dda21e;
    color: ${theme`colors.highContrast`};
  }

  #__next {
    min-height: 100vh;
    width: '100%';
    display: flex;
    flex-direction: column;
  }
`

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={CustomStyle} />
    </>
  )
}

export default GlobalStyles
