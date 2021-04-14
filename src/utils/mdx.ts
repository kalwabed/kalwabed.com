import renderToString from 'next-mdx-remote/render-to-string'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const root = process.cwd()

type TypeData = '_projects' | '_posts'

export function getFiles(type: TypeData) {
  return fs.readdirSync(path.join(root, type))
}

export async function getDataBySlug(type: string, slug: string) {
  const source = fs.readFileSync(path.join(root, type, `${slug}.mdx`), 'utf-8')

  const { content, data } = matter(source)
  const mdxSource = await renderToString(content)

  return {
    mdxSource,
    meta: {
      ...data
    }
  }
}

export async function getAllMetaData(type: TypeData) {
  const files = fs.readdirSync(path.join(root, type))

  return files.reduce((allData, slug) => {
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
}
