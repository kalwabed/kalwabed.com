import tw from 'twin.macro'
import NextLink from '../ui/NextLink'

const Header = tw.h3`
text-2xl
font-bold
`

const Description = tw.small`
text-sm
text-gray-500 dark:text-gray-400
`

const Wrapper = tw.div`
flex flex-col space-y-3
`

const Links = () => {
  return (
    <div tw="flex flex-col space-y-10">
      <Wrapper>
        <div>
          <Header>Linktree</Header>
          <Description>Places where you can find me on the internet</Description>
        </div>
        <NextLink className="umami--click--about-linktree" withIcon href="/linktree" title="My personal Linktree page">
          View my Linktree here
        </NextLink>
      </Wrapper>

      <Wrapper>
        <div>
          <Header>Bookmarks</Header>
          <Description>List of my personal recommendations</Description>
        </div>
        <NextLink
          withIcon
          href="/bookmarks"
          className="umami--click--about-bookmarks"
          title="My personal Bookmark page"
        >
          View my bookmarks here
        </NextLink>
      </Wrapper>
    </div>
  )
}

export default Links
