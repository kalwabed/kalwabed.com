import tw from 'twin.macro'
import Link from 'next/link'

import { CardStyle } from '@/utils/styles'
import NextLink from '@/components/ui/NextLink'
import { Post } from '@/types'

const Card = (props: Post) => {
  const { slug, summary, title } = props

  return (
    <div css={[CardStyle, tw`w-full h-full lg:h-60 p-8`]}>
      <div tw="flex flex-col space-y-6">
        <Link href={'/posts/'.concat(slug)} passHref>
          <a tw="hocus:text-primary-400">
            <h1 tw="text-3xl font-bold transition">{title}</h1>
          </a>
        </Link>
        <p tw="text-gray-500 tracking-wide">{summary}</p>
        <NextLink withIcon href={'/posts/'.concat(slug)} title="Read more">
          Read more
        </NextLink>
      </div>
    </div>
  )
}

export default Card
