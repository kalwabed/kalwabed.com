import tw from 'twin.macro'

const Badge = tw.span`
px-2.5
py-1
font-medium
text-sm
rounded-full
text-white
bg-slate
`

const TechBadge = ({ tech }) => {
  return <Badge>{tech}</Badge>
}

export default TechBadge
