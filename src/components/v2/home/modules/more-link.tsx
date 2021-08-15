import 'twin.macro'

import ButtonLink from '@components/v2/shared/button-link'

interface MoreLinkProps {
  type: 'projects' | 'posts'
}

const MoreLink = (props: MoreLinkProps) => {
  const { type } = props
  switch (type) {
    case 'posts':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <ButtonLink className="umami--click--more-posts" title="More posts" href="/posts">
            More posts
          </ButtonLink>
        </div>
      )

    case 'projects':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <ButtonLink className="umami--click--more-projects" title="More projects" href="/projects">
            More projects
          </ButtonLink>
        </div>
      )

    default:
      return <div></div>
  }
}

export default MoreLink
