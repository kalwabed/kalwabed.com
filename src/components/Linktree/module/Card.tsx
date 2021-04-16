import 'twin.macro'

import { GithubIcon } from '@/components/ui/Icons'

// TODO: create dynamic cards depend on the type (e.g twitter, github, etc)
const Card = () => {
  return (
    <div tw="flex flex-col justify-center items-center space-y-4 pt-2">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        title="Github profile"
        tw="p-4 w-1/2 bg-gray-700 text-white rounded-sm inline-flex space-x-2 items-center hocus:(bg-gray-600 shadow-lg) shadow-md transition focus:(ring outline-none ring-primary-400)"
      >
        <GithubIcon /> <p tw="font-medium">Github</p>
      </a>
    </div>
  )
}

export default Card
