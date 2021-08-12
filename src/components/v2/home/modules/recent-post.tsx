import tw from 'twin.macro'
import Link from 'next/link'

import dateFormatter from '@/utils/dateFormatter'

const _Content = tw.div`
flex flex-col md:flex-row
md:items-center
space-y-2 md:(space-x-10 space-y-0) lg:space-x-12
p-3
`

const _Wrapper = tw.a`
w-full
block
transition
focus:(ring ring-link outline-none)
hocus:bg-subtleAppBg
`

const RecentPost: React.FC<{ slug: string; publishedAt: string }> = props => {
  const { publishedAt, slug, children } = props

  const formattedDatePublished = dateFormatter(publishedAt)

  return (
    <Link href={`/posts/${slug}`} passHref>
      <_Wrapper>
        <_Content>
          <time tw="text-sm text-lowContrast w-full md:w-28 lg:w-24" dateTime={formattedDatePublished.ISO}>
            {formattedDatePublished.formatted}
          </time>
          <h2 tw="text-2xl font-semibold">{children}</h2>
        </_Content>
      </_Wrapper>
    </Link>
  )
}

export default RecentPost
