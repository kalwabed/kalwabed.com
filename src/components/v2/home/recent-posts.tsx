import 'twin.macro'

import { Container } from '@components/v2/shared/Container'
import { Post } from '@/types'
import { MoreLink, SectionTitle } from './modules'
import RecentPost from './modules/recent-post'

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  const threeRecentPosts = posts.slice(0, 3)

  return (
    <section css={[Container]}>
      <SectionTitle title="Recent posts" />
      <div tw="space-y-12 md:space-y-5">
        {threeRecentPosts?.map(post => (
          <RecentPost key={post.slug} slug={post.slug} publishedAt={post.publishedAt}>
            {post.title}
          </RecentPost>
        ))}
      </div>

      <MoreLink type="posts" />
    </section>
  )
}

export default RecentPosts
