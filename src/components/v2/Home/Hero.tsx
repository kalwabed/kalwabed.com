import 'twin.macro'

import NextLink from '../shared/NextLink'

const Hero = () => {
  return (
    <div tw="flex flex-col items-start bg-subtleAppBg px-4 ">
      <div tw="leading-relaxed">
        <p tw="font-bold tracking-wider">Hello!</p>
        <h1 tw="font-bold tracking-wide text-3xl md:text-5xl">I'm Kalwabed Rizki</h1>
      </div>
      <div tw="space-y-5 lg:pr-12">
        <p tw="tracking-wide text-lg">Self-taught web developer based in Banyuwangi, Indonesia</p>
        <p tw="tracking-wide text-gray-600 dark:text-lowContrast">
          Tinkering-as-a-hobby. Currently exploring modern website development using Javascript/Typescript.
        </p>
        <NextLink type="text" className="umami--click--learn-more-about-me" href="/" title="About me">
          Learn more about me
        </NextLink>
      </div>
    </div>
  )
}

export default Hero
