import 'twin.macro'

import ContentWrapper from '../ContentWrapper'
import { SectionTitle, MoreLink, BookmarkCard } from './module'

const RecentBookmarks = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent bookmarks" />
      <div tw="flex w-full h-full">
        <div tw="bg-gray-100 shadow border w-full rounded-sm">
          <div tw="bg-white border w-full top-2 left-2 rounded-sm flex flex-col p-3 relative">
            {[1, 2, 3].map(key => (
              <BookmarkCard title={key} key={key} />
            ))}
          </div>
        </div>
      </div>

      <MoreLink type="bookmarks" />
    </ContentWrapper>
  )
}

export default RecentBookmarks
