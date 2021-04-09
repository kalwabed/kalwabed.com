import tw from 'twin.macro'

import { LayoutWrapper } from '@/utils/styles'

const Wrapper = ({ children }) => {
  return <section css={[LayoutWrapper, tw`flex flex-col w-full justify-center`]}>{children}</section>
}

export default Wrapper
