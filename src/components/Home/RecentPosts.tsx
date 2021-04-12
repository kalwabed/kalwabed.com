import 'twin.macro'

import NextLink from '../ui/NextLink'
import ContentWrapper from '../ContentWrapper'
import { MoreLink, SectionTitle } from './module'

const RecentPosts = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent posts" />
      {[1, 2, 3].map(n => (
        <div tw="flex flex-col space-y-1 lg:pr-12" key={n}>
          <p>13 April 2002</p>
          <NextLink size="xl" href="/posts/a" title="While you can hear the code">
            While we can see you
          </NextLink>
          <p tw="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto omnis blanditiis quo ullam.
          </p>
        </div>
      ))}

      <MoreLink type="posts" />
    </ContentWrapper>
  )
}

export default RecentPosts
