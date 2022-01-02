const Divider = ({ isCenter = false }) => {
  if (isCenter) {
    return (
      <div className="flex items-center justify-center mx-auto">
        <div className="h-0.5 w-16 bg-appBorder" />
      </div>
    )
  }

  return <div className="h-0.5 w-16 bg-appBorder" />
}

export default Divider
