import Container from '~components/shared/container'
import TextLink from '~components/shared/text-link'
import { Project } from '~types'

const ProjectHeader = ({ project }: { project: Project }) => {
  const { summary, liveUrl, githubRepo, title, techs, status } = project

  return (
    <div className="w-full py-20 md:py-28 bg-subtleAppBg">
      <Container>
        <section className="w-full space-y-10 lg:w-3/4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-lowContrast tracking-wide">{summary}</p>
        </section>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-7">
          <section>
            <h2 className="font-bold text-lg">Tech stacks</h2>
            {techs.map(tech => (
              <p key={tech}>{tech}</p>
            ))}
          </section>

          {githubRepo && (
            <section>
              <h2 className="font-bold text-lg">Source code</h2>
              <TextLink isExternal href={githubRepo}>
                Github
              </TextLink>
            </section>
          )}

          {liveUrl && (
            <section>
              <h2 className="font-bold text-lg">Website</h2>
              <TextLink isExternal href={liveUrl}>
                Live
              </TextLink>
            </section>
          )}

          <section>
            <h2 className="font-bold text-lg">Status</h2>
            <p>{status}</p>
          </section>
        </div>
      </Container>
    </div>
  )
}

export default ProjectHeader
