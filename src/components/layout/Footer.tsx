import 'twin.macro'
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
    <footer tw="max-w-xl mx-auto px-4 py-5 md:(max-w-full px-24) lg:(max-w-screen-xl px-8)">
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
