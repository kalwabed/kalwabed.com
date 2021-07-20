import 'twin.macro'
import Link from 'next/link'

import CollaborationSection from '@components/v2/layout/CollaborationSection'

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

const PageFooter = () => {
  return (
    <footer tw="background-color[#151718] mt-20">
      <CollaborationSection />
      <div tw="mt-4">
        <div tw="flex justify-center items-center space-y-2 flex-col">
          <div tw="flex justify-between space-x-5">
            {footerLinks.map(route => (
              <Link href={route.href} key={route.href}>
                <a
                  tw="text-gray-500 dark:text-gray-500 hocus:text-opacity-60"
                  className={`umami--click--FOOTER-${route.label}`}
                  title={route.title}
                >
                  {route.label}
                </a>
              </Link>
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

export default PageFooter
