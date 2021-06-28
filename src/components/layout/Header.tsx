import dynamic from 'next/dynamic'
import tw from 'twin.macro'
import { memo, useState } from 'react'
import { useRouter } from 'next/router'
import { HiOutlineMenu } from 'react-icons/hi'
import Link from 'next/link'

import Logo from './Logo'
import Routes, { NAV_TOTAL } from '@/config/Routes'
import NextLink from '../ui/NextLink'
import { Container } from '@/utils/styles'
import useHeaderVisible from '@/hooks/useHeaderVisible'
import ButtonThemeSwitcher from '../ui/ButtonThemeSwitcher'
import NavTransition from './NavTransition'
import { useAppContext } from '@/AppContext'

const NavMobile = dynamic(() => import('./NavMobile'))

const Header = () => {
  const { asPath } = useRouter()
  const { isMounted } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isVisible = useHeaderVisible()

  return (
    <>
      <NavTransition isVisible={isVisible}>
        <div css={[Container, tw`flex items-center justify-between w-auto`]}>
          <Link href="/" passHref>
            <a
              tw="inline-flex items-center"
              title="kalwabed.xyz Logo"
              aria-label="Logo"
              className="umami--click--headerLogo"
            >
              {isMounted && <Logo />}
            </a>
          </Link>
          <ul tw="hidden md:flex items-center space-x-8">
            {Routes.map(
              (route, index) =>
                index < NAV_TOTAL && (
                  <li key={route.href}>
                    <NextLink
                      variant="header"
                      className={`umami--click--NAV-${route.label}`}
                      title={route.label}
                      isActive={route.href === asPath}
                      href={route.href}
                    >
                      {route.label}
                    </NextLink>
                  </li>
                )
            )}
            {isMounted && <ButtonThemeSwitcher />}
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
      </NavTransition>
      <NavMobile setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} asPath={asPath} />
    </>
  )
}

export default memo(Header)
