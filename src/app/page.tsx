import Image from 'next/image'
import { client } from '@/api'
import { EntryThumbnails } from '@/components/EntryThumbnails/EntryThumbnails'
import { EntryThumbnail } from '@/components/EntryThumbnail/EntryThumbnail'
import { EntryItem } from '@/components/EntryItem/EntryItem'
import { EntryThumbnailContainer } from '@/components/EntryThumbnailContainer/EntryThumbnailContainer'
import { About } from '@/components/About/About'
import Link from 'next/link'
import { More } from '@/components/More/More'
// import styles from './page.css'
// import './page.scss'
import { Homeimg } from '@/components/Homeimg/Homeimg'


// ;/インポートしてる/

export default async function Home() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      offset: 0,
      limit: 4,
      //↑取得する件数
      filters: 'publishedAt[greater_than]2023-12-10',
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
    <Homeimg></Homeimg>
      <EntryThumbnails entries={entries} />
      <div>
        <More></More>
      </div>
      
      <About />
    </>
  )
}
