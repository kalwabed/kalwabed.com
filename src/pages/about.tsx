import type { NextPage } from 'next'

import Bio from '~components/about/bio'
import SEO from '~components/SEO'
import Container from '~components/shared/container'

const AboutPage: NextPage = () => {
  return (
    <Container className="my-14">
      <SEO title="About me" description="Find more about me." />

      <section className="px-0 md:px-10 lg:px-16 space-y-10">
        <h1 className="text-5xl font-bold">About.</h1>
        <Bio />
      </section>
    </Container>
  )
}

export default AboutPage
