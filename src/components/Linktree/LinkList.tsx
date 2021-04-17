import 'twin.macro'

import app from '@/config/app'
import Card from './module/Card'

export interface SocialProps {
  href: string
  type: 'twitter' | 'github' | 'linkedIn' | 'instagram' | 'email'
}

const socials: SocialProps[] = [
  {
    type: 'github',
    href: app.socials.Github
  },
  {
    type: 'twitter',
    href: app.socials.Twitter
  },
  {
    type: 'instagram',
    href: app.socials.Instagram
  },
  {
    type: 'linkedIn',
    href: app.socials.LinkedIn
  },
  {
    type: 'email',
    href: app.email
  }
]

const LinkList = () => {
  return (
    <div tw="w-full space-y-2 py-3 h-full bg-white background-image[url(/static/web/polygon-scatter-haikei.svg)]">
      {socials.map(social => (
        <Card key={social.type} href={social.href} type={social.type} />
      ))}
    </div>
  )
}

export default LinkList
