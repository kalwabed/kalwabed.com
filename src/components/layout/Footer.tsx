import 'twin.macro'

import { LayoutWrapper } from '@/utils/styles'
import NextLink from '../ui/NextLink'

const footerLinks = [
  {
    href: '/rss.xml',
    label: 'RSS'
  },
  {
    href: '/linktree',
    label: 'Linktree'
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks'
  }
]

const Footer = () => {
  return (
    <footer css={[LayoutWrapper]}>
      <div tw="flex justify-center items-center space-y-2 flex-col">
        <div tw="flex justify-between space-x-5">
          {footerLinks.map(route => (
            <NextLink {...route} key={route.href} />
          ))}
        </div>
        <p tw="text-sm tracking-wide leading-relaxed">© 2021-present Kalwabed Rizki. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
