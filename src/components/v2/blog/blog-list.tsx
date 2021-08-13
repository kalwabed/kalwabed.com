import 'twin.macro'
import BlogCard from './modules/blog-card'

const BlogList = () => {
  return (
    <div tw="grid grid-rows-1 gap-14 justify-items-center w-full mt-14">
      {[1, 2, 3, 4].map(k => (
        <BlogCard key={k} />
      ))}
    </div>
  )
}

export default BlogList
