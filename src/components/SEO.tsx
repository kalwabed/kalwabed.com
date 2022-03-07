import { NextSeo, NextSeoProps, DefaultSeo, ArticleJsonLd, SocialProfileJsonLd } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'
import { useRouter } from 'next/router'

import app from '~config/app'

const twitterUsername = '@' + app.socials.Twitter.split('/')[3]
// TODO: try change this og image to a something workable for SEO
const defaultOgImg =
  'https://i.microlink.io/https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Ddracula%26p%3DFAHgfMAEkgMglgOwNZWpAFgJwKYDMBeAcgwBdSAHAZwC4B6OvAe0VKoDoBzJpzgGxwBDCvA4BjJgFs6YqlQBMAfjyDJ8PgE8CAMXhZBAagDCTACY4aAd05kAAgGYADI4DcAFmcuA7M6JpouHzEVKQaAlQYODikftB0ENAg2gIAHv6QVCkEAN7Z6dB4qQAiejhipPAsNJBEEnwArpKIRAA0%252BZAAVvUh8HgaJqw4rNW1Q6Q4WK3tgnzwnIgAkuOStDViYxNT6OgARpwjAMTyABzyAIL2AGxb25AUfNUArG23d1hPL7c7TFjm75AAAwAjI4KCkMkxZqZIAASbIAR3qEw07DqPwAvgDPttvr8JgAlQSmeDdapudLo9FoBLoJKpaZUYiRImbdqZHJ5V7QChMKjwCpVGqCHZUSH1cY3V6kJgUaqXRzY24CPCkD7taDEqj3QQaEaFHApSW3GZzRbLVajQaTRXbSzwUykDAjEGOACksVulPSNO2dINPtuIAAKgbSOr0OzcuHtvdqvIbVzNdrdTUkLNEDgALQ7PhMMTII1cyDMVgAZXgAC8LJB5Aro%252BgS6RtKp1CmiLp9JATOZC1y0f9EcjUZCfgnXumcAAJHBzMjOjzu%252BteosB17IGaWYU4UzsFIaCvhkB0EMpUir9AIpFYFEUQSOyAAMgfMBPYaL0BCYRwHPrGtEyZGNMkCzHM8wLMdbkbcsqzjOt3wbFgmxbTQRg7QQuzMHBe1eftDjweR8Pwj0i2XLlz22OhLyHW9HSpIsj1fMA6MDOhkn9dIjzYlIIA4rjIEERlakQsYiAyLJcjtB0nSIF13RaE15iWHAVhoS1xmtLoej6AZxmGIgQkELAYkpc8QAWSRBE4HBw0jTl30kx1qicOD3wsrBOCQfFZ1VSBHhcotcT%252BQliVJIgAE4IrBYjPWY14qCwMQmXIah6DoQQADc70MjgPMdeodm6CYJEGVhh2keo6DcMLLg8S5HjcRR0oINxoriUzXxs8S7KLBynRqWTsIQstK2rIgPCiiCCkQgB1GcbB85zJuLRDmzUFCajQjCeyW3CagOQiCPkVr0FI7ZyMgKjr3YCpSAEWLaWPUMA041IeN9LiGWIZgmHU47bPDHk%252BQFRARmFUUGglCDvnIKQyX8pV8B855wyTPgdT1VJBoUs1lItdYrUG3rnWcRdXlOyBTK486QAABUMyz9AoDB63%252B%252BC-y1NG2yAjNs1zfNBu2RtZu8uH4aLKCRuqIEvCWqbWFW1tUL0dDuyw2XIF2oh9sOoj1dR9Gan1Q11expSVLWDZJiXe6zvrP1uN-SBZp2SBzHSnBcwoCZIB2ATt0gJBIAWRBTBYHA%252BUEO3WNew86Dp-ROEZjBTOj9jfVTh3EgziAjzAIA%26color%3D%252300C99E%26title%3DFrontend%2BDeveloper%26query%3D%2522%2522%26path%3Dnull%23'

const defaultSeoConfig: NextSeoProps = {
  defaultTitle: 'Kalwabed Rizki',
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
  const titleWithSuffix = asPath === '/' ? 'Kalwabed Rizki • Frontend Developer' : `${title} • Kalwabed Rizki`

  return (
    <>
      <NextSeo
        canonical={url}
        openGraph={{
          url,
          title: titleWithSuffix,
          description,
          images: [{ url: defaultOgImg, alt: 'kalwabed.xyz default og-image' }],
          ...openGraph
        }}
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
