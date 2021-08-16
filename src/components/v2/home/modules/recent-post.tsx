import tw from 'twin.macro'
import Link from 'next/link'

import dateFormatter from '@/utils/dateFormatter'

const _Wrapper = tw.a`
w-full
flex
items-center
space-x-3 md:space-x-10 lg:space-x-12
p-3
transition
rounded-sm
focus:(ring ring-link outline-none)
hocus:bg-subtleAppBg
`

const RecentPost: React.FC<{ slug: string; publishedAt: string }> = props => {
  const { publishedAt, slug, children } = props

  const formattedDatePublished = dateFormatter(publishedAt)

  return (
    <Link href={`/posts/${slug}`} passHref>
      <_Wrapper>
        <time
          tw="text-sm text-lowContrast flex-grow-0 flex-shrink-0 flex-basis[100px]"
          dateTime={formattedDatePublished.ISO}
        >
          {formattedDatePublished.formatted}
        </time>
        <h3 tw="text-xl md:text-2xl font-semibold">{children}</h3>
      </_Wrapper>
    </Link>
  )
}

export default RecentPost
