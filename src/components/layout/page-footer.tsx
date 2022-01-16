import Divider from '~components/shared/divider'
import CollaborationSection from './collaboration-section'

const PageFooter = () => {
  return (
    <footer className="bg-subtleAppBg mt-20 pb-10 border-t border-appBorder opacity-50 hover:opacity-100 transition duration-300">
      <CollaborationSection />

      <div className="mt-4">
        <div className="flex flex-col justify-center items-center space-y-10">
          <Divider />

          <p className="text-sm tracking-wide leading-relaxed text-center text-lowContrast">
            &copy; 2021-present Kalwabed Rizki. <br className="md:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
