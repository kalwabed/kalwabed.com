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

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${theme`colors.slate`};
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
