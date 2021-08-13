import 'twin.macro'

import { Container } from '../shared/container'
import BlogList from './blog-list'

const BlogPageRenderer = () => {
  return (
    <div css={[Container]} tw="my-20">
      <section tw="space-y-2 flex flex-col justify-center items-center w-full">
        <h1 tw="text-5xl font-bold">Blog.</h1>
        <p tw="text-lowContrast text-lg">You've find my blog page</p>
      </section>

      <BlogList />
    </div>
  )
}

export default BlogPageRenderer
