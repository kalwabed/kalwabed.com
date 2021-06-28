import 'twin.macro'

import { Container } from '@/utils/styles'
import ContentWrapper from '../ContentWrapper'
import SEO from '../SEO'
import PageSectionTitle from '../PageSectionTitle'
import BookmarkFrame from './Frame'
import { Bookmark } from '@/types'
import app from '@/config/app'

const BookmarksPageRenderer = ({ bookmarks }: { bookmarks: Bookmark[] }) => {
  return (
    <section css={[Container]}>
      <PageSectionTitle text="Bookmarks" description="List of my personal recommendations" />
      <SEO title={app.pageMeta.bookmarks.pageTitle} description={app.pageMeta.bookmarks.pageDescription} />
      <div tw="w-full h-full py-4">
        <ContentWrapper>
          <BookmarkFrame bookmarks={bookmarks} />
        </ContentWrapper>
      </div>
    </section>
  )
}

export default BookmarksPageRenderer
