import tw from 'twin.macro'
import { FiMail, FiLinkedin, FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'

import app from '@/config/app'
import { Container } from '../shared/container'

const _H1 = tw.h1`
text-5xl lg:text-6xl
font-semibold
leading-normal
lg:leading-relaxed
`

const _Link = tw.a`
transition
hocus:opacity-80
`

const links = [
  {
    title: 'Twitter',
    href: app.socials.Twitter,
    Icon: FiTwitter
  },
  {
    title: 'Instagram',
    href: app.socials.Instagram,
    Icon: FiInstagram
  },
  {
    title: 'Github',
    href: app.socials.Github,
    Icon: FiGithub
  },
  {
    title: 'LinkedIn',
    href: app.socials.LinkedIn,
    Icon: FiLinkedin
  },
  {
    title: 'Email',
    href: 'mailto'.concat(app.email),
    Icon: FiMail
  }
]

const CollaborationSection = () => {
  return (
    <section css={[Container]} tw="md:p-6 my-20 space-y-2 text-highContrast">
      <_H1>Let's build something together.</_H1>
      <p tw="text-2xl leading-relaxed">
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
      </p>
      <div tw="flex items-center space-x-4">
        {links.map(({ Icon, href, title }) => (
          <_Link key={title} href={href} title={title} target="_blank" rel="noopener noreferrer">
            <Icon tw="w-6 h-6" />
          </_Link>
        ))}
      </div>
    </section>
  )
}

export default CollaborationSection
