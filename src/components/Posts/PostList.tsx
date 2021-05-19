import 'twin.macro'
import dynamic from 'next/dynamic'

import { Post } from '@/types'
const Card = dynamic(() => import('./modules/Card'))

interface Props {
  posts: Post[]
  searchValue: string
}

const PostList = ({ posts, searchValue }: Props) => {
  const filteredPosts = searchValue
    ? posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts

  return (
    <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {filteredPosts.map(post => (
        <Card key={post.slug} {...post} />
      ))}
    </div>
  )
}

export default PostList
