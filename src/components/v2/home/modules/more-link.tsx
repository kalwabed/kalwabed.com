import NextLink from '@/components/v2/shared/NextLink'
import 'twin.macro'

interface MoreLinkProps {
  type: 'projects' | 'bookmarks' | 'posts'
}

const MoreLink = (props: MoreLinkProps) => {
  const { type } = props
  switch (type) {
    case 'posts':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <NextLink className="umami--click--more-posts" title="More posts" href="/posts" type="button">
            More posts
          </NextLink>
        </div>
      )

    case 'projects':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <NextLink className="umami--click--more-projects" title="More projects" href="/projects">
            More projects
          </NextLink>
        </div>
      )

    case 'bookmarks':
      return (
        <div tw="flex justify-center items-center mx-auto">
          <NextLink className="umami--click--more-bookmarks" title="More bookmarks" href="/bookmarks">
            More bookmarks
          </NextLink>
        </div>
      )

    default:
      return <div></div>
  }
}

export default MoreLink
