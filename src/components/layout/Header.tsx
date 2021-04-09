import 'twin.macro'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Logo from './Logo'
import Routes from '@/config/Routes'
import NextLink from '../ui/NextLink'
import { LayoutWrapper } from '@/utils/styles'

const navTotal = 4
const XIcon = (
  <svg tw="w-5 text-gray-600" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
    />
  </svg>
)
const hamburgerIcon = (
  <svg tw="w-5 text-gray-600" viewBox="0 0 24 24">
    <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
    <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
    <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
  </svg>
)

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
                    <NextLink variant="header" isActive={route.href === asPath} {...route} />
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
              {hamburgerIcon}
            </button>
            {isMenuOpen && <NavModal setIsMenuOpen={setIsMenuOpen} asPath={asPath} />}
          </div>
        </div>
      </div>
    </header>
  )
}

const NavModal = ({ setIsMenuOpen, asPath }: { setIsMenuOpen: (boolean) => void; asPath: string }) => (
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
          {XIcon}
        </button>
      </div>
      <nav>
        <ul tw="space-y-4">
          {Routes.map(
            (route, index) =>
              index < navTotal && (
                <li key={route.href}>
                  <NextLink variant="header" isActive={route.href === asPath} {...route} />
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
