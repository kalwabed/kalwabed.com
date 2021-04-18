import tw from 'twin.macro'

import NextLink from '@/components/ui/NextLink'

const BookmarkCard = ({ title }) => {
  return (
    <div css={[tw`flex space-x-3 py-3`, title > 1 && tw`border-t`]} key={title}>
      <img
        src="https://developer.mozilla.org/favicon.ico"
        alt="static"
        tw="object-cover rounded-full w-10 h-10 md:(w-12 h-12)"
      />
      <div tw="flex flex-col">
        <NextLink title="Lorem ipsum is not lorem" href="https://sds,com" css={[tw`text-lg md:text-xl`]}>
          Lorem ipsum is not lorem
        </NextLink>
        <small tw="text-sm text-gray-500">kalwabed.com</small>
        <p tw="text-sm tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia sed similique facilis doloribus.
        </p>
      </div>
    </div>
  )
}

export default BookmarkCard
