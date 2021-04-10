import { HomeContentWrapper, HomeWrapper } from '@/utils/styles'
import 'twin.macro'
import NextLink from '../ui/NextLink'

const RecentPosts = () => {
  return (
    <section css={[HomeWrapper]}>
      <span tw="font-bold text-sm">Recent posts</span>

      <div css={[HomeContentWrapper]}>
        {[1, 2, 3].map(n => (
          <div tw="flex flex-col space-y-1" key={n}>
            <p>13 April 2002</p>
            <NextLink size="xl" href="/posts/a" label="While you can hear the code" />
            <p tw="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto omnis blanditiis quo ullam.
            </p>
          </div>
        ))}

        <div tw="flex justify-center">
          <NextLink label="More posts" href="/posts" />
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
