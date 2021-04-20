import type { GetStaticProps } from 'next'

import PageWrapper from '@/components/layout/PageWrapper'
import ProjectsPageRenderer from '@/components/Projects'

const ProjectsPage = ({ projects }) => {
  return (
    <PageWrapper pageTitle="Projects">
      <ProjectsPageRenderer />
    </PageWrapper>
  )
}

// get from json data or any (or from notion instead)
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default ProjectsPage
