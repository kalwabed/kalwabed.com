import tw from 'twin.macro'

import dateFormatter from '@/utils/dateFormatter'

const Wrapper = tw.div`
my-12
md:(mt-24 mb-16)
flex
flex-col
justify-center
mx-auto
items-center
space-y-3
text-center
w-full
`

const PostHeader = ({ publishedAt, title }) => {
  return (
    <Wrapper>
      <time tw="text-lowContrast" dateTime={dateFormatter(publishedAt).ISO}>
        {dateFormatter(publishedAt).formatted}
      </time>
      <h1 tw="font-bold text-4xl">{title}</h1>
    </Wrapper>
  )
}

export default PostHeader