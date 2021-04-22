import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import ProjectsPageRenderer from '@/components/Projects'
import { Project } from '@/types'
import { getAllFrontMatters } from '@/utils/mdx'

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
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
