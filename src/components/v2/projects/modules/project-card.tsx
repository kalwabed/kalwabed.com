import Image from 'next/image'
import tw from 'twin.macro'

import ButtonLink from '@components/v2/shared/button-link'
import TextLink from '@components/v2/shared/text-link'
import BannerExample from '../assets/banner.png'

const ProjectCard = () => {
  return (
    <section tw="flex flex-col space-y-8">
      <div tw="flex flex-col space-y-1">
        <div>
          <TextLink variant="ghost" href="/" styles={tw`text-4xl`}>
            TuanTanah
          </TextLink>
        </div>
        <div tw="inline-flex items-center space-x-2.5">
          <span tw="w-12 h-1 bg-lowContrast" />{' '}
          <span tw="text-lowContrast tracking-wide">2020 - Typescript, React, Express</span>
        </div>
      </div>

      <div tw="overflow-hidden mx-5 rounded-lg">
        <Image src={BannerExample} placeholder="blur" tw="rounded-lg" alt="TuanTanah preview banner" />
      </div>

      <div tw="flex flex-col space-y-4">
        <p tw="text-lowContrast">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ea! Hic, placeat quaerat dolor voluptatum
          impedit dolorem dolores sequi numquam a itaque voluptas nostrum porro consectetur distinctio quam temporibus,
          quia harum. Voluptatem, architecto eius ab vero dolorum sint quam libero ipsum dolore maxime, enim ipsam ea,
          dignissimos nemo tenetur quia.
        </p>

        <div tw="space-x-2">
          <ButtonLink href="/projects">Write-up</ButtonLink>
          <ButtonLink href="/projects" isExternal>
            Demo
          </ButtonLink>
          <ButtonLink href="/projects" isExternal>
            Github
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard
