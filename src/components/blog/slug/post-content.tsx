import tw from 'twin.macro'
import { MDXRemote } from 'next-mdx-remote'

import { PostMDXComponents } from '~components/mdx'
import { PostStyle } from '~utils/styles'

const PostContent = ({ content }) => {
  return (
    <div tw="flex flex-col w-full justify-center">
      <div>
        <article css={[tw`prose prose-light mx-auto`, PostStyle]}>
          <MDXRemote lazy components={PostMDXComponents} {...content} />
        </article>
      </div>
    </div>
  )
}

export default PostContent
