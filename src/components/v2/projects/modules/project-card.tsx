import Image from 'next/image'
import tw from 'twin.macro'

import ButtonLink from '@components/v2/shared/button-link'
import TextLink from '@components/v2/shared/text-link'
import BannerExample from '../assets/banner.png'
import { Project } from '@/types'

const ProjectCard = ({ project }: { project: Project }) => {
  const { banner, description, title, liveUrl, githubRepo, slug, techs, publishedAt } = project

  return (
    <section tw="flex flex-col space-y-8">
      <div tw="flex flex-col space-y-1">
        <div>
          <TextLink variant="ghost" href={`/project/${slug}`} styles={tw`text-4xl`}>
            {title}
          </TextLink>
        </div>
        <div tw="inline-flex items-center space-x-2.5">
          <span tw="w-12 h-1 bg-lowContrast" />{' '}
          <span tw="text-lowContrast tracking-wide">
            {new Date(publishedAt).getFullYear()} - {techs.map((tech, index) => (index ? ', ' : '') + tech)}
          </span>
        </div>
      </div>

      <div tw="overflow-hidden mx-5 rounded-lg">
        <Image src={banner} width={1000} height={500} tw="rounded-lg" alt={`${title} preview banner`} />
      </div>

      <div tw="flex flex-col space-y-4">
        <p tw="text-lowContrast">{description}</p>

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
