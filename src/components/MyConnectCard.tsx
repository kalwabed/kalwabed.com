import 'twin.macro'
import Image from 'next/image'
import { FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'

import MyIcon from '@/assets/me-icon.png'
import app from '@/config/app'

const MyConnectCard = () => {
  return (
    <section tw="w-full md:w-2/3 lg:w-1/2 mt-32 mb-4 mx-auto h-56 md:h-48 p-6 bg-iconBg dark:bg-slate rounded text-black">
      <div tw="flex flex-col">
        <div tw="flex">
          <div tw="w-24 relative bottom-16 md:bottom-20 overflow-hidden rounded-full">
            <Image src={MyIcon} height={185} placeholder="blur" tw="rounded-full" />
          </div>
          <h1 tw="ml-8 relative -top-5 tracking-wide font-bold capitalize text-xl md:text-2xl lg:text-3xl dark:text-white">
            let's build something together
          </h1>
        </div>

        <p tw="relative bottom-8 text-slate dark:text-gray-300 md:bottom-14 text-lg md:text-xl">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>

        <div tw="flex items-center relative bottom-4 text-slate dark:text-gray-300 md:bottom-10 space-x-3">
          <a
            href={`mailto:${app.email}`}
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
            tw="hover:(opacity-80 transition)"
          >
            <FiMail tw="w-6 h-6" />
          </a>
          <a
            href={app.socials.Twitter}
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            tw="hover:(opacity-80 transition)"
          >
            <FiTwitter tw="w-6 h-6" />
          </a>
          <a
            href={app.socials.LinkedIn}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            tw="hover:(opacity-80 transition)"
          >
            <FiLinkedin tw="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyConnectCard
