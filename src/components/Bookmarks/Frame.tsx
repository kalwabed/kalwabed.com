import 'twin.macro'

import BookmarkCard from './BookmarkCard'

const BookmarkFrame = ({ limit = null }) => {
  const data = [1, 2, 3, 4, 5, 6, 8, 7]
  const formattedData = limit ? data.slice(0, limit) : data

  return (
    <div tw="flex w-full h-full">
      <div tw="bg-gray-100 shadow border w-full rounded-sm">
        <div tw="bg-white border w-full top-2 left-2 rounded-sm flex flex-col p-3 relative">
          {formattedData.map(key => (
            <BookmarkCard title={key} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookmarkFrame
