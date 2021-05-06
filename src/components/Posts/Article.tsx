import tw from 'twin.macro'
import { MDXRemote } from 'next-mdx-remote'

import MDXComponents from '../MDXComponents'
import { PostStyle } from '@/utils/styles'

const Article = ({ content }) => {
  return (
    <div>
      <article css={[tw`prose mx-auto`, PostStyle]}>
        <MDXRemote components={MDXComponents} {...content} lazy />
      </article>
    </div>
  )
}

export default Article
