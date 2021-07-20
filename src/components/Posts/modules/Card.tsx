import tw from 'twin.macro'
import Link from 'next/link'
import { memo } from 'react'

import { CardStyle } from '@/utils/styles'
import NextLink from '@/components/ui/NextLink'
import { Post } from '@/types'

const Card = (props: Post) => {
  const { slug, summary, title } = props

  return (
    <div css={[CardStyle, tw`w-full h-full lg:h-60 p-8`]}>
      <div tw="flex flex-col space-y-6">
        <Link href={'/posts/'.concat(slug)} passHref>
          <a tw="hocus:text-brand-400" className={`umami--click--postsPage-${slug}`}>
            <h1 tw="text-3xl font-bold transition">{title}</h1>
          </a>
        </Link>
        <p tw="text-gray-500 dark:text-gray-300 tracking-wide">{summary}</p>
        <NextLink href={'/posts/'.concat(slug)} title="Read more" className={`umami--click--postsPage-${slug}`}>
          Read more
        </NextLink>
      </div>
    </div>
  )
}

export default memo(Card)
