import renderToString from 'next-mdx-remote/render-to-string'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import autoLink from 'remark-autolink-headings'
import codeTitles from 'remark-code-titles'
import reSlug from 'remark-slug'
import reParse from 'remark-parse'
import mdxPrism from 'mdx-prism'
import MDXComponents from '@/components/MDXComponents'

const root = process.cwd()

type TypeData = '_projects' | '_posts'

export const getSlugs = (type: TypeData) => {
  return fs.readdirSync(path.join(root, type), 'utf-8').map(slug => ({ params: { slug: slug.replace('.mdx', '') } }))
}

export async function getDataBySlug(type: TypeData, slug: string) {
  const source = fs.readFileSync(path.join(root, type, `${slug}.mdx`), 'utf-8')

  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [reParse, reSlug, autoLink, codeTitles],
      rehypePlugins: [mdxPrism]
    }
  })

  return {
    mdxSource,
    ...data
  }
}

export function getAllMetaData(type: TypeData) {
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
  }, [])

  return data.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}
