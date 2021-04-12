import tw from 'twin.macro'

import NextLink from '../ui/NextLink'
import { ContentWrapper, SectionTitle } from './module'

const RecentBookmarks = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent bookmarks" />
      <div tw="flex w-full h-full">
        <div tw="bg-gray-100 shadow border w-full rounded-sm">
          <div tw="bg-white border w-full top-2 left-2 rounded-sm flex flex-col p-3 relative">
            {[1, 2, 3].map(key => (
              <div css={[tw`flex space-x-3 py-3`, key > 1 && tw`border-t`]} key={key}>
                <img src="/static/aku.jpg" alt="" tw="object-cover h-10 w-10 md:(h-12 w-12) rounded-full" />
                <div tw="flex flex-col">
                  <NextLink label="Lorem ipsum is not lorem" href="https://sds,com" css={[tw`text-lg md:text-xl`]} />
                  <small tw="text-sm text-gray-500">css-tricks.com</small>
                  <p tw="text-sm tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia sed similique facilis doloribus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div tw="flex justify-center items-baseline mx-auto">
        <NextLink label="More bookmarks" href="/bookmarks" />
      </div>
    </ContentWrapper>
  )
}

export default RecentBookmarks
