import 'twin.macro'

import { Post } from '@/types'
import { Card } from './module'

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {posts.map(post => (
        <Card key={post.slug} {...post} />
      ))}
    </div>
  )
}

export default PostList
