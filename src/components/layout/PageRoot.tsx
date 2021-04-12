import 'twin.macro'
import Footer from './Footer'
import Header from './Header'

const PageRoot = ({ children }) => {
  return (
    <>
      <Header />
      <main tw="flex-auto">{children}</main>
      <Footer />
    </>
  )
}

export default PageRoot
