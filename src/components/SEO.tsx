import { NextSeo, NextSeoProps, DefaultSeo, ArticleJsonLd, SocialProfileJsonLd } from 'next-seo'
import { useRouter } from 'next/router'

import app from '~config/app'

const twitterUsername = '@' + app.socials.Twitter.split('/')[3]
const defaultOgImg =
  'https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Ddracula%26p%3DDwPgUABBwDIJYDsDWkoQBYCcCmAzAvAOToAuJADgM4BcA9LbgPYImUB0A5o4xwDbYBDcnHYBjRgFtaoypQBMAflwCJcXgE98AMTiYBAagDCjACbZqAdw6kAAgGYADA4DcAFifOA7E8KooOXiJKEnV%252BSnRsbBJfKFpwKGAtfgAPPwhKZPwAbyy0qFwUgBFdbFESOGZqCEJxXgBXCQRCABo8iAArOuC4XHVjFmwWKprBkmxMFraBXjgOBABJMYkaatFR8cm0NAAjDmGAYjkADjkAQTsANk2tiHJeKoBWVpvbzEfnm%252B3GTDM3iAADACMDnIyXSjBmJggABIsgBHOrjdRsWrfAC%252B-w%252BWy%252BP3GACUBCY4F0qq40mi0ah4mhEikppQiBFCRs2hlsrkXlByIxKHBypVqgJtpQIXUxtcXiRGOQqhcHFibvxcCR3m0oETKHcBOphgVsMkJTdprMFksViMBhMFVsLHATCR0MNgQ4AKQxG4UtLUra0-Xem5q6AAFX1JEDUDZOXDaDuVTk1s5Gq1OuqiBmCGwAFptrxGKIkIbORAmCwAMpwABe5ggcnl0fyzBIWhUahThB0eggxjMhc5qL%252BCKRKIh3wTL3T2AAEthZqQne43dHPUX-S8ANLTCxC7BQvGVpBwQPAWgh5IkVdoNrHpJ%252BtLXlLgO83sECBk1RujQjpTI5W32x2EM6brNMacyLNgyzUBaYxWp03S9P0YxDIQwQCJg0QUhewDzBIAgcNggaRhyRYQH%252BDpVI4dYkRAuGYBwiB7tYKoQA8VEkTivwEkSJKEAAnPxoLui8y6cpQmCiIyZBUHQtACAAbgIJBoew9EOnU2xdOM4gDCww5SHUtCuLxFzuBcDyuAocn4K4QloHEV6nmGRZEdGZGOtUQG9lsJYkOWVbDO4gljmgPkAOozkxFFOMFDYsM2qgaMMHYCF2pjYF5aD9gcuByDlOW2VsIlbBeUDwoimDIuUJD8JSLzHo5-r3reT50i8r5EEwjAwQV37soG3K8vyCDDEKIr1OKwVfGQkikmx454MxTyBkmvDarqKQZaBpoQeaayWhlblOk4i7CbVaBYc%252BJXQAACmheF6OQ6DRi51HqiIybDGmiBZjmeYFjFIWNuFs7Me4c0kT5fnVoCngA7FTYtol1TJalPZwxAWXVPseW5XIGVbCta3VHqBro1t4GQas6wTEuZ0vFdCSXfWEDhdsEBmHJ2C5uQ4wQNsr47hAiAQPMCAmMw2C8gI0ZNckV3HrdegcA96BYbQTM%252BurD6oLL4DHiAQA%26color%3D%252300C99E%26title%3DHome'

const defaultSeoConfig: NextSeoProps = {
  defaultTitle: 'Kalwabed Rizki • Frontend engineer',
  description: app.description,
  canonical: app.siteUrl,
  additionalMetaTags: [
    { name: 'keywords', content: 'kalwabed rizki, kalwabed, rizki, portfolio, blog, developer' },
    { name: 'image', content: defaultOgImg }
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/static/icon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/static/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ],
  openGraph: {
    description: app.description,
    locale: 'en-US',
    site_name: 'kalwabed.xyz',
    url: app.siteUrl,
    title: 'Home',
    type: 'website',
    images: [
      {
        width: 1200,
        height: 628,
        url: defaultOgImg,
        alt: 'kalwabed.xyz default og-image'
      }
    ],
    profile: {
      firstName: 'Kalwabed',
      lastName: 'Rizki',
      username: 'kalwabed',
      gender: 'Male'
    }
  },
  twitter: {
    site: twitterUsername,
    handle: twitterUsername,
    cardType: 'summary_large_image'
  }
}

export const DefaultSEO = () => {
  return <DefaultSeo {...defaultSeoConfig} />
}

interface SEOProps extends NextSeoProps {
  isPost?: boolean
}

const SEO = (props: SEOProps) => {
  const { asPath } = useRouter()
  const { title, description, isPost } = props
  const url = app.siteUrl + asPath
  const titleWithSuffix = asPath === '/' ? 'Kalwabed Rizki • Frontend developer' : `${title} • Kalwabed Rizki`

  return (
    <>
      <NextSeo
        canonical={url}
        openGraph={{
          url,
          title: titleWithSuffix,
          description,
          images: [{ url: defaultOgImg, alt: 'kalwabed.xyz default og-image' }],
          ...props.openGraph
        }}
        {...props}
        title={titleWithSuffix}
      />

      {isPost ? (
        <ArticleJsonLd
          url={url}
          authorName="Kalwabed Rizki"
          datePublished={props.openGraph.article.publishedTime}
          description={props.description}
          images={[defaultOgImg]}
          title={title}
          dateModified={props.openGraph.article.modifiedTime}
          publisherName="kalwabed.xyz"
          publisherLogo={app.siteUrl.concat('/static/icon.svg')}
        />
      ) : (
        <SocialProfileJsonLd
          name="Kalwabed Rizki"
          sameAs={Object.values(app.socials)}
          type="Person"
          url={app.siteUrl.concat('/about')}
        />
      )}
    </>
  )
}

export default SEO
