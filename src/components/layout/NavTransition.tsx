import tw from 'twin.macro'
import { Transition as _Transition } from '@headlessui/react'
import { ClassNames } from '@emotion/react'
import { ReactNode } from 'react'

const MobileWrapper = tw`

`

const DesktopWrapper = tw`fixed
z-20
w-full
backdrop-filter[saturate(180%) blur(10px)]`

interface NavProps {
  children: ReactNode
  isVisible: boolean
}

// ref: https://github.com/ben-rogerson/twin.macro/issues/349

const NavTransition = ({ children, isVisible }: NavProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        // @ts-ignore
        <_Transition
          show={isVisible}
          css={MobileWrapper}
          enter={css(tw`transition-opacity duration-200`)}
          enterFrom={css(tw`opacity-0`)}
          enterTo={css(tw`opacity-100`)}
          leave={css(tw`transition-opacity duration-200`)}
          leaveFrom={css(tw`opacity-100`)}
          leaveTo={css(tw`opacity-0`)}
          as="header"
        >
          {children}
        </_Transition>
      )}
    </ClassNames>
  )
}

export default NavTransition
