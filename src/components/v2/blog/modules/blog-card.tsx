import Link from 'next/link'
import tw from 'twin.macro'

const _Wrapper = tw.a`
w-full md:w-3/4 lg:w-4/6
bg-subtleAppBg
rounded-sm
transition
border border-v2-borderIdle
shadow-sm
hover:(border-v2-borderHover shadow)
focus:(outline-none ring ring-appBorder)
`

const _Container = tw.div`
py-5
px-4 md:px-8
flex flex-col
justify-center
items-center
w-full
`

const BlogCard = () => {
  return (
    <Link href="/blog/awawak" passHref>
      <_Wrapper className="group">
        <_Container>
          <small tw="text-sm text-lowContrast">Kamis, 14 Agustus 2021</small>
          <div tw="mt-5 mb-7 space-y-2 text-center">
            <h2 tw="text-4xl font-bold transition group-hocus:text-link">Notion as headless CMS</h2>
            <p tw="text-lowContrast tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium, provident nisi dolore ex
              saepe ducimus.
            </p>
          </div>
        </_Container>
      </_Wrapper>
    </Link>
  )
}

export default BlogCard
