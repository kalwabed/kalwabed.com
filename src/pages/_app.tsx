import '~styles/tailwind.css'
import '~styles/global.css'
import '~styles/mdx.css'

import { DefaultSEO } from '~components/SEO'
import LayoutRoot from '~components/layout/layout-root'
import Page from '~components/layout/page'
import { AppPropsWithLayout } from '~types'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <DefaultSEO />
      {getLayout(
        <LayoutRoot>
          <Page>
            <Component {...pageProps} />
          </Page>
        </LayoutRoot>
      )}
    </>
  )
}
