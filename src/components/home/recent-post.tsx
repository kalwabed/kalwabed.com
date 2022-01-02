import Link from 'next/link'

import dateFormatter from '~utils/dateFormatter'

const RecentPost: React.FC<{ slug: string; publishedAt: string }> = ({ publishedAt, slug, children }) => {
  const formattedDatePublished = dateFormatter(publishedAt)

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full flex items-center space-x-3 md:space-x-10 lg:space-x-12 p-3 transition rounded-sm focus:ring focus:ring-link outline-none hover:bg-subtleAppBg focus:bg-subtleAppBg">
        <time
          className="text-sm text-lowContrast flex-grow-0 flex-shrink-0 basis-[100px]"
          dateTime={formattedDatePublished.ISO}
          title={formattedDatePublished.utc}
        >
          {formattedDatePublished.formatted}
        </time>
        <h3 className="text-xl md:text-2xl font-semibold">{children}</h3>
      </a>
    </Link>
  )
}

export default RecentPost
