import Container from '~components/shared/container'
import TextLink from '~components/shared/text-link'

const Hero = () => {
  return (
    <div className="bg-subtleAppBg w-full py-5">
      <Container className="py-12 ">
        <section className="leading-relaxed space-y-7 lg:w-3/4">
          <h1 className="font-bold tracking-wide text-5xl">I&apos;m Kalwabed Rizki</h1>
          <p className="tracking-wide text-2xl md:text-3xl text-lowContrast">
            Software engineer interested in modern software development architecture.
          </p>
          <TextLink className="umami--click--learn-more" href="/about" aria-label="About me">
            Learn more about me
          </TextLink>
        </section>
      </Container>
    </div>
  )
}

export default Hero
