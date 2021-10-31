import { memo } from 'react'
import Image from 'next/image'

import WhiteLogo from '~assets/logo-white.png'

const Logo = () => {
  return <Image src={WhiteLogo} placeholder="blur" alt="kalwabed.xyz logo" />
}

export default memo(Logo)
