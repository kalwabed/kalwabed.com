import Image from 'next/image'
import tw from 'twin.macro'

import NextLink from '../ui/NextLink'
import { ContentWrapper, SectionTitle, MoreLink } from './module'

const RecentBookmarks = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent bookmarks" />
      <div tw="flex w-full h-full">
        <div tw="bg-gray-100 shadow border w-full rounded-sm">
          <div tw="bg-white border w-full top-2 left-2 rounded-sm flex flex-col p-3 relative">
            {[1, 2, 3].map(key => (
              <div css={[tw`flex space-x-3 py-3`, key > 1 && tw`border-t`]} key={key}>
                <div>
                  <Image src="/static/aku.jpg" alt="static" tw="object-cover rounded-full" width={52} height={52} />
                </div>
                <div tw="flex flex-col">
                  <NextLink title="Lorem ipsum is not lorem" href="https://sds,com" css={[tw`text-lg md:text-xl`]}>
                    Lorem ipsum is not lorem
                  </NextLink>
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

      <MoreLink type="bookmarks" />
    </ContentWrapper>
  )
}

export default RecentBookmarks
