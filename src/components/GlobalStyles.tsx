import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyle = css`
  * {
    scroll-behavior: smooth;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.transparent`};
    ${tw`antialiased`}
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
