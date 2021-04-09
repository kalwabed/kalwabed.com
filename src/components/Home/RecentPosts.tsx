import 'twin.macro'
import tw from 'twin.macro'
import NextLink from '../ui/NextLink'

const RecentPosts = () => {
  return (
    <div tw="flex flex-col items-start px-4 md:px-14 lg:px-28 xl:px-64 space-y-2">
      <span tw="font-bold text-sm">Recent posts</span>

      <div tw="px-1 md:px-6 lg:px-20 xl:px-16 flex flex-col space-y-5">
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
    </div>
  )
}

export default RecentPosts
