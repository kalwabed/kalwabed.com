import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import app from '~config/app'
import { Post } from '~types'

const { description, socials, email, siteUrl } = app

const pureUrl = siteUrl.replace('https://', '')
const copyright = `All rights reserved ${new Date().getFullYear()}, Kalwabed Rizki`
const me = { email, link: socials.LinkedIn, name: 'Kalwabed Rizki' }

const feed = new Feed({
  title: `${pureUrl} feed`,
  description,
  id: siteUrl,
  link: siteUrl,
  language: 'en',
  image: `${siteUrl}/static/512.png`,
  favicon: `${siteUrl}/favicon.ico`,
  copyright,
  generator: `${pureUrl} RSS API`,
  feedLinks: {
    json: `${siteUrl}/rss.json`,
    atom: `${siteUrl}/atom.atom`,
    rss: `${siteUrl}/rss.xml`
  },
  author: me
})

const root = process.cwd()

const MyFeed = ({ posts }: { posts: Post[] }) => {
  feed.addCategory('Technology')
  feed.addContributor(me)

  posts.forEach(post =>
    feed.addItem({
      title: post.title,
      description: post.summary,
      date: new Date(post.updatedAt),
      author: [me],
      copyright,
      link: `${siteUrl}/posts/${post.slug}`,
      id: post.slug
    })
  )

  fs.writeFileSync(path.resolve(root, 'public', 'rss.xml'), feed.rss2())
  fs.writeFileSync(path.resolve(root, 'public', 'atom.atom'), feed.atom1())
  fs.writeFileSync(path.resolve(root, 'public', 'rss.json'), feed.json1())
}

export default MyFeed
