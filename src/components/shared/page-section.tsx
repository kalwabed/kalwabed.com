import 'twin.macro'

interface Props {
  title: string
  subTitle: string
}

const PageSection = ({ title, subTitle }: Props) => {
  return (
    <section tw="space-y-2 flex flex-col justify-center items-center w-full">
      <h1 tw="text-5xl font-bold">{title}</h1>
      <p tw="text-lowContrast text-lg">{subTitle}</p>
    </section>
  )
}

export default PageSection
