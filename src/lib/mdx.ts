import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import autoLink from 'remark-autolink-headings'
import codeTitles from 'remark-code-titles'
import reParse from 'remark-parse'
import reSlug from 'remark-slug'

import MyFeed from '~scripts/generate-rss'
import { Post } from '~types'

const root = process.cwd()

type TypeData = '_projects' | '_posts'

export const getSlugs = (type: TypeData) => {
  return fs.readdirSync(path.join(root, type), 'utf-8').map(slug => ({ params: { slug: slug.replace('.mdx', '') } }))
}

export async function getDataBySlug(type: TypeData, slug: string) {
  const source = fs.readFileSync(path.join(root, type, `${slug}.mdx`), 'utf-8')

  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [reParse, reSlug, autoLink, codeTitles],
      rehypePlugins: [mdxPrism]
    }
  })

  return {
    mdxSource,
    slug,
    ...data
  }
}

export function getAllFrontMatters(type: TypeData) {
  const files = fs.readdirSync(path.join(root, type))

  const data = files.reduce((allData, slug) => {
    const source = fs.readFileSync(path.join(root, type, slug), 'utf-8')

    const { data } = matter(source)

    return [
      {
        ...data,
        slug: slug.replace('.mdx', '')
      },
      ...allData
    ]
  }, []) as {
    isFeatured: boolean
    publishedAt: string
    title: string
    status: string
    slug: string
    techs: string[]
    description: string
    summary: string
  }[]

  // generate RSS for post type
  if (type === '_posts' && data.length !== 0) {
    MyFeed({ posts: data as unknown as Post[] })
  }

  return data.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getFeaturedProject() {
  return getAllFrontMatters('_projects').find(project => project.isFeatured)
}
