import 'twin.macro'

import Image from 'next/image'

const Contents = () => {
  return (
    <>
      <div tw="w-full md:w-3/4 space-y-3">
        <h1 tw="text-4xl font-bold">Head 1</h1>
        <p tw="leading-relaxed tracking-wider text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit distinctio quidem nihil reprehenderit explicabo
          aliquam consectetur quis, dolores doloremque voluptates, culpa qui repudiandae molestiae rerum saepe facere!
          Provident, veniam maiores?
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
    </>
  )
}

export default Contents
