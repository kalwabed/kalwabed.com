import tw from 'twin.macro'

import { EmailIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/ui/Icons'
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
focus:(ring outline-none ring-primary-400)
`

const Card = ({ href, type }: SocialProps) => {
  switch (type) {
    case 'github':
      return (
        <div tw="flex flex-col justify-center items-center space-y-4 pt-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="Github profile"
            css={[tw`bg-gray-700 hocus:bg-gray-600`]}
          >
            <GithubIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </div>
      )

    case 'instagram':
      return (
        <div tw="flex flex-col justify-center items-center space-y-4 pt-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram profile"
            css={[tw`bg-pink-500 hocus:bg-pink-400`]}
          >
            <InstagramIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </div>
      )

    case 'linkedIn':
      return (
        <div tw="flex flex-col justify-center items-center space-y-4 pt-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn profile"
            css={[tw`bg-blue-500 hocus:bg-blue-400`]}
          >
            <LinkedInIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </div>
      )

    case 'twitter':
      return (
        <div tw="flex flex-col justify-center items-center space-y-4 pt-2">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter profile"
            css={[tw`bg-blue-600 hocus:bg-blue-500`]}
          >
            <TwitterIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </div>
      )

    case 'email':
      return (
        <div tw="flex flex-col justify-center items-center space-y-4 pt-2">
          <Link
            href={`mailto:${href}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter profile"
            css={[tw`bg-gray-500 hocus:bg-gray-400`]}
          >
            <EmailIcon /> <p tw="font-medium capitalize">{type}</p>
          </Link>
        </div>
      )
    default:
      return <div></div>
  }
}

export default Card
