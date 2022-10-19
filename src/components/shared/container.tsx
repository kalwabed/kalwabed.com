import { HTMLAttributes } from 'react'

import clsxm from '~lib/clsxm'

const Container: React.FC<HTMLAttributes<HTMLElement>> = ({ children, className, ...props }) => {
  return (
    <section
      className={clsxm(
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
