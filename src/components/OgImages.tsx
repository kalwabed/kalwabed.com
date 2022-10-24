interface OgImageProps {
  title: string
  desc: string
}

export const KalwabedOgImage = (props: Omit<OgImageProps, 'desc'>) => {
  const { title } = props

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflow: 'hidden'
      }}
    >
      <svg
        id="visual"
        style={{ position: 'absolute' }}
        viewBox="0 0 800 400"
        width="800"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="800" height="400" fill="#141716"></rect>
        <path
          d="M370 0L367.2 8.3C364.3 16.7 358.7 33.3 358.2 50C357.7 66.7 362.3 83.3 350 100C337.7 116.7 308.3 133.3 291.2 150C274 166.7 269 183.3 265.8 200C262.7 216.7 261.3 233.3 261.3 250C261.3 266.7 262.7 283.3 268.3 300C274 316.7 284 333.3 277.8 350C271.7 366.7 249.3 383.3 238.2 391.7L227 400L0 400L0 391.7C0 383.3 0 366.7 0 350C0 333.3 0 316.7 0 300C0 283.3 0 266.7 0 250C0 233.3 0 216.7 0 200C0 183.3 0 166.7 0 150C0 133.3 0 116.7 0 100C0 83.3 0 66.7 0 50C0 33.3 0 16.7 0 8.3L0 0Z"
          fill="#191d1b"
        ></path>
        <path
          d="M281 0L276.8 8.3C272.7 16.7 264.3 33.3 256.5 50C248.7 66.7 241.3 83.3 246 100C250.7 116.7 267.3 133.3 272.5 150C277.7 166.7 271.3 183.3 259.3 200C247.3 216.7 229.7 233.3 227.8 250C226 266.7 240 283.3 239.8 300C239.7 316.7 225.3 333.3 221.2 350C217 366.7 223 383.3 226 391.7L229 400L0 400L0 391.7C0 383.3 0 366.7 0 350C0 333.3 0 316.7 0 300C0 283.3 0 266.7 0 250C0 233.3 0 216.7 0 200C0 183.3 0 166.7 0 150C0 133.3 0 116.7 0 100C0 83.3 0 66.7 0 50C0 33.3 0 16.7 0 8.3L0 0Z"
          fill="#202523"
        ></path>
        <path
          d="M175 0L169 8.3C163 16.7 151 33.3 141 50C131 66.7 123 83.3 127.8 100C132.7 116.7 150.3 133.3 162.3 150C174.3 166.7 180.7 183.3 179.7 200C178.7 216.7 170.3 233.3 162.2 250C154 266.7 146 283.3 143.5 300C141 316.7 144 333.3 151 350C158 366.7 169 383.3 174.5 391.7L180 400L0 400L0 391.7C0 383.3 0 366.7 0 350C0 333.3 0 316.7 0 300C0 283.3 0 266.7 0 250C0 233.3 0 216.7 0 200C0 183.3 0 166.7 0 150C0 133.3 0 116.7 0 100C0 83.3 0 66.7 0 50C0 33.3 0 16.7 0 8.3L0 0Z"
          fill="#282d2b"
        ></path>
        <path
          d="M106 0L98.5 8.3C91 16.7 76 33.3 72.2 50C68.3 66.7 75.7 83.3 81.2 100C86.7 116.7 90.3 133.3 93 150C95.7 166.7 97.3 183.3 91.5 200C85.7 216.7 72.3 233.3 72.7 250C73 266.7 87 283.3 94 300C101 316.7 101 333.3 104 350C107 366.7 113 383.3 116 391.7L119 400L0 400L0 391.7C0 383.3 0 366.7 0 350C0 333.3 0 316.7 0 300C0 283.3 0 266.7 0 250C0 233.3 0 216.7 0 200C0 183.3 0 166.7 0 150C0 133.3 0 116.7 0 100C0 83.3 0 66.7 0 50C0 33.3 0 16.7 0 8.3L0 0Z"
          fill="#303633"
        ></path>
      </svg>

      <div tw="flex flex-col w-full h-full max-w-lg ml-auto">
        <p tw="text-white text-5xl text-right font-bold ml-auto mt-32 mr-16" style={{ color: '#ECEEED' }}>
          {title}
        </p>
        <div tw="flex items-center ml-auto mt-auto mb-8 mr-16">
          <span style={{ backgroundColor: '#00C99E' }} tw="p-2 rounded-full mr-2 shadow-xl"></span>
          <p tw="text-white font-semibold" style={{ color: '#99A29E' }}>
            kalwabed.xyz
          </p>
        </div>
      </div>
    </div>
  )
}

export const PenaOgImage = (props: OgImageProps) => {
  const { title, desc } = props

  return (
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
        tw="flex justify-center text-center items-center w-full px-4 py-12 max-w-2xl mx-auto text-white text-4xl font-semibold rounded shadow-lg border"
        style={{
          background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
        }}
      >
        {title}
      </div>

      <div tw="text-gray-400 text-center max-w-xl mt-auto mx-auto px-8 py-12">{desc}</div>
    </div>
  )
}
