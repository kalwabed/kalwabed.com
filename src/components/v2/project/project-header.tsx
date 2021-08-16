import 'twin.macro'

import { Project } from '@/types'
import { Container } from '../shared/container'
import TextLink from '../shared/text-link'

const ProjectHeader = ({ project }: { project: Project }) => {
  const { description, liveUrl, githubRepo, title, techs } = project

  return (
    <div tw="w-full py-20 md:py-28 bg-subtleAppBg">
      <div css={[Container]}>
        <section tw="w-full lg:w-3/4 space-y-10">
          <h1 tw="text-5xl font-bold">{title}</h1>
          <p tw="text-lowContrast">{description}</p>
        </section>

        <div tw="grid grid-cols-3 md:grid-cols-4 gap-7">
          <section>
            <h2 tw="font-bold text-lg">Tech stacks</h2>
            {techs.map(tech => (
              <p key={tech}>{tech}</p>
            ))}
          </section>

          {githubRepo && (
            <section>
              <h2 tw="font-bold text-lg">Source code</h2>
              <TextLink isExternal href={githubRepo}>
                Github
              </TextLink>
            </section>
          )}

          {liveUrl && (
            <section>
              <h2 tw="font-bold text-lg">Website</h2>
              <TextLink isExternal href={liveUrl}>
                Live
              </TextLink>
            </section>
          )}

          <section>
            <h2 tw="font-bold text-lg">Status</h2>
            <p>Actively maintenance</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectHeader
