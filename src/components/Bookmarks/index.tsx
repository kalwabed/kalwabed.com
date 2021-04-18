import 'twin.macro'

import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import SEO from '../SEO'
import PageSectionTitle from '../PageSectionTitle'
import BookmarkFrame from './Frame'
import { Bookmarks } from '@/types'

const BookmarksPageRenderer = ({ bookmarks }: { bookmarks: Bookmarks[] }) => {
  return (
    <section css={[Container]}>
      <PageSectionTitle text="Bookmarks" description="List of my personal recommendations" />
      <SEO title="Bookmarks" />
      <div tw="w-full h-full py-4">
        <ContentWrapper>
          <BookmarkFrame bookmarks={bookmarks} />
        </ContentWrapper>
      </div>
    </section>
  )
}

export default BookmarksPageRenderer
