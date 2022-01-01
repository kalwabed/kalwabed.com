import { Post } from '~types'
import BlogCard from './blog-card'

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-rows-1 gap-14 justify-items-center w-full mt-14">
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default BlogList
