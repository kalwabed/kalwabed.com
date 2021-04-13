import tw from 'twin.macro'

const Badge = tw.span`
px-2.5
py-1
font-medium
text-sm
rounded-full
text-white
bg-blue-600
`

const TechBadge = ({ text }) => {
  return <Badge>{text}</Badge>
}

export default TechBadge
