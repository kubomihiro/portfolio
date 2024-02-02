import Image from 'next/image'
import { client } from '@/api'
// import { EntryItem } from '@/components/EntryItem/EntryItem'
import { Works } from '@/components/Works/Works'
;/インポートしてる/

export default async function Home() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      offset: 0,
      limit: 10,
      filters: 'publishedAt[greater_than]2023-11-10',
      //上の数字直すとキャッシュクリアされる
      fields: 'id,title,category,publishedAt,eyecatch,description',
    },
  })

  //console.log(entries);
  //console.log(entries.map((v) => v.title));

  return (
    <>
      {entries.map((v) => (
        // <EntryItem
        //   id={v.id}
        //   key={v.id}
        //   title={v.title}
        //   description={v.description}
        //   eyecatch={v.eyecatch}
        // ></EntryItem>

        <Works
          id={v.id}
          key={v.id}
          // title={v.title}
          // description={v.description}
          eyecatch={v.eyecatch}
        ></Works>
      ))}
    </>
  )
}
