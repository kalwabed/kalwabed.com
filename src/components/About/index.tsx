import 'twin.macro'
import ContentWrapper from '@/components/ContentWrapper'
import Description from './Description'
import Links from './Links'
import PageSectionTitle from '../PageSectionTitle'

const AboutPageRenderer = () => {
  return (
    <ContentWrapper>
      <PageSectionTitle text="About" />
      <Description />
      <Links />
    </ContentWrapper>
  )
}

export default AboutPageRenderer
