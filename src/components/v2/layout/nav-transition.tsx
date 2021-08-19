import tw from 'twin.macro'
import { Transition as _Transition } from '@headlessui/react'
import { ClassNames } from '@emotion/react'
import { ReactNode } from 'react'

const WrapperStyle = tw`
fixed
z-20
flex
items-center
justify-center
inset-0
bg-subtleAppBg
`

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
          css={WrapperStyle}
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
