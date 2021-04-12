import 'twin.macro'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from './Logo'
import Routes from '@/config/Routes'
import NextLink from '../ui/NextLink'
import { LayoutWrapper } from '@/utils/styles'
import { Hamburger, XClose } from '../ui/Icons'

const navTotal = 4

const Header = () => {
  const { asPath } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div css={[LayoutWrapper]}>
        <div tw="relative flex items-center justify-between">
          <Link href="/" passHref>
            <a tw="inline-flex items-center" title="kalwabed.com Logo" aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <ul tw="hidden md:flex items-center space-x-8">
            {Routes.map(
              (route, index) =>
                index < navTotal && (
                  <li key={route.href}>
                    <NextLink variant="header" title={route.label} isActive={route.href === asPath} href={route.href}>
                      {route.label}
                    </NextLink>
                  </li>
                )
            )}
          </ul>

          <div tw="md:hidden">
            <button
              tw="p-2 -mr-1 transition duration-200 rounded focus:(outline-none ring)"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Hamburger />
            </button>
            {isMenuOpen && <NavModal setIsMenuOpen={setIsMenuOpen} asPath={asPath} />}
          </div>
        </div>
      </div>
    </header>
  )
}

const NavModal = ({ setIsMenuOpen, asPath }: { setIsMenuOpen: (arg0: boolean) => void; asPath: string }) => (
  <div tw="absolute top-0 left-0 w-full">
    <div tw="p-5 bg-white border rounded shadow-sm">
      <div tw="flex items-center justify-between mb-4">
        <Link href="/" passHref>
          <a tw="inline-flex items-center">
            <Logo />
          </a>
        </Link>
        <button
          tw="p-2 -mt-2 -mr-2 transition rounded hocus:(bg-gray-200) focus:(outline-none ring)"
          aria-label="Close menu"
          title="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <XClose />
        </button>
      </div>
      <nav>
        <ul tw="space-y-4">
          {Routes.map(
            (route, index) =>
              index < navTotal && (
                <li key={route.href}>
                  <NextLink variant="header" title={route.label} isActive={route.href === asPath} href={route.href}>
                    {route.label}
                  </NextLink>
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
