import 'twin.macro'
import ContentWrapper from '@/components/ContentWrapper'
import Description from './Description'
import Links from './Links'

const AboutPageRenderer = () => {
  return (
    <ContentWrapper>
      <div tw="flex flex-1 justify-center items-center mx-auto md:mt-5">
        <h2 tw="text-4xl font-bold">About</h2>
      </div>
      <Description />
      <Links />
    </ContentWrapper>
  )
}

export default AboutPageRenderer
