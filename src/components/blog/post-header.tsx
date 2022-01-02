import { Post } from '~types'
import dateFormatter from '~utils/dateFormatter'

const PostHeader = ({ publishedAt, title }: Pick<Post, 'publishedAt' | 'title'>) => {
  return (
    <div className="my-12 md:mt-24 md:mb-16 flex flex-col justify-center mx-auto items-center space-y-3 text-center w-full">
      <time
        className="text-lowContrast"
        dateTime={dateFormatter(publishedAt).ISO}
        title={dateFormatter(publishedAt).utc}
      >
        {dateFormatter(publishedAt).formatted}
      </time>
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  )
}

export default PostHeader
