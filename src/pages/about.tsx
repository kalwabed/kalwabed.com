import type { NextPage } from 'next'

import AboutPageRenderer from '@components/about'
import Page from '@components/layout/page'
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
