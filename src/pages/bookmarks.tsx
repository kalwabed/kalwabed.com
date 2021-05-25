import type { GetStaticProps } from 'next'

import BookmarksPageRenderer from '@/components/Bookmarks'
import { Bookmarks } from '@/types'
import { getDatabases } from '@/lib/notion'

const BookmarksPage = ({ bookmarks }: { bookmarks: Bookmarks[] }) => {
  return <BookmarksPageRenderer bookmarks={bookmarks} />
}

export const getStaticProps: GetStaticProps = async () => {
  const bookmarks = await getDatabases()

  return { props: { bookmarks }, revalidate: 3 }
}

export default BookmarksPage
