import Container from '~components/shared/container'
import { Post } from '~types'

import MoreLink from './more-link'
import RecentPost from './recent-post'
import SectionTitle from './section-title'

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  const threeRecentPosts = posts.slice(0, 3)

  return (
    <Container>
      <SectionTitle text="Recent posts" />
      <div className="flex flex-col items-center w-full space-y-4">
        {threeRecentPosts.map(post => (
          <RecentPost key={post.slug} publishedAt={post.publishedAt} slug={post.slug}>
            {post.title}
          </RecentPost>
        ))}
      </div>

      <MoreLink type="posts" />
    </Container>
  )
}

export default RecentPosts
