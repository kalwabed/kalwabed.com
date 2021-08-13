import 'twin.macro'

import Divider from '../shared/divider'

const Bio = () => {
  return (
    <div tw="text-lowContrast w-full md:w-10/12 tracking-wide">
      <div tw="space-y-7 mb-14">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi ab quaerat quis nihil enim aliquam iusto,
          velit sequi aut ipsum dicta, modi ea, reiciendis at itaque officiis consectetur expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magnam doloremque tempore iure adipisci
          animi quasi quibusdam nisi laboriosam inventore!
        </p>
      </div>
      <div tw="space-y-7">
        <Divider isCenter />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magnam doloremque tempore iure adipisci
          animi quasi quibusdam nisi laboriosam inventore!
        </p>
      </div>
    </div>
  )
}

export default Bio
