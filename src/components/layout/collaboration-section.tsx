import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

import Container from '~components/shared/container'
import appConfig from '~config/app'

const links = [
  {
    label: 'Twitter',
    href: appConfig.socials.Twitter,
    Icon: FiTwitter
  },
  {
    label: 'Instagram',
    href: appConfig.socials.Instagram,
    Icon: FiInstagram
  },
  {
    label: 'Github',
    href: appConfig.socials.Github,
    Icon: FiGithub
  },
  {
    label: 'LinkedIn',
    href: appConfig.socials.LinkedIn,
    Icon: FiLinkedin
  },
  {
    label: 'Email',
    href: 'mailto:'.concat(appConfig.email),
    Icon: FiMail
  }
]

const CollaborationSection = () => {
  return (
    <Container className="md:p-6 my-20 space-y-2 text-highContrast">
      <h1 className="text-5xl font-semibold leading-normal lg:text-6xl lg:leading-relaxed">
        Let&apos;s build something together.
      </h1>
      <p className="text-2xl leading-relaxed">
        Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
      </p>

      <div className="flex items-center space-x-4">
        {links.map(({ label, href, Icon }) => (
          <a
            key={href}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="transition hover:opacity-80 focus:opacity-80"
          >
            <AccessibleIcon.Root label={label}>
              <Icon className="w-6 h-6" />
            </AccessibleIcon.Root>
          </a>
        ))}
      </div>
    </Container>
  )
}

export default CollaborationSection
