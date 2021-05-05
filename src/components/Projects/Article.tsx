import 'twin.macro'
import hydrate from 'next-mdx-remote/hydrate'
import type { MdxRemote } from 'next-mdx-remote/types'
import { memo } from 'react'

import MDXComponents from '../MDXComponents'

const Article = ({ mdxSource }: { mdxSource: MdxRemote.Source }) => {
  const hydratedContent = hydrate(mdxSource, { components: MDXComponents })

  return <article tw="space-y-24">{hydratedContent}</article>
}

export default memo(Article)
