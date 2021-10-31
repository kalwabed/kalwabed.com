import 'twin.macro'
import Image from 'next/image'

import ButtonLink from '~components/shared/button-link'
import TextLink from '~components/shared/text-link'
import { Project } from '~types'
import projectBanner from '~components/shared/project-banners'
import TechList from '~components/shared/tech-list'

const ProjectCard = ({ project }: { project: Project }) => {
  const { summary, title, liveUrl, githubRepo, slug, techs, publishedAt } = project

  return (
    <section tw="flex flex-col space-y-8">
      <div tw="flex flex-col space-y-1">
        <div>
          <TextLink variant="ghost" size="lg" href={`/projects/${slug}`}>
            {title}
          </TextLink>
        </div>
        <div tw="inline-flex items-center space-x-2.5">
          <span tw="w-12 h-1 bg-lowContrast" />{' '}
          <span tw="text-lowContrast tracking-wide">
            {new Date(publishedAt).getFullYear()} - <TechList techs={techs} />
          </span>
        </div>
      </div>

      <div tw="overflow-hidden mx-5">
        <Image
          src={projectBanner[slug]}
          placeholder="blur"
          tw="rounded-lg shadow-lg"
          alt={`${title} preview banner`}
          quality={95}
        />
      </div>

      <div tw="flex flex-col space-y-4">
        <p tw="text-lowContrast">{summary}</p>

        <div tw="space-x-2">
          <ButtonLink href={`/projects/${slug}`}>Write-up</ButtonLink>
          {liveUrl && (
            <ButtonLink href={liveUrl} isExternal>
              Demo
            </ButtonLink>
          )}
          {githubRepo && (
            <ButtonLink href={githubRepo} isExternal>
              Github
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
