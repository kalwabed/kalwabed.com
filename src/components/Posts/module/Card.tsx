import 'twin.macro'
import Link from 'next/link'

import NextLink from '@/components/ui/NextLink'

const Card = () => {
  return (
    <div tw="w-full h-full lg:h-60 p-8 border transition shadow-md bg-gray-100 hover:(bg-gray-50 shadow-lg)">
      <div tw="flex flex-col space-y-6">
        <Link href="/posts/test">
          <a>
            <h1 tw="text-3xl font-bold hover:underline transition">Title not for title, yet</h1>
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
