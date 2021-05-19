import tw from 'twin.macro'
import { memo, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Logo from './Logo'
import Routes, { NAV_TOTAL } from '@/config/Routes'
import NextLink from '../ui/NextLink'
import { Container } from '@/utils/styles'
import { HamburgerIcon } from '../ui/Icons'
import useHeaderVisible from '@/hooks/useHeaderVisible'
import ButtonThemeSwitcher from '../ui/ButtonThemeSwitcher'
import NavModal from './NavModal'

const Header = () => {
  const { asPath } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isVisible = useHeaderVisible()

  return (
    <>
      <motion.header
        tw="fixed z-20 w-full backdrop-filter[saturate(180%) blur(10px)]"
        initial="initial"
        variants={{
          initial: {
            top: 0
          },
          hidden: {
            top: -120
          }
        }}
        animate={isVisible ? 'initial' : 'hidden'}
        transition={{ duration: 0.3 }}
      >
        <div css={[Container, tw`flex items-center justify-between w-auto`]}>
          <Link href="/" passHref>
            <a
              tw="inline-flex items-center"
              title="kalwabed.xyz Logo"
              aria-label="Logo"
              className="umami--click--headerLogo"
            >
              <Logo />
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
            <ButtonThemeSwitcher />
          </ul>

          <div tw="md:hidden">
            <button
              tw="p-2 -mr-1 transition duration-200 rounded focus:(ring outline-none )"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </motion.header>
      <NavModal setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} asPath={asPath} />
    </>
  )
}

export default memo(Header)
