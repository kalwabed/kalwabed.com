import { useTheme } from 'next-themes'
import Image from 'next/image'
import { memo } from 'react'

const Logo = () => {
  const { theme } = useTheme()

  if (theme === 'dark') {
    return <Image src="/static/logo-white.svg" width={120} height={30} alt="kalwabed.xyz logo" />
  }
  return <Image src="/static/logo-black.svg" width={120} height={30} alt="kalwabed.xyz logo" />
}

export default memo(Logo)
