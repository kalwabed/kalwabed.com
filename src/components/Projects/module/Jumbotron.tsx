import tw from 'twin.macro'
import Image from 'next/image'

import Button from '@/components/ui/Button'
import { TechBadge } from '.'
import { GithubIcon, LiveIcon } from '@/components/ui/Icons'

const JumbotronWrapper = tw.section`
pt-1
pb-4
max-w-full
flex
flex-col
`

const Card = tw.div`
border
border-gray-300
bg-white
rounded-md
relative
p-6
bottom-20
w-9/12
md:w-1/3
shadow-lg
`

const CardCol = tw.div`
flex
flex-col
justify-center
items-center
space-y-4
`

const LiveButton = tw(Button)`
bg-secondary-600
hocus:bg-secondary-500
space-x-1
p-4
focus:(ring-offset-secondary-300 ring-secondary-200)
`

const GithubButton = tw(Button)`
bg-gray-600
hocus:bg-gray-500
space-x-1
p-4
focus:(ring-offset-gray-300 ring-gray-200)
`

const Jumbotron = () => {
  return (
    <JumbotronWrapper>
      <div tw="flex flex-col justify-center items-center">
        <div tw="w-full h-full md:h-52 lg:h-80 overflow-hidden bg-gray-800">
          <Image
            tw="opacity-50 hover:opacity-100 transition bg-gray-300"
            alt="tuantanah"
            src="/static/tuantanah.png"
            height={640}
            width={1368}
          />
        </div>
        <Card>
          <CardCol>
            <h1 tw="text-3xl font-bold">TuanTanah</h1>
            <div tw="inline-flex space-x-2">
              {[1, 2, 3].map(key => (
                <TechBadge key={key} text="React" />
              ))}
            </div>
            <div tw="inline-flex space-x-4">
              <LiveButton>
                <LiveIcon /> <span>Live</span>
              </LiveButton>
              <GithubButton>
                <GithubIcon /> <span>Github</span>
              </GithubButton>
            </div>
          </CardCol>
        </Card>
      </div>
    </JumbotronWrapper>
  )
}

export default Jumbotron
