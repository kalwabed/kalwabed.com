import type { GetStaticProps } from 'next'

import BookmarksPageRenderer from '@/components/Bookmarks'
import { Bookmarks } from '@/types'
import bookmarkProvider from '@/utils/bookmarkProvider'

const BookmarksPage = ({ bookmarks }: { bookmarks: Bookmarks[] }) => {
  return <BookmarksPageRenderer bookmarks={bookmarks} />
}

export const getStaticProps: GetStaticProps = async () => {
  const bookmarks = await bookmarkProvider()

  return { props: { bookmarks }, revalidate: 5 }
}

export default BookmarksPage
