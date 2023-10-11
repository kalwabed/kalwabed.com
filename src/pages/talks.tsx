import SEO from '~components/SEO'
import Container from '~components/shared/container'
import TalkCard from '~components/talks/talk-card'
import { Talk } from '~types'

const TalksPage = () => {
  function fmtDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)
  }

  const talks: Talk[] = [
    {
      title: 'From OS to Browser: Harnessing Web API Filesystem for Modern Applications',
      date: fmtDate(new Date(2023, 9, 11)),
      url: 'https://dub.sh/gdsc-wf',
      organizer: 'GDSC UMS'
    },
    {
      title: 'Reactive JavaScript: Unveiling the Magic of Signals',
      date: fmtDate(new Date(2023, 5, 17)),
      url: 'https://dub.sh/jogjajs-signals',
      organizer: 'JogjaJS'
    },
    {
      title: 'Prospek Karir Menjadi Seorang Software Engineer',
      date: fmtDate(new Date(2023, 2, 2)),
      url: 'https://dub.sh/ags-se',
      organizer: 'Amikom Computer Club'
    },
    {
      title: 'Becoming an Open-Source Contributor',
      date: fmtDate(new Date(2023, 1, 18)),
      url: 'https://dub.sh/kpb-oss',
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-12">
        {talks.map(talk => (
          <TalkCard talk={talk} key={talk.title} />
        ))}
      </div>
    </Container>
  )
}

export default TalksPage
