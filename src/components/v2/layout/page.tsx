import 'twin.macro'

const Page: React.FC = ({ children }) => {
  return (
    <main id="main-content" tw="flex flex-col min-h-screen flex-auto w-full dark:text-highContrast">
      {children}
    </main>
  )
}

export default Page
