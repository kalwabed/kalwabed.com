import tw from 'twin.macro'

import NextLink from '../ui/NextLink'
import dateFormatter from '@/utils/dateFormatter'
import toKebabCase from '@/utils/toKebabCase'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const baseRepo = 'https://github.com/kalwabed/kalwabed.xyz/blob/main/_posts/'

const NextPostButton = tw(Button)`
w-full h-14 md:h-16
bg-transparent
hocus:(bg-gray-100 dark:bg-slate)
text-black
dark:(text-white border-gray-600)
border-gray-200 border`

const PostFooter = ({ slug, updatedAt, title }) => {
  return (
    <div tw="w-full space-y-8">
      <div tw="flex flex-col space-y-3">
        <div tw="inline-flex space-x-2">
          <p tw="italic text-gray-500">Last updated:</p>
          <time dateTime={dateFormatter(updatedAt).ISO}>{dateFormatter(updatedAt).formatted}</time>
        </div>

        <div>
          <NextLink
            href={baseRepo.concat(slug, '.mdx')}
            title="Github repo"
            className={`umami--click--editOnGithub-${toKebabCase(title)}`}
          >
            Edit on Github
          </NextLink>
        </div>
      </div>

      <div tw="flex items-center space-x-4">
        <Link href="/posts" passHref>
          <a tw="w-2/5" title="Back to posts page">
            <NextPostButton>
              <svg tw="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Back</span>
            </NextPostButton>
          </a>
        </Link>

        <Link href="/posts" passHref>
          <a tw="w-full" title="To Departing From PHP post">
            <NextPostButton>
              <div tw="flex flex-col items-start truncate">
                <p tw="opacity-70">Next post</p>
                <p tw="font-semibold text-lg">Departing from PHP</p>
              </div>
            </NextPostButton>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostFooter
