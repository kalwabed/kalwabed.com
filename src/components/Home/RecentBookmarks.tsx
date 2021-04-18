import 'twin.macro'

import ContentWrapper from '../ContentWrapper'
import { SectionTitle, MoreLink } from './module'
import BookmarkFrame from '../Bookmarks/Frame'

const RecentBookmarks = () => {
  return (
    <ContentWrapper>
      <SectionTitle title="Recent bookmarks" />
      <BookmarkFrame limit={3} />

      <MoreLink type="bookmarks" />
    </ContentWrapper>
  )
}

export default RecentBookmarks
