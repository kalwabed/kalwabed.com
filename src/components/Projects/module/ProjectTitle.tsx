import tw from 'twin.macro'

const Wrapper = tw.div`
flex
flex-1
justify-center
mx-auto
bottom-20
relative
text-center
w-full
md:w-3/4
`

const ProjectTitle = () => {
  return (
    <Wrapper>
      <p tw="text-gray-500 tracking-wide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet dicta facilis, atque odio illo non
        doloremque maiores! Alias eveniet iure sequi dolorum neque quisquam temporibus fuga impedit, ut consequatur?
      </p>
    </Wrapper>
  )
}

export default ProjectTitle
