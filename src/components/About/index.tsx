import tw from 'twin.macro'
import Image from 'next/image'

import ContentWrapper from '@/components/ContentWrapper'
import MyPicture from '@/assets/about-me.jpg'
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
        <Image src={MyPicture} tw="rounded-full" placeholder="blur" alt="My picture" />
      </ImgWrapper>
      <Description />
      <div aria-label="Divider" tw="w-16 h-0.5 rounded bg-slate opacity-20 dark:opacity-50 mx-auto"></div>
      <Links />
    </ContentWrapper>
  )
}

export default AboutPageRenderer
