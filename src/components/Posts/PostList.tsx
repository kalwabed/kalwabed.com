import 'twin.macro'

import { Card } from './module'

const PostList = () => {
  return (
    <div tw="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {[1, 2, 3].map(key => (
        <Card key={key} />
      ))}
    </div>
  )
}

export default PostList
