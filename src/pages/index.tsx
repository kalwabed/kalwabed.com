import 'twin.macro'

import PageWrapper from '@/components/layout/PageWrapper'
import HomePageRenderer from '@/components/Home'

export default function HomePage() {
  return (
    <PageWrapper pageTitle="Home">
      <HomePageRenderer />
    </PageWrapper>
  )
}
