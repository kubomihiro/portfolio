import Image from "next/image";
import { client } from "@/api";
import { EntryItem } from "@/components/EntryItem/EntryItem";
/インポートしてる/ 



export default async function Home() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      offset: 0,
      limit: 10,
      // filters: "publishedAt[greater_than]2023-11-10",
      fields: "id,title,category,publishedAt,eyecatch,description",
    },
  });

  console.log(entries);
  console.log(entries.map((v) => v.title));

  return (
    <>
    <EntryItem 
    id="test" 
    title="title"
    description="test説明"
    eyecatch={{
      url: "https://liginc.co.jp/wp-content/uploads/2015/05/797.png"
    }}
    />
      {entries.map((v) => (
        <EntryItem
        id={v.id}
        key={v.id} 
        title={v.title}
        description={v.description}
        eyecatch={v.eyecatch}
        ></EntryItem>
      ))}
    </>
  );
}
