import type { GetStaticPaths, GetStaticProps } from 'next'

import { ProjectWithMdx } from '@/types'
import { getDataBySlug, getSlugs } from '@/lib/mdx'
import ProjectPageRenderer from '@components/v2/project'
import Page from '@components/v2/layout/page'
import SEO from '@components/SEO'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('_projects')

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string
  const project = await getDataBySlug('_projects', slug)

  return { props: { project } }
}

const ProjectBySlugPage = ({ project }: { project: ProjectWithMdx }) => {
  return (
    <Page>
      <SEO title={project.title} description={project.description} />
      <ProjectPageRenderer project={project} />
    </Page>
  )
}

export default ProjectBySlugPage
