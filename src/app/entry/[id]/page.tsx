import { client } from '@/api'
import { Metadata } from 'next'
import { EntryDetail } from '@/components/EntryDetail/EntryDetail'
import { EntryItem } from '@/components/EntryItem/EntryItem'

export async function generateStaticParams() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      limit: 100,
      fields: 'id',
    },
  })

  return entries.map((entry) => ({
    id: entry.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params?.id
  const entry = await client.blogs._id(id).$get()
  return {
    title: `Portfolio - ${entry.title}`,
    description: entry.description,
  }
}
//リンク飛んだ時にタイトルが表示されるようになる

const prevAndNextFields = [
  'title',
  'description',
  'id',
  'publishedAt',
  'updatedAt',
  'image',
  'categories',
  'tags',
].join(',')

type Props = {
  params: { id: string }
}

export default async function Entry({ params }: Props) {
  const id = params.id

  const entry = await client.blogs._id(id).$get()

  const prev = await client.blogs.$get({
    query: {
      limit: 1,
      orders: '-publishedAt',
      fields: prevAndNextFields,
      filters: `publishedAt[less_than]${entry.publishedAt}`,
    },
  })
  const next = await client.blogs.$get({
    query: {
      limit: 1,
      orders: 'publishedAt',
      fields: prevAndNextFields,
      filters: `publishedAt[greater_than]${entry.publishedAt}`,
    },
  })
  const prevEntry = prev.contents[0]
  const nextEntry = next.contents[0]

  return (
    <>
      <EntryDetail title={entry.title} content={entry.content} eyecatch={entry.eyecatch} />
      {prevEntry && <EntryItem {...prevEntry} />}
      {nextEntry && <EntryItem {...nextEntry} />}
    </>
  )
}
