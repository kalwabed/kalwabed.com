import type { NextPage } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export interface Post {
  title: string
  slug: string
  summary: string
  publishedAt: string
  updatedAt: string
}

export interface PostWithMdx extends Post {
  mdxSource: MDXRemoteSerializeResult
}

export interface Project {
  title: string
  status: string
  summary: string
  techs: string[]
  liveUrl: string
  description: string
  slug: string
  githubRepo: string
  isFeatured: boolean
  publishedAt: string
}

export interface ProjectWithMdx extends Project {
  mdxSource: MDXRemoteSerializeResult
}

export type NextPageWithLayout<payload = {}> = NextPage<payload> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
