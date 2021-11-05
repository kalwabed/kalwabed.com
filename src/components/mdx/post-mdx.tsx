import tw from 'twin.macro'

const PostImageWrapper = tw.figure`
flex flex-col
mx-auto
justify-center
items-center
space-y-1
my-8
`

const ImgLink = tw.a`
w-full
overflow-hidden
outline-none
hover:ring-2
transition
shadow
rounded
before:hidden
`

interface PostImageProps {
  image?: string
  label?: string
}

export const PostImage: React.FC<PostImageProps> = props => {
  const { image, label } = props

  return (
    <PostImageWrapper>
      <ImgLink href={image} rel="noopener noreferrer" target="_blank">
        <img
          decoding="async"
          src={image}
          alt={label || 'image'}
          width={100}
          height={100}
          tw="rounded w-full bg-subtleAppBg"
        />
      </ImgLink>
      <figcaption tw="text-sm">{label}</figcaption>
    </PostImageWrapper>
  )
}

const UpdateWrapper = tw.aside`
relative
p-6
mt-3
rounded-md
mb-6
space-y-2
bg-subtleAppBg
border-l-4
border-bdr-idle
shadow
`

interface UpdateProps {
  content: string
  title: string
}

export const Update: React.FC<UpdateProps> = props => {
  return (
    <UpdateWrapper>
      <strong>{props.title}</strong>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </UpdateWrapper>
  )
}
