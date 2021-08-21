import type { GetStaticProps, NextPage } from 'next'

import { Project } from '@/types'
import { getAllFrontMatters } from '@/lib/mdx'
import Page from '@components/layout/page'
import ProjectsPageRenderer from '@components/projects'
import SEO from '@components/SEO'

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllFrontMatters('_projects')

  return { props: { projects } }
}

const ProjectsPage: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Page>
      <SEO title="Projects" description="Where my projects life" />
      <ProjectsPageRenderer projects={projects} />
    </Page>
  )
}

export default ProjectsPage
