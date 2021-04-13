import NextLink from '@/components/ui/NextLink'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

const Wrapper = tw.div`
overflow-hidden
shadow-md
hover:shadow-lg
transition-shadow
duration-200
ease-in-out
rounded
w-72
h-80
md:w-80
m-auto
bg-gray-100
`

const Card = () => {
  return (
    <Wrapper>
      <div tw="flex flex-col w-full h-full">
        <Image src="/static/tuantanah.png" width={320} height={150} alt="tuantanah" />
        <div tw="p-4 space-y-2">
          <Link href="/projects">
            <a>
              <h4 tw="text-xl font-medium hocus:underline">Tuantanah</h4>
            </a>
          </Link>

          <p tw="font-light text-gray-500 tracking-wide">
            Lorem ipsum dolor sit adipisicing elit. consectetur, adipisicing elit.
          </p>

          <NextLink href="/projects" title="My project" withIcon>
            Visit project
          </NextLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Card
