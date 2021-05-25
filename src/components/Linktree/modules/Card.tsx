import tw from 'twin.macro'

import { EmailIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, WebsiteIcon } from '@/components/ui/Icons'
import { SocialProps } from '../LinkList'

const Link = tw.a`
p-4
w-3/4
md:w-1/2
text-white
rounded-sm
inline-flex
space-x-2
items-center
hocus:shadow-lg
shadow-md
transition
focus:(ring outline-none ring-brand-400)
`

const LinkWrapper = tw.div`
flex
flex-col
justify-center
items-center
space-y-4
pt-2
`

const Card = ({ href, type }: SocialProps) => {
  switch (type) {
    case 'github':
      return (
        <LinkWrapper>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="Github profile"
            className="umami--click--linktree-github"
            css={[tw`bg-gray-700 hocus:bg-gray-600`]}
          >
            <GithubIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </LinkWrapper>
      )

    case 'instagram':
      return (
        <LinkWrapper>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram profile"
            className="umami--click--linktree-instagram"
            css={[tw`bg-pink-500 hocus:bg-pink-400`]}
          >
            <InstagramIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </LinkWrapper>
      )

    case 'linkedIn':
      return (
        <LinkWrapper>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn profile"
            className="umami--click--linktree-linkedIn"
            css={[tw`bg-blue-500 hocus:bg-blue-400`]}
          >
            <LinkedInIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </LinkWrapper>
      )

    case 'twitter':
      return (
        <LinkWrapper>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter profile"
            className="umami--click--linktree-twitter"
            css={[tw`bg-blue-600 hocus:bg-blue-500`]}
          >
            <TwitterIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </LinkWrapper>
      )

    case 'email':
      return (
        <LinkWrapper>
          <Link
            href={`mailto:${href}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="umami--click--linktree-email"
            css={[tw`bg-gray-500 hocus:bg-gray-400`]}
          >
            <EmailIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </LinkWrapper>
      )

    case 'website':
      return (
        <LinkWrapper>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="My website"
            className="umami--click--linktree-website"
            css={[tw`bg-brand-600 hocus:bg-brand-500`]}
          >
            <WebsiteIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </LinkWrapper>
      )

    default:
      return <div></div>
  }
}

export default Card
