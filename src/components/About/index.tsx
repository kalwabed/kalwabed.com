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
shadow-2xl
bg-slate
rounded-xl
`

const AboutPageRenderer = () => {
  return (
    <ContentWrapper>
      <PageSectionTitle text="About" />
      <ImgWrapper>
        <Image src="/static/me.jpg" width={100} height={120} tw="rounded-xl" alt="My picture" />
      </ImgWrapper>
      <Description />
      <Links />
    </ContentWrapper>
  )
}

export default AboutPageRenderer
