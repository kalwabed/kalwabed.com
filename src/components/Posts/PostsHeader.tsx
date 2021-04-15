import 'twin.macro'
import PageSectionTitle from '../PageSectionTitle'
import { SearchPost } from './module'

export interface SearchProps {
  setSearchValue: (searchValue: string) => void
  searchValue: string
}

const PostsHeader = (props: SearchProps) => {
  return (
    <div tw="flex flex-col justify-center items-center pb-8">
      <div tw="w-full md:w-3/4 space-y-4">
        <PageSectionTitle text="Posts" />
        <SearchPost {...props} />
      </div>
    </div>
  )
}

export default PostsHeader
