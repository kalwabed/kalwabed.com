import ButtonLink from '~components/shared/button-link'

const MoreLink = ({ type }: { type: 'posts' | 'projects' }) => {
  switch (type) {
    case 'posts':
      return (
        <div className="flex justify-center items-center mx-auto">
          <ButtonLink href="/blog" className="umami--click--more-posts" title="More posts">
            More posts
          </ButtonLink>
        </div>
      )

    case 'projects':
      return (
        <div className="flex justify-center items-center mx-auto">
          <ButtonLink href="/projects" className="umami--click--more-projects" title="More projects">
            More projects
          </ButtonLink>
        </div>
      )

    default:
      break
  }
}

export default MoreLink
