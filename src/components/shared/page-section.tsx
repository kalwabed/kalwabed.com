interface Props {
  title: string
  subTitle: string
}

const PageSection = ({ title, subTitle }: Props) => {
  return (
    <section className="space-y-2 flex flex-col justify-center items-center w-full">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lowContrast text-lg text-center">{subTitle}</p>
    </section>
  )
}

export default PageSection
