import 'twin.macro'

import ContentWrapper from '@components/ContentWrapper'
import { SectionTitle, MoreLink } from './modules'
import BookmarkFrame from '@/components/Bookmarks/Frame'
import { Bookmark } from '@/types'

const RecentBookmarks = ({ bookmarks }: { bookmarks: Bookmark[] }) => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent bookmarks" />
      <BookmarkFrame limit={3} bookmarks={bookmarks} />

      <MoreLink type="bookmarks" />
    </ContentWrapper>
  )
}

export default RecentBookmarks
