import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

import { KalwabedOgImage, PenaOgImage } from '~components/OgImages'

export const config = {
  runtime: 'experimental-edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const defaultWidth = 800
    const defaultHeight = 400

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const hasDomain = searchParams.has('domain')
    const hasDesc = searchParams.has('desc')
    const domain = hasDomain ? searchParams.get('domain')?.slice(0, 100) : 'kalwabed.xyz'
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Default Title'
    const desc = hasDesc ? searchParams.get('desc')?.slice(0, 100) : ''

    if (domain === 'pena') {
      return new ImageResponse(<PenaOgImage desc={desc} title={title} />, {
        width: defaultWidth,
        height: defaultHeight
      })
    }

    return new ImageResponse(<KalwabedOgImage title={title} />, {
      width: defaultWidth,
      height: defaultHeight
    })
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
