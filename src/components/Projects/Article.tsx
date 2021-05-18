import 'twin.macro'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { memo } from 'react'

import { ProjectMDXComponents } from '../mdx'

const Article = ({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) => {
  return (
    <article tw="space-y-24">
      <MDXRemote {...mdxSource} components={ProjectMDXComponents} />
    </article>
  )
}

export default memo(Article)
