import 'twin.macro'

import { Container } from '@/utils/styles'
import PageSectionTitle from '../PageSectionTitle'
import SEO from '../SEO'
import LinkList from './LinkList'
import app from '@/config/app'

const LinktreePageRenderer = () => {
  return (
    <section css={[Container]}>
      <SEO title={app.pageMeta.linkTree.pageTitle} description={app.pageMeta.linkTree.pageDescription} />
      <PageSectionTitle description="Places where you can find me on the internet" text="Linktree" />
      <LinkList />
    </section>
  )
}

export default LinktreePageRenderer
