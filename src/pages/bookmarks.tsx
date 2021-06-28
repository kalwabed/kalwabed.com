import type { GetStaticProps } from 'next'

import BookmarksPageRenderer from '@/components/Bookmarks'
import { Bookmark } from '@/types'
import { getDatabases } from '@/lib/notion'

const BookmarksPage = ({ bookmarks }: { bookmarks: Bookmark[] }) => {
  return <BookmarksPageRenderer bookmarks={bookmarks} />
}

export const getStaticProps: GetStaticProps = async () => {
  const bookmarks = await getDatabases()

  return { props: { bookmarks }, revalidate: 3 }
}

export default BookmarksPage
