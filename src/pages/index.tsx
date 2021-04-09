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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis{' '}
        <NextLink href="https://ss.dd" label="Show more &gt;&gt;" /> temporibus quis ipsam commodi, numquam in adipisci
        maxime dolores minima ipsa. Aperiam sit cumque voluptatibus vero quaerat vel delectus molestiae debitis!
      </p>
    </div>
  )
}
