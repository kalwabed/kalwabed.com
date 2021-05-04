import Image from 'next/image'
import { memo } from 'react'

const Logo = () => {
  return <Image src="/static/logo-black.svg" width={120} height={30} alt="kalwabed.xyz logo" />
}

export default memo(Logo)
