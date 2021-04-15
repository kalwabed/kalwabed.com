import tw from 'twin.macro'

const Wrapper = tw.div`
my-12
md:(mt-24 mb-16)
flex
flex-col
justify-center
items-center
space-y-3
w-full
`

const PostHeader = ({ publishedAt, title }) => {
  return (
    <Wrapper>
      <time>{publishedAt}</time>
      <h1 tw="font-bold text-4xl">{title}</h1>
    </Wrapper>
  )
}

export default PostHeader
