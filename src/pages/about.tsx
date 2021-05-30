import AboutPageRenderer from '@/components/About'
import PageWrapper from '@/components/layout/PageWrapper'
import app from '@/config/app'

const AboutPage = () => {
  return (
    <PageWrapper {...app.pageMeta.about}>
      <AboutPageRenderer />
    </PageWrapper>
  )
}

export default AboutPage
