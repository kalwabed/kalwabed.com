import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const hasDesc = searchParams.has('desc')
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Default Title'
    const desc = hasDesc ? searchParams.get('desc')?.slice(0, 100) : ''

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: '#fff'
          }}
        >
          <div tw="flex w-full p-10 mb-2 items-center justify-between">
            <div tw="flex items-center">
              <img
                src="https://pena.kalwabed.xyz/_app/immutable/assets/logo-42e77582.jpg"
                width="30"
                height="30"
                tw="rounded-full shadow"
              />
              <span tw="ml-2 text-xl">Pena</span>
            </div>

            <div tw="text-gray-400 mt-auto px-10 py-4">pena.kalwabed.xyz</div>
          </div>

          <div
            tw="flex justify-center items-center w-full px-4 py-12 max-w-2xl mx-auto text-white text-4xl font-semibold rounded shadow-lg border"
            style={{
              background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
            }}
          >
            {title}
          </div>

          <div tw="text-gray-400 text-center max-w-xl mt-auto mx-auto px-8 py-12">{desc}</div>
        </div>
      ),
      {
        width: 800,
        height: 400
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
