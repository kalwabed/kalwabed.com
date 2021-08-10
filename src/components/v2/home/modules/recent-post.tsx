import tw from 'twin.macro'

import NextLink from '@components/v2/shared/NextLink'
import dateFormatter from '@/utils/dateFormatter'

const RecentPost: React.FC<{ slug: string; publishedAt: string }> = props => {
  const { publishedAt, slug, children } = props

  const formattedDatePublished = dateFormatter(publishedAt)

  return (
    <div tw="w-full">
      <div tw="flex flex-col md:flex-row md:items-center space-y-2 md:(space-x-10 space-y-0) lg:space-x-12">
        <time tw="text-sm text-lowContrast w-full md:w-28 lg:w-24" dateTime={formattedDatePublished.ISO}>
          {formattedDatePublished.formatted}
        </time>
        <NextLink href={`/posts/${slug}`} styles={tw`text-2xl`}>
          {children}
        </NextLink>
      </div>
    </div>
  )
}

export default RecentPost
