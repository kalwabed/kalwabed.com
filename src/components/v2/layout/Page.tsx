import 'twin.macro'

const Page: React.FC = ({ children }) => {
  return <main tw="flex flex-col flex-auto w-full dark:text-highContrast">{children}</main>
}

export default Page