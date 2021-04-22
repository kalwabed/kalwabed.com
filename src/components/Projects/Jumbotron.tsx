import tw from 'twin.macro'
import Image from 'next/image'

import Button from '@/components/ui/Button'
import { TechBadge } from './module'
import { GithubIcon, LiveIcon } from '@/components/ui/Icons'
import { memo } from 'react'

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

interface JumbotronProps {
  banner: string
  title: string
  techs: string[]
  liveUrl?: string
  githubRepo?: string
}

const Jumbotron = (props: JumbotronProps) => {
  const { banner, techs, title, githubRepo, liveUrl } = props

  return (
    <JumbotronWrapper>
      <div tw="flex flex-col justify-center items-center">
        <div tw="w-full h-full md:h-52 lg:h-80 overflow-hidden bg-gray-800">
          <Image
            tw="opacity-50 hover:opacity-100 transition bg-gray-300"
            alt={`Banner image for ${title}`}
            src={banner}
            height={640}
            width={1368}
          />
        </div>
        <Card>
          <CardCol>
            <h1 tw="text-3xl font-bold">{title}</h1>
            <div tw="grid grid-cols-2 gap-2 xl:(flex flex-row space-x-2 gap-0)">
              {techs.map(tech => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
            <div tw="inline-flex space-x-4">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <LiveButton title="Live url">
                    <LiveIcon /> <span>Live</span>
                  </LiveButton>
                </a>
              )}

              {githubRepo && (
                <a href={githubRepo} target="_blank" rel="noopener noreferrer">
                  <GithubButton title="Project Github repository">
                    <GithubIcon /> <span>Github</span>
                  </GithubButton>
                </a>
              )}
            </div>
          </CardCol>
        </Card>
      </div>
    </JumbotronWrapper>
  )
}

export default memo(Jumbotron)
