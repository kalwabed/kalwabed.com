import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { memo } from 'react'

import { ProjectMDXComponents } from '~components/mdx'
import Container from '~components/shared/container'

const ProjectContent = ({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) => {
  return (
    <Container className="space-y-24">
      <MDXRemote {...mdxSource} components={ProjectMDXComponents} lazy />
    </Container>
  )
}

export default memo(ProjectContent)
