import { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import { ProjectsPageRenderer } from '@/components/Projects'

const ProjectsPage = ({ projects }) => {
  return (
    <PageWrapper pageTitle="Projects">
      <ProjectsPageRenderer />
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default ProjectsPage
