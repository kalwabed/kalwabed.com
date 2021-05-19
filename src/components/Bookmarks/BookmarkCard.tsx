import tw from 'twin.macro'

import NextLink from '@/components/ui/NextLink'
import { Bookmarks } from '@/types'
import toKebabCase from '@/utils/toKebabCase'

const Img = tw.img`
object-cover
bg-cover
bg-center
bg-no-repeat
rounded-full
w-10 h-10 md:(w-12 h-12)
`

const BookmarkCard = (props: Bookmarks) => {
  const { description, title, url, noFavicon } = props

  const imgFallback = `https://cdn.statically.io/avatar/shape=rounded/${encodeURI(title)}`

  const { origin } = new URL(url)

  return (
    <div tw="flex space-x-3 py-3 border-b dark:border-gray-700" key={title}>
      <Img width={10} height={10} src={noFavicon ? imgFallback : `${origin}/favicon.ico`} alt={title} />
      <div tw="flex flex-col">
        <NextLink
          title={url}
          href={url}
          css={[tw`text-lg md:text-xl`]}
          className={`umami--click--bookmarks-${toKebabCase(title)}`}
        >
          {title}
        </NextLink>
        <small tw="text-sm text-gray-500 dark:text-gray-400">{origin.replace('https://', '')}</small>
        <p tw="text-sm tracking-wide">{description}</p>
      </div>
    </div>
  )
}

export default BookmarkCard
