import tw from 'twin.macro'
import Link from 'next/link'

import { CardStyle } from '@/utils/styles'
import NextLink from '@/components/ui/NextLink'

const Card = () => {
  return (
    <div css={[CardStyle, tw`w-full h-full lg:h-60 p-8`]}>
      <div tw="flex flex-col space-y-6">
        <Link href="/posts/test">
          <a>
            <h1 tw="text-3xl font-bold hocus:text-primary-400 transition">Title not for title, yet</h1>
          </a>
        </Link>
        <p tw="text-gray-500 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, reprehenderit! Praesentium atque labore
          distinctio. distinctio. distinctio. distinctio.
        </p>
        <NextLink withIcon href="/posts/test" title="Read more">
          Read more
        </NextLink>
      </div>
    </div>
  )
}

export default Card
