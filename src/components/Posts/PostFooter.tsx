import 'twin.macro'

import dateFormatter from '@/utils/dateFormatter'
import NextLink from '../ui/NextLink'
import toKebabCase from '@/utils/toKebabCase'

const baseRepo = 'https://github.com/kalwabed/kalwabed.xyz/blob/main/_posts/'

const PostFooter = ({ slug, updatedAt, title }) => {
  return (
    <div tw="w-full">
      <div tw="flex flex-col space-y-3">
        <div tw="inline-flex space-x-2">
          <p tw="italic text-gray-500">Last updated:</p>
          <time dateTime={dateFormatter(updatedAt).ISO}>{dateFormatter(updatedAt).formatted}</time>
        </div>

        <NextLink
          href={baseRepo.concat(slug, '.mdx')}
          title="Github repo"
          className={`umami--click--editOnGithub-${toKebabCase(title)}`}
        >
          Edit on Github
        </NextLink>
      </div>
    </div>
  )
}

export default PostFooter