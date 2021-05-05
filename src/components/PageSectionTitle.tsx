import { memo } from 'react'
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

const Description = tw.small`
text-sm
text-gray-500
tracking-wide
`

interface Props {
  text: string
  description?: string
}

const PageSectionTitle = ({ text, description }: Props) => {
  if (description) {
    return (
      <Wrapper css={[tw`flex-col space-y-2`]}>
        <H1>{text}</H1>
        <Description>{description}</Description>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <H1>{text}</H1>
    </Wrapper>
  )
}

export default memo(PageSectionTitle)
