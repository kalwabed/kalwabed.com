import Link from 'next/link'

import { Post } from '~types'
import dateFormatter from '~utils/dateFormatter'

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="w-full md:w-3/4 lg:w-4/6 bg-subtleAppBg rounded-sm transition border border-bdr-idle shadow-sm hover:border-bdr-hover hover:shadow outline-none focus:ring focus:ring-appBorder group">
        <div className="py-5 px-4 md:px-8 flex flex-col justify-center items-center w-full">
          <small className="text-sm text-lowContrast">
            {dateFormatter(post.publishedAt, 'EEEE, d MMMM yyyy').formatted}
          </small>
          <div className="mt-5 mb-7 space-y-2 text-center">
            <h2 className="text-4xl font-bold transition group-focus:text-link group-hover:text-link">{post.title}</h2>
            <p className="text-lowContrast tracking-wide">{post.summary}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
