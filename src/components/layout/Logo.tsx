import { useTheme } from 'next-themes'
import Image from 'next/image'
import { memo } from 'react'

import WhiteLogo from '@/assets/logo-white.png'
import BlackLogo from '@/assets/logo-black.png'

const Logo = () => {
  const { resolvedTheme } = useTheme()

  if (resolvedTheme === 'dark') {
    return <Image src={WhiteLogo} placeholder="blur" alt="kalwabed.xyz logo" />
  }
  return <Image src={BlackLogo} placeholder="blur" alt="kalwabed.xyz logo" />
}

export default memo(Logo)
