import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { PostMDXComponents } from '~components/mdx'

const PostContent = ({ content }: { content: MDXRemoteSerializeResult<Record<string, unknown>> }) => {
  return (
    <div className="flex flex-col w-full justify-center">
      <div>
        <article className="prose prose-light mx-auto prose-a:text-link">
          <MDXRemote lazy components={PostMDXComponents} {...content} />
        </article>
      </div>
    </div>
  )
}

export default PostContent
