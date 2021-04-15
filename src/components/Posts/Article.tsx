import 'twin.macro'
import hydrate from 'next-mdx-remote/hydrate'

const Article = ({ content }) => {
  const hydratedContent = hydrate(content)
  return <article tw="prose">{hydratedContent}</article>
}

export default Article
