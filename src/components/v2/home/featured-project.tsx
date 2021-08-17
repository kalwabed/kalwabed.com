import Image from 'next/image'
import tw from 'twin.macro'

import { Container } from '../shared/container'
import { MoreLink, SectionTitle } from './modules'
import TextLink from '../shared/text-link'
import { Project } from '@/types'
import TechList from '../shared/tech-list'
import projectBanner from '../shared/project-banners'

const _Wrapper = tw.div`
w-full
flex justify-between
flex-col lg:flex-row
bg-subtleAppBg
border border-appBorder
overflow-hidden
rounded-lg
shadow
`

const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => {
  const { shortDescription, slug, techs, title } = project

  return (
    <section css={[Container]}>
      <SectionTitle title="Featured project" />

      <_Wrapper>
        <Image src={projectBanner[slug]} alt="Featured project banner" placeholder="blur" />
        <section tw="w-full p-6 lg:p-8 flex flex-col">
          <h3>
            <TextLink variant="ghost" size="lg" href={`/projects/${slug}`}>
              {title}
            </TextLink>
          </h3>
          <small tw="text-sm text-lowContrast mt-2 lg:mt-3.5">
            <TechList techs={techs} />
          </small>
          <p tw="text-lowContrast mt-6 lg:mt-11">{shortDescription}</p>
          <div tw="mt-6 lg:mt-auto">
            <TextLink href={`/projects/${slug}`}>More detail</TextLink>
          </div>
        </section>
      </_Wrapper>
      <MoreLink type="projects" />
    </section>
  )
}

export default FeaturedProject
