import tw from 'twin.macro'
import hydrate from 'next-mdx-remote/hydrate'

import MDXComponents from '../MDXComponents'
import { PostStyle } from '@/utils/styles'

const Article = ({ content }) => {
  const hydratedContent = hydrate(content, { components: MDXComponents })
  return (
    <div>
      <article css={[tw`prose mx-auto`, PostStyle]}>{hydratedContent}</article>
    </div>
  )
}

export default Article
