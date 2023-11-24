## Next14

- Next13 以降から作り方が変わってるか注意
  - App directory - https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial

## APP Directory とは

`app`フォルダで、サイトのページを作っていく

- 最初に読み込まれるんは `layout.tsx` と `page.tsx`
- `layout.tsx` の`{children}`に`page.tsx`が読み込まれる

## microCMS を使いやすくするために

- config/microCMS.ts
- constants に microCMS の情報記載
- aspida を使って、https://blog.microcms.io/how-to-use-aspida/
  - api ディレクトリに上記 url をみつつ記載していく
- api のフォルダの中に、どういう microcms のデータを使いたいのかを定義してある
  - 定義したら
  - `npm run api:build`を実行する
  - `api/$api.ts` がが作成される

### aspida の使い方

```
import { client } from "@/api";

const { contents: entries } = await client.blogs.$get({
  query: {
    offset: 0,
    limit: 10,
    filters: "publishedAt[greater_than]2023-11-10",
    fields: "id,title,category,publishedAt,eyecatch,description",
  },
});
```

## components フォルダについて

自分で管理していく、コンポーネント用のフォルダ
特に名前に意味があるわけではないけど、概ねこのような名前で管理することが多い。

### コンポーネントとはなにか

パーツのようなもの。再利用できるもの。例えば、ボタンとか、ヘッダーとか、フッターとか。

### React でいうところの tsx or jsx

JS とか typescript + HTML みたいなもの
