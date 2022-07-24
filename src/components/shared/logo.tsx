import { memo } from 'react'
import Image from 'next/future/image'

import WhiteLogo from '~assets/logo-white.png'

const Logo = () => {
  return <Image src={WhiteLogo} sizes="10vw" placeholder="blur" alt="kalwabed.xyz logo" />
}

export default memo(Logo)
