import 'twin.macro'

import dateFormatter from '@/utils/dateFormatter'
import NextLink from '../ui/NextLink'

const PostFooter = ({ githubRepository, updatedAt }) => {
  return (
    <div tw="w-full">
      <div tw="flex flex-col space-y-3">
        <div tw="inline-flex space-x-2">
          <p tw="italic text-gray-500">Last updated:</p>
          <time dateTime={dateFormatter(updatedAt).ISO}>{dateFormatter(updatedAt).formatted}</time>
        </div>

        <NextLink href={githubRepository} title="Github repo">
          Edit on Github
        </NextLink>
      </div>
    </div>
  )
}

export default PostFooter