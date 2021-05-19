import tw from 'twin.macro'
import { Transition as _Transition } from '@headlessui/react'
import { ClassNames } from '@emotion/react'
import { ReactNode } from 'react'

const MobileWrapper = tw`
fixed
z-20
flex
items-center
justify-center
right-0 left-0 bottom-0 top-0
bg-white
dark:(bg-dark border-primary-500)
border
rounded
`

const DesktopWrapper = tw`fixed
z-20
w-full
backdrop-filter[saturate(180%) blur(10px)]`

interface NavProps {
  children: ReactNode
  isVisible: boolean
  isMobile?: boolean
}

// ref: https://github.com/ben-rogerson/twin.macro/issues/349

const NavTransition = ({ children, isVisible, isMobile }: NavProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        // @ts-ignore
        <_Transition
          show={isVisible}
          css={isMobile ? MobileWrapper : DesktopWrapper}
          enter={css(tw`transition-opacity duration-200`)}
          enterFrom={css(tw`opacity-0`)}
          enterTo={css(tw`opacity-100`)}
          leave={css(tw`transition-opacity duration-200`)}
          leaveFrom={css(tw`opacity-100`)}
          leaveTo={css(tw`opacity-0`)}
        >
          {children}
        </_Transition>
      )}
    </ClassNames>
  )
}

export default NavTransition
