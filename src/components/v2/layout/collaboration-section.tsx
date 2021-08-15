import 'twin.macro'
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'

import app from '@/config/app'
import { Container } from '../shared/container'

const CollaborationSection = () => {
  return (
    <section css={[Container]} tw="md:p-6 my-20 space-y-2 text-highContrast">
      <h1 tw="text-5xl lg:text-6xl font-semibold leading-normal lg:leading-relaxed">Let's build something together.</h1>
      <p tw="text-2xl leading-relaxed">
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
      </p>
      <div tw="flex items-center space-x-3">
        <a
          href={`mailto:${app.email}`}
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
          tw="hover:(opacity-80 transition)"
        >
          <FiMail tw="w-6 h-6" />
        </a>
        <a
          href={app.socials.Twitter}
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          tw="hover:(opacity-80 transition)"
        >
          <FiTwitter tw="w-6 h-6" />
        </a>
        <a
          href={app.socials.LinkedIn}
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          tw="hover:(opacity-80 transition)"
        >
          <FiLinkedin tw="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}

export default CollaborationSection
