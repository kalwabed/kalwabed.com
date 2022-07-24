import { Transition } from '@headlessui/react'

const NavTransition: React.FC<{
  isVisible: boolean
  children: React.ReactNode
}> = ({ isVisible, children }) => {
  return (
    <Transition
      show={isVisible}
      className="fixed z-20 flex items-center justify-center inset-0 bg-subtleAppBg"
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  )
}

export default NavTransition
