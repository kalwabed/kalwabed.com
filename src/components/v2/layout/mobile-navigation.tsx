import tw from 'twin.macro'
import { memo } from 'react'
import { HiX } from 'react-icons/hi'

import NavTransition from '@components/v2/layout/nav-transition'
import { useAppContext } from '@/AppContext'
import { routes } from '@components/v2/layout/top-navigation'
import ButtonThemeSwitcher from '../shared/theme-switcher'
import TextLink from '../shared/text-link'

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
}

const MobileNav = ({ setIsMenuOpen, isMenuOpen }: NavMobileProps) => {
  const { isMounted } = useAppContext()

  return (
    <NavTransition isVisible={isMenuOpen}>
      <nav tw="w-full">
        <div tw="grid grid-rows-1 mb-4">
          <ButtonClose aria-label="Close menu" title="Close menu" onClick={() => setIsMenuOpen(false)}>
            <HiX />
          </ButtonClose>
        </div>
        <RouteItems>
          {routes.map(route => (
            <li key={route.href}>
              <TextLink
                variant="ghost"
                styles={tw`focus:(ring-0 ring-offset-0)`}
                onClick={() => setIsMenuOpen(false)}
                title={route.label}
                href={route.href}
                className={`umami--click--NAV-${route.label}`}
              >
                {route.label}
              </TextLink>
            </li>
          ))}
          {isMounted && <ButtonThemeSwitcher />}
        </RouteItems>
      </nav>
    </NavTransition>
  )
}

export default memo(MobileNav)
