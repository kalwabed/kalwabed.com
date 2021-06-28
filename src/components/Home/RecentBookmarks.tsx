import 'twin.macro'

import ContentWrapper from '../ContentWrapper'
import { SectionTitle, MoreLink } from './modules'
import BookmarkFrame from '../Bookmarks/Frame'
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
