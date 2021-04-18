import { Bookmarks } from '@/types'

const bookmarkProvider = async () => {
  const { NOTION_API, NOTION_TABLE_ID } = process.env
  try {
    return (await (await fetch(`${NOTION_API}/${NOTION_TABLE_ID}`)).json()) as Bookmarks[]
  } catch (err) {
    console.error(err)
  }
}

export default bookmarkProvider
