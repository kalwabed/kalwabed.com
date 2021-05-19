import tw from 'twin.macro'
import Link from 'next/link'
import { memo } from 'react'

import Routes, { NAV_TOTAL } from '@/config/Routes'
import ButtonThemeSwitcher from '../ui/ButtonThemeSwitcher'
import { XCloseIcon } from '../ui/Icons'
import NextLink from '../ui/NextLink'
import Logo from './Logo'

const Wrapper = tw.div`
fixed
z-30
flex
items-center
justify-center
right-0 left-0 bottom-0 top-0
bg-white
dark:(bg-dark border-primary-500)
border
rounded
`

const ButtonClose = tw.button`
p-2
mx-auto
transition
rounded
hocus:(bg-gray-200 dark:bg-slate)
focus:(outline-none ring)
`

const RouteItems = tw.ul`
space-y-4
grid grid-rows-5
gap-6
justify-items-center
items-center
`

const NavModal = ({ setIsMenuOpen, asPath }: { setIsMenuOpen: (arg0: boolean) => void; asPath: string }) => (
  <Wrapper>
    <nav>
      <div tw="grid grid-rows-2 gap-4 mb-4">
        <Link href="/" passHref>
          <a tw="inline-flex items-center" className="umami--click--headerLogo" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </a>
        </Link>
        <ButtonClose aria-label="Close menu" title="Close menu" onClick={() => setIsMenuOpen(false)}>
          <XCloseIcon />
        </ButtonClose>
      </div>
      <RouteItems>
        {Routes.map(
          (route, index) =>
            index < NAV_TOTAL && (
              <li key={route.href}>
                <NextLink
                  variant="header"
                  onClick={() => setIsMenuOpen(false)}
                  title={route.label}
                  isActive={route.href === asPath}
                  href={route.href}
                  className={`umami--click--NAV-${route.label}`}
                >
                  {route.label}
                </NextLink>
              </li>
            )
        )}
        <ButtonThemeSwitcher />
      </RouteItems>
    </nav>
  </Wrapper>
)

export default memo(NavModal)
