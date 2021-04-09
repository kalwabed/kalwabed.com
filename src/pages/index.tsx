import 'twin.macro'
import Head from 'next/head'
import NextLink from '@/components/ui/NextLink'

export default function Home() {
  return (
    <div tw="min-h-screen padding[0 0.5rem] flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextLink href="#" label="Show more &gt;&gt;" />
    </div>
  )
}
