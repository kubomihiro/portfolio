import Image from 'next/image'
import { client } from '@/api'
import { EntryThumbnails } from '@/components/EntryThumbnails/EntryThumbnails'
import { EntryThumbnail } from '@/components/EntryThumbnail/EntryThumbnail'
import { EntryItem } from '@/components/EntryItem/EntryItem'
import { EntryThumbnailContainer } from '@/components/EntryThumbnailContainer/EntryThumbnailContainer'
import { About } from '@/components/About/About'
import Link from 'next/link'
// import styles from './page.css'
// import './page.scss'

// ;/インポートしてる/

export default async function Home() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      offset: 0,
      limit: 2,
      //↑取得する件数
      filters: 'publishedAt[greater_than]2023-11-10',
      //上の数字直すとキャッシュクリアされる
      fields: 'id,title,category,publishedAt,eyecatch,description',
    },
  })
  //↑microCMSからブログを取得する

  //console.log(entries);
  //console.log(entries.map((v) => v.title));

  // const title = 'titleだよ'

  return (
    <>
      <EntryThumbnails entries={entries} />
      <div>
        <p>
          <Link href='/works'>and More</Link>
        </p>
      </div>

      <About />
    </>
  )
}
