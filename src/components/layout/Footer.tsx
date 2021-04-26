import tw from 'twin.macro'

import { Container } from '@/utils/styles'
import NextLink from '../ui/NextLink'

const footerLinks = [
  {
    href: '/rss.xml',
    label: 'RSS',
    title: 'RSS feed'
  },
  {
    href: '/linktree',
    label: 'Linktree',
    title: 'Where you can contact me'
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    title: 'My bookmark list'
  }
]

const Footer = () => {
  return (
    <footer css={[Container, tw`mt-4 border-t`]}>
      <div tw="flex justify-center items-center space-y-2 flex-col">
        <div tw="flex justify-between space-x-5">
          {footerLinks.map(route => (
            <NextLink href={route.href} key={route.href} title={route.title}>
              {route.label}
            </NextLink>
          ))}
        </div>
        <p tw="text-sm tracking-wide leading-relaxed text-center">
          © 2021-present Kalwabed Rizki. <br tw="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
