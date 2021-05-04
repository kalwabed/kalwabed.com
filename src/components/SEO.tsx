import { NextSeo, NextSeoProps, DefaultSeo, ArticleJsonLd, SocialProfileJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import { memo } from 'react'

import app from '@/config/app'

const twitterUsername = '@' + app.socials.Twitter.split('/')[3]

export const ogImgExtract = (text: string) => {
  const newText = encodeURI(text)

  return `https://og-image.wzulfikar.com/i/**${newText}**.png?theme=custom&md=1&fontSize=150px&customBackground=%23000&customForeground=%23fff&customRadial=dimgray&backgroundImage=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1617642171314-276bb7641536%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1400%26q%3D80&images=`
}

const defaultSeoConfig: NextSeoProps = {
  defaultTitle: 'Home',
  titleTemplate: '%s @kalwabed',
  description: app.description,
  canonical: app.siteUrl,
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
    title: 'Home @kalwabed',
    type: 'website',
    images: [
      {
        url:
          'https://og-image.wzulfikar.com/i/**kalwabed.xyz**.png?theme=custom&md=1&fontSize=150px&customBackground=%23000&customForeground=%23fff&customRadial=dimgray&backgroundImage=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1617642171314-276bb7641536%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1400%26q%3D80&images=',
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

const titlePrefix = ' @kalwabed'

interface SEOProps extends NextSeoProps {
  isPost?: boolean
}

const SEO = (props: SEOProps) => {
  const { asPath } = useRouter()
  const { title, isPost } = props
  const url = app.siteUrl + asPath

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title: title + titlePrefix,
          images: [{ url: ogImgExtract(title), alt: title }],
          profile: { firstName: 'Kalwabed', lastName: 'Rizki', gender: 'male', username: 'kalwabed' },
          ...props.openGraph
        }}
        {...props}
      />

      {isPost ? (
        <ArticleJsonLd
          url={url}
          authorName="Kalwabed Rizki"
          datePublished={props.openGraph.article.publishedTime}
          description={props.openGraph.description}
          images={[ogImgExtract(title)]}
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
