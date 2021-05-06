import 'twin.macro'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { memo } from 'react'

import MDXComponents from '../MDXComponents'

const Article = ({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) => {
  return (
    <article tw="space-y-24">
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </article>
  )
}

export default memo(Article)
