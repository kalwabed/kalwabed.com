import tw from 'twin.macro'

const Wrapper = tw.div`
flex
flex-1
justify-center
items-center
mx-auto
`

const H1 = tw.h1`
text-4xl
font-bold
`

const PageSectionTitle = ({ text }) => {
  return (
    <Wrapper>
      <H1>{text}</H1>
    </Wrapper>
  )
}

export default PageSectionTitle
