const TechList = ({ techs }: { techs: string[] }) => {
  return <>{techs.map((tech, index) => (index ? ', ' : '') + tech)}</>
}

export default TechList
