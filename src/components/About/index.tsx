import tw from 'twin.macro'
import Image from 'next/image'

import ContentWrapper from '@/components/ContentWrapper'
import Description from './Description'
import Links from './Links'
import PageSectionTitle from '../PageSectionTitle'

const ImgWrapper = tw.div`
overflow-hidden
w-auto
flex
justify-center
items-center
mx-auto
rounded-full
bg-slate
transition duration-200
ring-4 dark:ring-gray-600 ring-gray-500
ring-offset-2 dark:ring-offset-dark ring-offset-white
`

const AboutPageRenderer = () => {
  return (
    <ContentWrapper>
      <PageSectionTitle text="About" />
      <ImgWrapper>
        <Image src="/static/me bw.jpg" width={150} height={150} tw="rounded-full" alt="My picture" />
      </ImgWrapper>
      <Description />
      <Links />
    </ContentWrapper>
  )
}

export default AboutPageRenderer
