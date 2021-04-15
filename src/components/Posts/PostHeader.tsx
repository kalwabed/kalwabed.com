import tw from 'twin.macro'

const Wrapper = tw.div`
my-12
md:(mt-24 mb-16)
flex flex-col
justify-center
items-center
space-y-3
`

const PostHeader = () => {
  return (
    <Wrapper>
      <time>13 04 02</time>
      <h1 tw="font-bold text-4xl">Life is more relative than we know</h1>
    </Wrapper>
  )
}

export default PostHeader
