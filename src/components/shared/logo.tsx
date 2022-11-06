import Image from 'next/image'
import { memo } from 'react'

import WhiteLogo from '~assets/logo-white.png'

const Logo = () => {
  return (
    <Image src={WhiteLogo} sizes="10vw" placeholder="blur" alt="kalwabed.xyz logo" className="umami--click--logo" />
  )
}

export default memo(Logo)
