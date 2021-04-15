import 'twin.macro'
import PageSectionTitle from '../PageSectionTitle'
import { SearchPost } from './module'

const PostsHeader = () => {
  return (
    <div tw="flex flex-col justify-center items-center pb-8">
      <div tw="w-full md:w-3/4 space-y-4">
        <PageSectionTitle text="Posts" />
        <SearchPost />
      </div>
    </div>
  )
}

export default PostsHeader
