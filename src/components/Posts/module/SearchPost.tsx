import tw from 'twin.macro'

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
focus:(outline-none ring-2 ring-primary-400 border-transparent)
`

const SearchPost = () => {
  return (
    <div tw="relative">
      <Input type="text" placeholder="Search post by title" />
    </div>
  )
}

export default SearchPost
