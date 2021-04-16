import 'twin.macro'
import Card from './module/Card'

const LinkList = () => {
  return (
    <div tw="w-full space-y-2 mt-5 h-full bg-white background-image[url(/static/web/polygon-scatter-haikei.svg)]">
      {[1, 2, 3].map(key => (
        <Card key={key} />
      ))}
    </div>
  )
}

export default LinkList
