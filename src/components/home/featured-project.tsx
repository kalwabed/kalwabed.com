import Image from 'next/image'

import Container from '~components/shared/container'
import projectBanner from '~components/shared/project-banners'
import TextLink from '~components/shared/text-link'
import { Project } from '~types'
import MoreLink from './more-link'
import SectionTitle from './section-title'

const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => {
  const { description, slug, techs, title } = project

  return (
    <Container>
      <SectionTitle text="Featured project" />

      <div className="w-full flex justify-between flex-col lg:flex-row bg-subtleAppBg border border-appBorder overflow-hidden rounded-lg shadow">
        <Image src={projectBanner[slug]} alt="Featured project banner" placeholder="blur" />
        <section className="w-full p-6 lg:p-8 flex flex-col">
          <h3>
            <TextLink variant="ghost" size="lg" href={`/projects/${slug}`}>
              {title}
            </TextLink>
          </h3>
          <small className="text-sm text-lowContrast mt-2 lg:mt-3.5">{techs.join(', ')}</small>
          <p className="text-lowContrast mt-6 lg:mt-11">{description}</p>
          <div className="mt-6 lg:mt-auto">
            <TextLink href={`/projects/${slug}`}>More detail</TextLink>
          </div>
        </section>
      </div>

      <MoreLink type="projects" />
    </Container>
  )
}

export default FeaturedProject
