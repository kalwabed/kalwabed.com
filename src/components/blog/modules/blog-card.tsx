import Link from 'next/link'
import tw from 'twin.macro'

import { Post } from '~types'
import dateFormatter from '~utils/dateFormatter'

const _Wrapper = tw.a`
w-full md:w-3/4 lg:w-4/6
bg-subtleAppBg
rounded-sm
transition
border border-bdr-idle
shadow-sm
hover:(border-bdr-hover shadow)
focus:(outline-none ring ring-appBorder)
`

const _Container = tw.div`
py-5
px-4 md:px-8
flex flex-col
justify-center
items-center
w-full
`

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <_Wrapper className="group">
        <_Container>
          <small tw="text-sm text-lowContrast">{dateFormatter(post.publishedAt, 'EEEE, d MMMM yyyy').formatted}</small>
          <div tw="mt-5 mb-7 space-y-2 text-center">
            <h2 tw="text-4xl font-bold transition group-hocus:text-link">{post.title}</h2>
            <p tw="text-lowContrast tracking-wide">{post.summary}</p>
          </div>
        </_Container>
      </_Wrapper>
    </Link>
  )
}

export default BlogCard
