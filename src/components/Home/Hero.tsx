import 'twin.macro'
import NextLink from '../ui/NextLink'

const Hero = () => {
  return (
    <div tw="flex flex-col items-start px-4 md:(px-20) lg:(px-48) xl:(pl-80 pr-72)">
      <div tw="leading-relaxed">
        <p tw="font-bold tracking-wider">Hello!</p>
        <h1 tw="font-bold tracking-wide text-3xl md:(text-5xl)">I'm Kalwabed Rizki</h1>
      </div>
      <div tw="space-y-5">
        <p tw="tracking-wide text-lg">Self-taught web developer based in Banyuwangi, Indonesia</p>
        <p tw="text-gray-500 tracking-wide">
          A dreamer, and coffee connoisseur. Loves things related to modern web development, Linux, and cybersecurity.
          Currently working as a frontend engineer at GoStartup.
        </p>
        <div>
          <NextLink href="/about" label="Learn more about me &gt; &gt;" />
        </div>
      </div>
    </div>
  )
}

export default Hero
