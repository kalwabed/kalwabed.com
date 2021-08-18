import 'twin.macro'
import Link from 'next/link'

import CollaborationSection from '@components/v2/layout/collaboration-section'
import Divider from '../shared/divider'

const footerLinks = [
  {
    href: '/resources',
    label: 'Resources',
    title: 'Resourcess page'
  },
  {
    href: '/rss.xml',
    label: 'RSS',
    title: 'RSS feed'
  }
]

const PageFooter = () => {
  return (
    <footer tw="bg-subtleAppBg mt-20 pb-10 border-t border-appBorder">
      <CollaborationSection />
      <div tw="mt-4">
        <div tw="flex justify-center items-center space-y-10 flex-col">
          <Divider />
          <div tw="flex justify-between space-x-5">
            {footerLinks.map(route => (
              <Link href={route.href} key={route.href} passHref>
                <a
                  tw="transition text-lowContrast hocus:text-opacity-60"
                  className={`umami--click--FOOTER-${route.label}`}
                  title={route.title}
                >
                  {route.label}
                </a>
              </Link>
            ))}
          </div>
          <p tw="text-sm tracking-wide leading-relaxed text-center text-lowContrast">
            © 2021-present Kalwabed Rizki. <br tw="md:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
