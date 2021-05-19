import 'twin.macro'

import ContentWrapper from '../ContentWrapper'
import { SectionTitle, MoreLink } from './modules'
import BookmarkFrame from '../Bookmarks/Frame'
import { Bookmarks } from '@/types'

const RecentBookmarks = ({ bookmarks }: { bookmarks: Bookmarks[] }) => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent bookmarks" />
      <BookmarkFrame limit={3} bookmarks={bookmarks} />

      <MoreLink type="bookmarks" />
    </ContentWrapper>
  )
}

export default RecentBookmarks
