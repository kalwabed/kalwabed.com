import PageFooter from './page-footer'
import TopNavigation from './top-navigation'

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
