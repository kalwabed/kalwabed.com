import 'twin.macro'
import NextLink from '../ui/NextLink'

const Hero = () => {
  return (
    <div tw="flex flex-col items-start px-4 md:px-20 lg:px-48 xl:(px-64)">
      <div tw="leading-relaxed">
        <p tw="font-bold tracking-wider">Hello!</p>
        <h1 tw="font-bold tracking-wide text-3xl md:(text-5xl)">I'm Kalwabed Rizki</h1>
      </div>
      <div tw="space-y-5 lg:pr-12">
        <p tw="tracking-wide text-lg">Self-taught web developer based in Banyuwangi, Indonesia</p>
        <p tw="text-gray-600 dark:text-gray-400 tracking-wide">
          Tinkering-as-a-hobby. Currently exploring modern website development using Javascript/Typescript.
        </p>
        <div>
          <NextLink className="umami--click--learn-more-about-me" href="/about" title="Learn more about me" withIcon>
            Learn more about me
          </NextLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
