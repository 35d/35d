---
title: VuePress で記事下に人気記事を出す（手動）
date: 2020-01-23
category: zatsu
tags:
  - VuePress
meta:
  - property: og:title
    content: VuePress で記事下に人気記事を出す（手動）
  - property: og:description
    content: 表題の通りですが、記事下に人気記事を出すようにしました。人気記事は自動で選定されるのではなく、自分が Google Analytics を見て数記事ピックアップしたものを表示するようにしています。
  - property: og:type
    content: article
---

<PostTop />

# VuePress で記事下に人気記事を出す（手動）

表題の通りですが、記事下に人気記事を出すようにしました。
人気記事は自動で選定されるのではなく、自分が Google Analytics を見て数記事ピックアップしたものを表示するようにしています。

![スクリーンショット](../assets/img/2020-01-23-2.png)**記事下に人気記事を表示**

軽く実装方法をご紹介します。まず、人気記事を手動で、以下の js に定義しました。PV が多い旬に上から並べただけのものです。

```js
// popularPosts.js

export default [
  {
    title: "Notion を企業のタスク・ドキュメント管理ツールとして運用する",
    url: "/blog/2020-01-22-notion-company/"
  },
  {
    title: "Notion + GTD でストレスフリーな生活を手に入れる",
    url: "/blog/2020-01-18-notion-gtd/"
  },
  {
    title: "Notion Blog を使って、いま最もモダンなブログ環境を構築する",
    url: "/blog/2020-01-16-notion-blog/"
  },
  {
    title: "Notion Blog を使って、いま最もモダンなブログ環境を構築する",
    url: "/blog/2020-01-16-notion-blog/"
  },
  {
    title: "バターコーヒー生活はじめました",
    url: "/blog/2020-01-05-butter-coffee/"
  },
  {
    title: "Firebase だけで cron が実行できるようになったので Twitter bot を作ってみた",
    url: "/blog/2019-09-09-firebase-cron/"
  },
  {
    title: "MacOS Catalina から Mojave にダウングレードした",
    url: "/blog/2019-12-29-catarina-to-mojave/"
  }
];
```

この js をインポートし、以下のようにループを回して描画します。

```vue
// PageEdit.vue

<template v-if="shouldShowPopularPosts()">
  <h3>
    人気記事
  </h3>
  <ul>
    <li v-for="post in _popularPosts">
      <a :href="post.url">{{ post.title }}</a>
    </li>
  </ul>
</template>
```

`shouldShowPopularPosts()` で、記事ページかどうかを判定し、記事ページだった場合にのみ人気記事を表示するようにしています。
メソッドの実装は以下のような感じ。（ちょっと判定が微妙かもしれないので、もし良いやり方見つけた人は教えて下さい。）

```js
shouldShowPopularPosts() {
  return this.$frontmatter.layout === "Post";
},
```

みなさんも記事下に人気記事を置いてみてはいかがでしょうか？
