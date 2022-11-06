import '~styles/tailwind.css'
import '~styles/global.css'
import '~styles/mdx.css'

import { Inter, Manrope } from '@next/font/google'
import { AppProps } from 'next/app'
import Script from 'next/script'

import LayoutRoot from '~components/layout/layout-root'
import Page from '~components/layout/page'
import { DefaultSEO } from '~components/SEO'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutRoot>
      <Script
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        src={process.env.NEXT_PUBLIC_UMAMI_URL}
        data-do-not-track="true"
      />
      <DefaultSEO />
      <Page>
        <Component {...pageProps} />
      </Page>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
    </LayoutRoot>
  )
}
