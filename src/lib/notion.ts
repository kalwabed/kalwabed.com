// import { Bookmark } from '@/types'
// import { Client } from '@notionhq/client'

// export const getDatabases = async (): Promise<Bookmark[]> => {
//   const notion = new Client({ auth: process.env.NOTION_SECRET })
//   const bookmarks = await notion.databases.query({ database_id: process.env.NOTION_BOOKMARKS_ID })

//   return bookmarks.results.map(res => res.properties) as unknown as Bookmark[]
// }

export {}
