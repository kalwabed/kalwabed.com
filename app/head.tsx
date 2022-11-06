const RootHead = () => {
  // Because OG images must have a absolute URL, we use the
  // `VERCEL_URL` environment variable to get the deployment’s URL.
  // More info:
  const appDeploymentOgUrl = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL + '/api/og' : '/api/og'
  const defaultOgImg = appDeploymentOgUrl + '?title=Home'

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content="Web developer based in Yogyakarta, Indonesia." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kalwabedrzk" />
      <meta name="twitter:creator" content="@kalwabedrzk" />
      <meta property="og:description" content="Web developer based in Yogyakarta, Indonesia." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="kalwabed.xyz" />
      <meta name="keywords" content="kalwabed rizki, kalwabed, rizki, portfolio, blog, developer" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/static/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <title>Kalwabed Rizki</title>
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content="Kalwabed Rizki" />
      <meta property="og:url" content="https://www.kalwabed.xyz/" />
      <meta property="og:image" content={defaultOgImg} />
      <meta property="og:image:alt" content="Home page" />
      <link rel="canonical" href="https://www.kalwabed.xyz/" />
    </>
  )
}

export default RootHead
