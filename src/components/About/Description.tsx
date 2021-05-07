import 'twin.macro'

import app from '@/config/app'
import NextLink from '../ui/NextLink'

const Description = () => {
  return (
    <div tw="leading-relaxed tracking-wider space-y-3">
      <p>
        My name is <b>Kalwabed Rizki</b>. A dreamer, and coffee connoisseur. Loves things related to modern web
        development, Linux, and cybersecurity. Currently working as a frontend engineer at GoStartup.
      </p>
      <p>
        Feel free to reach out if you're looking for a developer, have a question, or just want to connect.{' '}
        <NextLink href={`mailto:${app.email}`} title="My email">
          kalwabedrzk@pm.me
        </NextLink>
      </p>
    </div>
  )
}

export default Description
