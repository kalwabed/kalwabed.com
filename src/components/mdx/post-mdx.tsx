interface PostImageProps {
  image?: string
  label?: string
}

export const PostImage: React.FC<PostImageProps> = props => {
  const { image, label } = props

  return (
    <figure className="flex flex-col mx-auto justify-center items-center space-y-1 my-8">
      <div className="w-full overflow-hidden shadow rounded">
        <a href={image} rel="noopener referrer noreferrer" target="_blank">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={image}
            alt={label || 'Image'}
            width={100}
            height={100}
            className="rounded w-full bg-subtleAppBg"
            decoding="async"
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

export const Update: React.FC<UpdateProps> = ({ content, title }) => {
  return (
    <div className="relative p-6 mt-3 rounded-md mb-6 space-y-2 bg-subtleAppBg border-l-4 border-bdr-idle shadow">
      <strong>{title}</strong>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
