import { client } from "@/api";
import { Metadata } from "next";
import { EntryDetail } from "@/components/EntryDetail/EntryDetail";


export async function generateStaticParams() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      limit: 100,
      fields: "id",
    },
  });

  return entries.map((entry) => ({
    id: entry.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params?.id;
  const entry = await client.blogs._id(id).$get();
  return {
    title: `Portfolio - ${entry.title}`,
    description: entry.description,
  };
}
//リンク飛んだ時にタイトルが表示されるようになる

type Props = {
  params: { id: string };
};

export default async function Entry({ params }: Props) {
  const id = params.id;

  const entry = await client.blogs._id(id).$get();

  console.log(entry);

  return (
    <>
      <EntryDetail
        title={entry.title}
        content={entry.content}
        eyecatch={entry.eyecatch}
      />
    </>
  );
}
