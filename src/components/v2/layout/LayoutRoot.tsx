import PageFooter from './PageFooter'
import TopNavigation from './TopNavigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <>
      <TopNavigation />
      {children}
      <PageFooter />
    </>
  )
}

export default LayoutRoot
