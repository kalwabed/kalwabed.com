import 'twin.macro'
import Footer from './Footer'
import Header from './Header'

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <main tw="flex-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Page
