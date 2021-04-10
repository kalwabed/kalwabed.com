import 'twin.macro'

const ContentWrapper = ({ children }) => {
  return <section tw="flex flex-col items-start px-4 md:px-20 lg:px-48 xl:px-64 space-y-6">{children}</section>
}

export default ContentWrapper
