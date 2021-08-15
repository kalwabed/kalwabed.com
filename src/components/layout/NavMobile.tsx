import tw from 'twin.macro'
import Link from 'next/link'
import { memo } from 'react'
import { HiX } from 'react-icons/hi'

import ButtonThemeSwitcher from '../ui/ButtonThemeSwitcher'
import NextLink from '../ui/NextLink'
import Logo from './Logo'
import NavTransition from './NavTransition'
import { useAppContext } from '@/AppContext'
import { routes } from '@components/v2/layout/top-navigation'

const ButtonClose = tw.button`
p-2
mx-auto
transition
rounded
focus:(outline-none)
`

const RouteItems = tw.ul`
space-y-4
grid grid-rows-5
gap-6
justify-items-center
items-center
`

type NavMobileProps = {
  setIsMenuOpen: (arg: boolean) => void
  isMenuOpen: boolean
  asPath: string
}

const NavMobile = ({ setIsMenuOpen, asPath, isMenuOpen }: NavMobileProps) => {
  const { isMounted } = useAppContext()
  return (
    <NavTransition isVisible={isMenuOpen}>
      <nav>
        <div tw="grid grid-rows-2 gap-4 mb-4">
          <Link href="/" passHref>
            <a tw="inline-flex items-center" className="umami--click--headerLogo" onClick={() => setIsMenuOpen(false)}>
              <Logo />
            </a>
          </Link>
          <ButtonClose aria-label="Close menu" title="Close menu" onClick={() => setIsMenuOpen(false)}>
            <HiX />
          </ButtonClose>
        </div>
        <RouteItems>
          {routes.map(route => (
            <li key={route.href}>
              <NextLink
                variant="header"
                css={tw`focus:(ring-0 ring-offset-0)`}
                onClick={() => setIsMenuOpen(false)}
                title={route.label}
                isActive={route.href === asPath}
                href={route.href}
                className={`umami--click--NAV-${route.label}`}
              >
                {route.label}
              </NextLink>
            </li>
          ))}
          {isMounted && <ButtonThemeSwitcher />}
        </RouteItems>
      </nav>
    </NavTransition>
  )
}

export default memo(NavMobile)
