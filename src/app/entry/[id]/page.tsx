import Image from "next/image";
import { client } from "@/api";
import { EntryBody } from "@/components/EntryBody/EntryBody";
import { Metadata } from "next";


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
      <h1>{entry.title}</h1>
      <EntryBody>
      <div dangerouslySetInnerHTML={{ __html: entry.content! }} />
      </EntryBody>
    </>
  );
}
