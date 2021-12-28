import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <>
      <TopNavigation />
      {children}
    </>
  )
}

export default LayoutRoot
