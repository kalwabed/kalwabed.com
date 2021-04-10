import 'twin.macro'

import { HomeContentWrapper } from '@/utils/styles'
import NextLink from '../ui/NextLink'
import SectionTitle from './module/SectionTitle'

const RecentPosts = () => {
  return (
    <section css={[HomeContentWrapper]}>
      <SectionTitle title="Recent posts" />
      {[1, 2, 3].map(n => (
        <div tw="flex flex-col space-y-1 lg:pr-12" key={n}>
          <p>13 April 2002</p>
          <NextLink size="xl" href="/posts/a" label="While you can hear the code" />
          <p tw="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto omnis blanditiis quo ullam.
          </p>
        </div>
      ))}

      <div tw="flex justify-center items-center mx-auto">
        <NextLink label="More posts" href="/posts" />
      </div>
    </section>
  )
}

export default RecentPosts
