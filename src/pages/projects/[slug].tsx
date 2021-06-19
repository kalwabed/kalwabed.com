import type { GetStaticPaths, GetStaticProps } from 'next'

import ProjectBySlugRenderer from '@/components/Projects/ProjectBySlugRenderer'
import { ProjectWithMdx } from '@/types'
import { getDataBySlug, getSlugs } from '@/lib/mdx'

const ProjectBySlugPage = ({ project }: { project: ProjectWithMdx }) => {
  return <ProjectBySlugRenderer {...project} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('_projects')

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const project = await getDataBySlug('_projects', slug)

  return { props: { project } }
}

export default ProjectBySlugPage
