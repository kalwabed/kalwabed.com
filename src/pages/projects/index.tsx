import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import ProjectsPageRenderer from '@/components/Projects'
import { ProjectMeta } from '@/types'
import { getAllFrontMatters } from '@/utils/mdx'

const ProjectsPage = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <PageWrapper pageTitle="Projects">
      <ProjectsPageRenderer projects={projects} />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllFrontMatters('_projects')

  return { props: { projects } }
}

export default ProjectsPage
