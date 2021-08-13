import tw from 'twin.macro'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { useRouter } from 'next/router'

import { useAppContext } from '@/AppContext'
import Logo from '@components/layout/Logo'
import ThemeSwitcher from './theme-switcher'
import NavMobile from '@components/layout/NavMobile'

export const routes = [
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/projects',
    label: 'Projects'
  },
  {
    href: '/about',
    label: 'About'
  }
]

const NavLink = tw.a`
font-medium
text-lowContrast
transition
py-2
px-2.5
rounded
hover:(bg-v2-hover)
focus:(outline-none ring ring-appBorder bg-v2-active)
`

const TopNavigation = () => {
  const { asPath } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMounted } = useAppContext()

  return (
    <>
      <div tw="backdrop-blur-md backdrop-filter bg-appBg bg-opacity-60  sticky inset-0 border-b border-appBorder z-50">
        <div tw="flex items-center justify-between py-4 px-4 md:px-0 w-full mx-auto max-w-2xl lg:(max-w-screen-lg)">
          <Link href="/" passHref>
            <a tw="inline-flex items-center" title="Kalwabed" aria-label="Logo" className="umami--click--headerLogo">
              {isMounted && <Logo />}
            </a>
          </Link>
          <ul tw="hidden md:flex items-center space-x-3">
            {routes.map(route => (
              <li key={route.href}>
                <Link href={route.href} passHref>
                  <NavLink className={`umami--click--NAV-${route.label}`} title={route.label}>
                    {route.label}
                  </NavLink>
                </Link>
              </li>
            ))}
            {isMounted && <ThemeSwitcher />}
          </ul>

          <div tw="md:hidden">
            <button
              tw="p-2 -mr-1 transition duration-200 rounded focus:(ring outline-none )"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <HiOutlineMenu tw="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <NavMobile setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} asPath={asPath} />
    </>
  )
}

export default TopNavigation
