import type { GetStaticProps } from 'next'

import BookmarksPageRenderer from '@/components/Bookmarks'
import { Bookmarks } from '@/types'

const BookmarksPage = ({ bookmarks }: { bookmarks: Bookmarks[] }) => {
  return <BookmarksPageRenderer bookmarks={bookmarks} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { NOTION_API, NOTION_TABLE_ID } = process.env
  const bookmarks = await (await fetch(`${NOTION_API}/${NOTION_TABLE_ID}`)).json()

  return { props: { bookmarks }, revalidate: 10 }
}

export default BookmarksPage
