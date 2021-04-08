import 'twin.macro'
import Head from 'next/head'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div tw="min-h-screen padding[0 0.5rem] flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="padding[5rem 0] flex-1 flex flex-col justify-center items-center">
        <h1 tw="m-0 leading-relaxed text-7xl text-center">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            tw="hover:underline focus:underline active:underline text-blue-500 no-underline items-center"
          >
            Next.js!
          </a>
        </h1>

        <p tw="leading-6 text-2xl items-center">
          Get started by editing <code tw="bg-gray-300 rounded text-lg p-3 font-mono">pages/index.js</code>
        </p>

        <div tw="flex items-center justify-center flex-wrap max-w-4xl mt-12 flex-col w-full md:(flex-row)">
          <a
            href="https://nextjs.org/docs"
            tw="m-4 flex-basis[45%] p-6 text-left no-underline border border-gray-200 border-solid rounded-xl transition hocus:(text-blue-500 border-blue-500)"
          >
            <h3 tw="m-0 text-xl">Documentation &rarr;</h3>
            <p tw="text-lg leading-relaxed">Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            tw="m-4 flex-basis[45%] p-6 text-left no-underline border border-gray-200 border-solid rounded-xl transition hocus:(text-blue-500 border-blue-500)"
          >
            <h3 tw="m-0 text-xl">Learn &rarr;</h3>
            <p tw="text-lg leading-relaxed">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            tw="m-4 flex-basis[45%] p-6 text-left no-underline border border-gray-200 border-solid rounded-xl transition hocus:(text-blue-500 border-blue-500)"
          >
            <h3 tw="m-0 text-xl">Examples &rarr;</h3>
            <p tw="text-lg leading-relaxed">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            tw="m-4 flex-basis[45%] p-6 text-left no-underline border border-gray-200 border-solid rounded-xl transition hocus:(text-blue-500 border-blue-500)"
          >
            <h3 tw="m-0 text-xl leading-relaxed">Deploy &rarr;</h3>
            <p tw="text-lg leading-relaxed">Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer tw="w-full h-28 border border-t border-solid border-gray-200 flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          tw="flex justify-center items-center"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" tw="ml-2 height[1em]" />
        </a>
      </footer>
    </div>
  )
}
