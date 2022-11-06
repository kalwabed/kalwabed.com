import Image from 'next/image'

import ButtonLink from '~components/shared/button-link'
import projectBanner from '~components/shared/project-banners'
import TextLink from '~components/shared/text-link'
import { Project } from '~types'

const ProjectCard = ({ project }: { project: Project }) => {
  const { summary, title, liveUrl, githubRepo, slug, techs, publishedAt } = project

  return (
    <section className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-1">
        <div>
          <TextLink variant="ghost" size="lg" href={`/projects/${slug}`}>
            {title}
          </TextLink>
        </div>
        <div className="inline-flex items-center space-x-2.5">
          <span className="w-12 h-1 bg-lowContrast" aria-hidden="true" />
          <span className="text-lowContrast tracking-wide">
            {new Date(publishedAt).getFullYear()} - {techs.join(', ')}
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <Image
          src={projectBanner[slug]}
          sizes="50vw"
          placeholder="blur"
          className="rounded-lg shadow-lg"
          alt={`${title} preview banner`}
          quality={95}
        />
      </div>

      <div className="flex flex-col space-y-4">
        <p className="text-lowContrast">{summary}</p>

        <div className="space-x-2">
          <ButtonLink href={`/projects/${slug}`}>Write-up</ButtonLink>
          {liveUrl && (
            <ButtonLink href={liveUrl} className={`umami--click--project-demo-${slug}`} isExternal>
              Demo
            </ButtonLink>
          )}
          {githubRepo && (
            <ButtonLink href={githubRepo} className={`umami--click--project-repository-${slug}`} isExternal>
              Github
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
