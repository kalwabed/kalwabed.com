import { HiX } from 'react-icons/hi'
import TextLink from '~components/shared/text-link'
import NavTransition from './nav-transition'
import { routes } from './top-navigation'

interface MobileNavigationProps {
  setIsMenuOpen: (isMenuOpen: boolean) => void
  isMenuOpen: boolean
}

const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }: MobileNavigationProps) => {
  return (
    <NavTransition isVisible={isMenuOpen}>
      <nav className="w-full">
        <div className="grid grid-rows-1 mb-6">
          <button className="p-2 mx-auto transition rounded outline-none">
            <HiX className="text-highContrast" />
          </button>
        </div>
        <ul className="space-y-4 grid grid-rows-4 gap-6 justify-items-center items-center">
          {routes.map(route => (
            <li key={route.href}>
              <TextLink
                variant="ghost"
                className={`text-xl umami--click--NAV-${route.label}`}
                onClick={() => setIsMenuOpen(false)}
                title={route.label}
                href={route.href}
              >
                {route.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </nav>
    </NavTransition>
  )
}

export default MobileNavigation
