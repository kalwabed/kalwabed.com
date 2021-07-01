import tw from 'twin.macro'
import Image from 'next/image'

import { Container } from '@/utils/styles'
import NextLink from '../ui/NextLink'
import CollaborationSection from '@/components/layout/CollaborationSection'
import Wave from '@/assets/wave-haikei.svg'

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
    <footer tw="background-color[#151718] mt-20">
      <CollaborationSection />
      <div css={[Container, tw`mt-4 `]}>
        <div tw="flex justify-center items-center space-y-2 flex-col">
          <div tw="flex justify-between space-x-5">
            {footerLinks.map(route => (
              <NextLink
                href={route.href}
                className={`umami--click--FOOTER-${route.label}`}
                key={route.href}
                title={route.title}
                css={[tw`text-gray-500 dark:text-gray-500 hocus:text-opacity-60`]}
              >
                {route.label}
              </NextLink>
            ))}
          </div>
          <p tw="text-sm tracking-wide leading-relaxed text-center text-gray-500">
            © 2021-present Kalwabed Rizki. <br tw="md:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
