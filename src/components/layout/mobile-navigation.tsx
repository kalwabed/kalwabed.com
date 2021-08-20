import tw from 'twin.macro'
import { memo } from 'react'
import { HiX } from 'react-icons/hi'

import NavTransition from '@components/layout/nav-transition'
import { routes } from '@components/layout/top-navigation'
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
grid grid-rows-4
gap-6
justify-items-center
items-center
`

type NavMobileProps = {
  setIsMenuOpen: (arg: boolean) => void
  isMenuOpen: boolean
}

const MobileNav = ({ setIsMenuOpen, isMenuOpen }: NavMobileProps) => {
  return (
    <NavTransition isVisible={isMenuOpen}>
      <nav tw="w-full">
        <div tw="grid grid-rows-1 mb-6">
          <ButtonClose aria-label="Close menu" title="Close menu" onClick={() => setIsMenuOpen(false)}>
            <HiX tw="text-highContrast" />
          </ButtonClose>
        </div>
        <RouteItems>
          {routes.map(route => (
            <li key={route.href}>
              <TextLink
                variant="ghost"
                styles={tw`text-xl`}
                onClick={() => setIsMenuOpen(false)}
                title={route.label}
                href={route.href}
                className={`umami--click--NAV-${route.label}`}
              >
                {route.label}
              </TextLink>
            </li>
          ))}
        </RouteItems>
      </nav>
    </NavTransition>
  )
}

export default memo(MobileNav)
