import Bio from 'app/about/bio'

import Container from '~components/shared/container'

const AboutPage = () => {
  return (
    <Container className="my-14">
      <section className="px-0 md:px-10 lg:px-16 space-y-10">
        <h1 className="text-5xl font-bold">About.</h1>
        <Bio />
      </section>
    </Container>
  )
}

export default AboutPage
