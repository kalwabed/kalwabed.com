import '~styles/tailwind.css'
import Script from 'next/script'

import { DefaultSEO } from '~components/SEO'
import LayoutRoot from '~components/layout/layout-root'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={process.env.NEXT_PUBLIC_UMAMI_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      />
      <DefaultSEO />
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  )
}
