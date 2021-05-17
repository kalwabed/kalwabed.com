import tw from 'twin.macro'

import app from '@/config/app'
import Card from './modules/Card'

export interface SocialProps {
  href: string
  type: 'twitter' | 'github' | 'linkedIn' | 'instagram' | 'email' | 'website'
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
  },
  {
    type: 'website',
    href: app.siteUrl
  }
]

const CardWrapper = tw.div`
w-full
space-y-2
py-3
h-full
bg-white dark:bg-dark
background-image[url(/static/polygon-scatter-haikei.svg)]
`

const LinkList = () => {
  return (
    <CardWrapper>
      {socials.map(social => (
        <Card key={social.type} href={social.href} type={social.type} />
      ))}
    </CardWrapper>
  )
}

export default LinkList
