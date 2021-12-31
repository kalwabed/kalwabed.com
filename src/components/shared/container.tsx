import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const Container: React.FC<HTMLAttributes<HTMLElement>> = ({ children, className, ...props }) => {
  return (
    <section
      className={clsx(
        'flex flex-col items-start w-full mx-auto px-4 space-y-11 md:px-0 max-w-2xl lg:max-w-screen-lg',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export default Container
