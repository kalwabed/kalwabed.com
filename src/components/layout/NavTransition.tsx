import tw from 'twin.macro'
import { Transition as _Transition } from '@headlessui/react'
import { ClassNames } from '@emotion/react'

const Wrapper = tw`
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

const NavTransition = ({ children, isMenuOpen = false }) => {
  return (
    <ClassNames>
      {({ css }) => (
        // @ts-ignore
        <_Transition
          show={isMenuOpen}
          css={Wrapper}
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
