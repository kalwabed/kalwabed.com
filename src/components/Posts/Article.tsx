import tw from 'twin.macro'
import hydrate from 'next-mdx-remote/hydrate'

import MDXComponents from '../MDXComponents'
import { SyntaxCss } from '@/utils/styles'

const Article = ({ content }) => {
  const hydratedContent = hydrate(content, { components: MDXComponents })
  return <article css={[tw`prose`, SyntaxCss]}>{hydratedContent}</article>
}

export default Article
