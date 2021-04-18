import tw from 'twin.macro'

import { Bookmarks } from '@/types'
import BookmarkCard from './BookmarkCard'

const CardWrapper = tw.div`
bg-white
border
w-full
top-2
left-2
rounded-sm
flex
flex-col
p-3
relative
`

interface Props {
  bookmarks: Bookmarks[]
  limit?: number
}

const BookmarkFrame = ({ limit = null, bookmarks }: Props) => {
  const formattedBookmarks = limit ? bookmarks.slice(0, limit) : bookmarks

  return (
    <div tw="flex w-full h-full">
      <div tw="bg-gray-100 shadow border w-full rounded-sm">
        <CardWrapper>
          {formattedBookmarks.map(bookmark => (
            <BookmarkCard {...bookmark} key={bookmark.url} />
          ))}
        </CardWrapper>
      </div>
    </div>
  )
}

export default BookmarkFrame
