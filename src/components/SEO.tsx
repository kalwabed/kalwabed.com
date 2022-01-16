import { NextSeo, NextSeoProps, DefaultSeo, ArticleJsonLd, SocialProfileJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import { memo } from 'react'

import app from '~config/app'

const twitterUsername = '@' + app.socials.Twitter.split('/')[3]
const defaultOgImg =
  'https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Djxnblk%26subtitle%3DWeb%2Bdeveloper%2Bbased%2Bin%2BIndonesia%26title%3Dkalwabed%26logo%3Dhttps%253A%252F%252Fkalwabed.xyz%252Fstatic%252F512.png%26p%3D2gKIPD4KICA8RmxleAogICAgc3g9e3sKICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsCiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywKICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsCiAgICAgIGJnOiBxdWVyeS5iZywKICAgICAgZm9udEZhbWlseTonSW50ZXInLAogICAgICBweDogNSwKICAgIH19CiAgPgogICAgPEltYWdlIHN4PXt7IHdpZHRoOiAnMTI4cHgnIH19IHNyYz17cXVlcnkubG9nb30gLz4KICAgIDxUZXh0CiAgICAgIHN4PXt7CiAgICAgICAgcHk6IDQsCiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsCiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMmVtJywKICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LAogICAgICAgIGZvbnRXZWlnaHQ6IDgwMCwKICAgICAgICBmb250U2l6ZTogNCwKICAgICAgICBjb2xvcjogcXVlcnkuY29sb3IsCiAgICAgIH19CiAgICA-CiAgICAgIHtxdWVyeS50aXRsZX0KICAgIDwvVGV4dD4KICAgIDxUZXh0CiAgICAgIHN4PXt7CiAgICAgICAgZm9udFdlaWdodDogNTAwLAogICAgICAgIGZvbnRTaXplOiAzLAogICAgICAgIGNvbG9yOiBxdWVyeS5jb2xvciwKICAgICAgfX0KICAgID4KICAgICAge3F1ZXJ5LnN1YnRpdGxlfQogICAgPC9UZXh0PgogIDwvRmxleD4KPC8-'

const defaultSeoConfig: NextSeoProps = {
  defaultTitle: 'Kalwabed Rizki • Frontend engineer',
  titleTemplate: '%s • Kalwabed Rizki',
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

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [{ url: defaultOgImg, alt: 'kalwabed.xyz default og-image' }],
          ...props.openGraph
        }}
        {...props}
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

export default memo(SEO)
