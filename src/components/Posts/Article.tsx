import tw from 'twin.macro'
import { MDXRemote } from 'next-mdx-remote'

import { PostMDXComponents } from '../mdx'
import { PostStyle } from '@/utils/styles'

const Article = ({ content }) => {
  return (
    <div>
      <article css={[tw`prose dark:prose-light mx-auto`, PostStyle]}>
        <MDXRemote components={PostMDXComponents} {...content} lazy />
      </article>
    </div>
  )
}

export default Article
