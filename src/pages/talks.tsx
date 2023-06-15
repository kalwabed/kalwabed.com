import SEO from '~components/SEO'
import Container from '~components/shared/container'
import TalkCard from '~components/talks/talk-card'
import { Talk } from '~types'

const TalksPage = () => {
  const talks: Talk[] = [
    {
      title: 'Becoming an Open-Source Contributor',
      date: new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(2023, 1, 18)),
      url: 'https://kpb-oss.netlify.app',
      organizer: 'Komunitas Programmer Banyuwangi'
    }
  ]

  return (
    <Container className="my-14">
      <SEO title="Talks" description="Talks I've given." />

      <section className="px-0 md:px-10 lg:px-16">
        <h1 className="text-5xl font-bold leading-relaxed">Talks.</h1>
        <p className="text-lowContrast">I&apos;ve given a few talks over the years. Here are some of them.</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-1 w-full mt-12">
        {talks.map(talk => (
          <TalkCard talk={talk} key={talk.url} />
        ))}
      </div>
    </Container>
  )
}

export default TalksPage
