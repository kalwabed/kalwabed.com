import { useTheme } from 'next-themes'
import Image from 'next/image'
import { memo, useEffect, useState } from 'react'

const Logo = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (theme === 'dark') {
    return <Image src="/static/logo-white.svg" width={120} height={30} alt="kalwabed.xyz logo" />
  }
  return <Image src="/static/logo-black.svg" width={120} height={30} alt="kalwabed.xyz logo" />
}

export default memo(Logo)
