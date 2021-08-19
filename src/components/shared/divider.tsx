import 'twin.macro'

const Divider = ({ isCenter = false }) => {
  if (isCenter) {
    return (
      <div tw="flex items-center justify-center mx-auto">
        <div tw="h-0.5 w-16 bg-appBorder" />
      </div>
    )
  }

  return <div tw="h-0.5 w-16 bg-appBorder" />
}

export default Divider
