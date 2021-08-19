import 'twin.macro'
import { memo } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { ProjectMDXComponents } from '@components/mdx'
import { Container } from '../shared/container'

const ProjectContent = ({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) => {
  return (
    <article css={[Container]} tw="space-y-24">
      <MDXRemote {...mdxSource} components={ProjectMDXComponents} />
    </article>
  )
}

export default memo(ProjectContent)
