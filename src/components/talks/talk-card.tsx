import { FiExternalLink } from 'react-icons/fi'

import TextLink from '~components/shared/text-link'
import { Talk } from '~types'

const TalkCard = ({ talk }: { talk: Talk }) => {
  const { title, date, url, organizer } = talk

  return (
    <section className="p-4 bg-subtleAppBg border border-appBorder rounded-lg w-full">
      <TextLink
        variant="ghost"
        href={url}
        title="Slides for this talk"
        className={`umami--click--talks-${encodeURIComponent(title)} text-2xl leading-relaxed`}
      >
        {title}
      </TextLink>
      <div className="flex items-center gap-1.5 text-sm text-lowContrast">
        <p>{organizer}</p>•<time>{date}</time>
      </div>
      <div className="mt-8 w-fit">
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          title="Slides for this talk"
          className={`umami--click--talks-${encodeURIComponent(title)} hover:text-lowContrast transition`}
        >
          <FiExternalLink className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default TalkCard
