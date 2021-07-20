import 'twin.macro'
import Footer from './Footer'
import Header from './Header'

const PageRoot = ({ children }) => {
  return (
    <>
      <Header />
      <main tw="relative flex-auto pt-16 dark:text-highContrast">{children}</main>
      <Footer />
    </>
  )
}

export default PageRoot
