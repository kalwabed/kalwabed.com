import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

  * {
    scroll-behavior: smooth;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.gray.300`};
    ${tw`antialiased`}
  }

  #__next {
    min-height: 100vh;
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
