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

const ProjectDescription = ({ description }) => {
  return (
    <Wrapper>
      <p tw="text-gray-500 dark:text-gray-300 tracking-wide">{description}</p>
    </Wrapper>
  )
}

export default ProjectDescription
