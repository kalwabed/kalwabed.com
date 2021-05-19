import tw from 'twin.macro'

import { SearchProps } from '../PostsHeader'

const Input = tw.input`
rounded
flex-1
appearance-none
border border-gray-300
w-full
py-2 px-4
text-gray-700
placeholder-gray-400
shadow-sm
transition
dark:(border-gray-500 text-gray-300 bg-slate)
focus:(outline-none ring-2 ring-primary-400 border-transparent)
`

const SearchPost = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props

  return (
    <div tw="relative">
      <Input
        onChange={e => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search post by title"
        value={searchValue}
        className="umami--focus--search-posts"
      />
    </div>
  )
}

export default SearchPost
