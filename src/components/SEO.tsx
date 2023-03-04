import { useRouter } from 'next/router'
import { ArticleJsonLd, DefaultSeo, NextSeo, NextSeoProps, SocialProfileJsonLd } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'

import app from '~config/app'

const twitterUsername = '@' + app.socials.Twitter.split('/')[3]
// Because OG images must have a absolute URL, we use the
// `VERCEL_URL` environment variable to get the deployment’s URL.
// More info:
const appDeploymentOgUrl = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL + '/api/og' : '/api/og'
const defaultOgImg = appDeploymentOgUrl + '?title=Home'

const defaultSeoConfig: NextSeoProps = {
  defaultTitle: 'Kalwabed Rizki',
  description: app.description,
  canonical: app.siteUrl,
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'kalwabed rizki, kalwabed, rizki, portfolio, blog, developer'
    }
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
    title: 'Kalwabed Rizki',
    type: 'website',
    images: [
      {
        url: defaultOgImg,
        alt: 'kalwabed.xyz og-image'
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

interface SEOProps {
  isPost?: boolean
  title: string
  description?: string
  openGraph?: OpenGraph
}

const SEO = (props: SEOProps) => {
  const { asPath } = useRouter()
  const { title, description, isPost, openGraph } = props
  const url = app.siteUrl + asPath
  const titleWithSuffix = asPath === '/' ? 'Kalwabed Rizki' : `${title} • Kalwabed Rizki`

  return (
    <>
      <NextSeo
        canonical={url}
        openGraph={{
          url,
          title: titleWithSuffix,
          description,
          images: [{ url: appDeploymentOgUrl + `?title=${encodeURI(title)}`, alt: `${title} page` }],
          ...openGraph
        }}
        title={titleWithSuffix}
      />

      {isPost ? (
        <ArticleJsonLd
          url={url}
          authorName="Kalwabed Rizki"
          datePublished={openGraph?.article?.publishedTime ?? new Date().toISOString()}
          description={description ?? ''}
          images={[appDeploymentOgUrl + `?title=${title}`]}
          title={title}
          dateModified={openGraph?.article?.modifiedTime}
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
