import tw from 'twin.macro'

const ContentWrap = tw.section`
flex
flex-col
w-full
items-start
px-4
md:px-20
lg:px-48
xl:px-64
space-y-6
`

const ContentWrapper = ({ children }) => {
  return <ContentWrap>{children}</ContentWrap>
}

export default ContentWrapper
