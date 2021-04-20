import { Content, ContentWithImage } from '@/components/Projects/Contents'
import ProjectBySlugRenderer from '@/components/Projects/ProjectBySlugRenderer'
import { ProjectMeta } from '@/types'

const tuantanah: ProjectMeta = {
  title: 'TuanTanah',
  banner: '/static/tuantanah.png',
  liveUrl: 'https://tuantanah.kawari.space',
  githubRepo: 'https://github.com/kalwabed/tuantanah-website-v2',
  techs: ['React', 'Next.js'],
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro ea libero, cupiditate et neque necessitatibus vero modi voluptatem expedita in nemo adipisci exercitationem ipsam magnam laboriosam iure corporis dolore?'
}

const TuantanahProject = () => {
  return (
    <ProjectBySlugRenderer {...tuantanah}>
      <Content heading="Head 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id dolores accusantium. Facere odit itaque deleniti
        accusantium perferendis deserunt similique laborum molestiae assumenda eaque sequi a quasi repellat, aut enim?
      </Content>
      <ContentWithImage heading="Head 2" image="/static/aku.jpg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iure expedita eaque sapiente recusandae neque nam,
        ipsam veritatis. Alias, excepturi ea natus ipsa molestiae earum blanditiis eius sint atque inventore?
      </ContentWithImage>
    </ProjectBySlugRenderer>
  )
}

export default TuantanahProject
