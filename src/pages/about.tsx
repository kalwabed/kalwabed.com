import type { NextPage } from 'next'

import AboutPageRenderer from '@components/v2/about'
import Page from '@components/v2/layout/page'
import SEO from '@components/SEO'

const AboutPage: NextPage = () => {
  return (
    <Page>
      <SEO title="About" description="About Kalwabed Rizki, contact, and more" />
      <AboutPageRenderer />
    </Page>
  )
}

export default AboutPage
