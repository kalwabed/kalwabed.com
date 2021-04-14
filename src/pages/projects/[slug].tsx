import 'twin.macro'
import Image from 'next/image'

import { Jumbotron } from '@/components/Projects/module'
import { Container } from '@/utils/styles'
import SEO from '@/components/SEO'

const ProjectPage = () => {
  return (
    <>
      <SEO title="TuanTanah" />
      <Jumbotron />
      <section css={[Container]}>
        <div tw="flex flex-1 justify-center mx-auto bottom-20 relative text-center w-full md:w-3/4">
          <p tw="text-gray-500 tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet dicta facilis, atque odio illo non
            doloremque maiores! Alias eveniet iure sequi dolorum neque quisquam temporibus fuga impedit, ut consequatur?
          </p>
        </div>
        <div tw="w-full md:w-3/4 space-y-3">
          <h1 tw="text-4xl font-bold">Head 1</h1>
          <p tw="leading-relaxed tracking-wider text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit distinctio quidem nihil reprehenderit
            explicabo aliquam consectetur quis, dolores doloremque voluptates, culpa qui repudiandae molestiae rerum
            saepe facere! Provident, veniam maiores?
          </p>
        </div>

        <div tw="flex flex-col justify-center lg:flex-row items-center my-24 space-y-2">
          <div tw="w-full lg:w-1/2 overflow-hidden">
            <Image src="/static/aku.jpg" alt="aku" width={500} height={412} tw="rounded" />
          </div>
          <div tw="w-full lg:w-1/2 space-y-3">
            <h1 tw="text-4xl font-bold">Head 1</h1>
            <p tw="leading-relaxed tracking-wider text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit distinctio quidem nihil reprehenderit
              explicabo aliquam consectetur quis, dolores doloremque voluptates, culpa qui repudiandae molestiae rerum
              saepe facere! Provident, veniam maiores?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectPage
