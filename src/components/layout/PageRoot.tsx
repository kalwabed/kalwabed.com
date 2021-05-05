import 'twin.macro'
import Footer from './Footer'
import Header from './Header'

const PageRoot = ({ children }) => {
  return (
    <>
      <Header />
      <main tw="relative flex-auto pt-16">{children}</main>
      <Footer />
    </>
  )
}

export default PageRoot
