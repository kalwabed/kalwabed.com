import type { NextPage } from 'next'

import AboutPageRenderer from '@components/v2/about'
import Page from '@components/v2/layout/page'

const AboutPage: NextPage = () => {
  return (
    <Page>
      <AboutPageRenderer />
    </Page>
  )
}

export default AboutPage
