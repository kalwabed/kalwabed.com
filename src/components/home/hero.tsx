import 'twin.macro'

import TextLink from '@components/shared/text-link'

const Hero = () => {
  return (
    <div tw="bg-subtleAppBg w-full py-5">
      <div tw="flex flex-col items-start mx-auto px-4 md:px-0 py-12 max-w-2xl lg:max-w-screen-lg">
        <section tw="leading-relaxed space-y-7 lg:w-3/4">
          <h1 tw="font-bold tracking-wide text-5xl">I'm Kalwabed.</h1>
          <p tw="tracking-wide text-2xl md:text-3xl dark:text-lowContrast">
            Software engineer interested in modern software development architecture.
          </p>
          <TextLink className="umami--click--learn-more-about-me" href="/about" aria-label="About me">
            Learn more about me
          </TextLink>
        </section>
      </div>
    </div>
  )
}

export default Hero
