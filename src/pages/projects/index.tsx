import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import ProjectsPageRenderer from '@/components/Projects'
import { Project } from '@/types'
import { getAllFrontMatters } from '@/lib/mdx'
import app from '@/config/app'

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  return (
    <PageWrapper {...app.pageMeta.projects}>
      <ProjectsPageRenderer projects={projects} />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllFrontMatters('_projects')

  return { props: { projects } }
}

export default ProjectsPage
