import Image from 'next/image'

interface PostImageProps {
  image: string
  label?: string
}

export const PostImage = (props: PostImageProps) => {
  const { image, label } = props

  return (
    <figure className="flex flex-col mx-auto justify-center items-center space-y-1 my-8">
      <div className="w-full overflow-hidden shadow rounded">
        <a href={image} rel="noopener noreferrer" target="_blank">
          <Image
            src={image}
            alt={label || 'Image'}
            sizes="50vw"
            width={100}
            height={100}
            className="rounded w-full bg-subtleAppBg"
          />
        </a>
      </div>
      <figcaption className="text-sm">{label}</figcaption>
    </figure>
  )
}

interface UpdateProps {
  content: string
  title: string
}

export const Update = ({ content, title }: UpdateProps) => {
  return (
    <div className="relative p-6 mt-3 rounded-md mb-6 space-y-2 bg-subtleAppBg border-l-4 border-bdr-idle shadow">
      <strong>{title}</strong>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
