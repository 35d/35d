---
title: VuePress でカテゴリ一覧・タグ一覧ページを作成する
date: 2020-01-10
category: development
tags:
  - VuePress
meta:
  - property: og:title
    content: VuePress でカテゴリ一覧・タグ一覧ページを作成する
  - property: og:description
    content: 早速 VuePress 製のこのブログに Google Adsense を導入し、記事ページの最下部にのみ広告を表示するようにしました。思い通りに表示させるまでに、ちょこちょこハマったので、その手順を記事化しておこうと思います。調べながら進めたのですが、なかなか体系的にまとまっている記事もなく、うまくいかず諦めてしまった方もいたようだったので、この記事が誰かの参考になれば幸いです。
  - property: og:type
    content: article
  - property: og:image
    content: https://35d.jp/ogp/2020-01-10-1.png
---

<PostTop />

# VuePress でカテゴリ一覧・タグ一覧ページを作成する

VuePress でカテゴリ一覧・タグ一覧ページの作成方法を紹介したいと思います。
カテゴリもタグも、基本的には同じ作成方法になるので、今回はタグを例にあげて紹介したいと思います。

## 前提条件

- VuePress がインストールされていること
- frontmatter の知識が（少しで良いので）あること
- デフォルトテーマが eject されていること

## `@vuepress/plugin-blog` のインストール

[@vuepress/plugin-blog](https://github.com/vuepressjs/vuepress-plugin-blog)

こちらのプラグインをインストールします。
このプラグインは、VuePress 本体だけではカバーしきれない、ブログに必要な様々な機能を、こちらのプラグインで補完することができます。
カテゴリ・タグ機能以外にもページネーションなどの便利な機能が入っているので、インストールすることをオススメします。

> Most of the planned features in place but there may still be bugs. API may still change until we remove this status tip. Do not use in production yet unless you are adventurous.
>
> _[@vuepress/plugin-blog](https://github.com/vuepressjs/vuepress-plugin-blog)_

⚠ こちらは VuePress 公式のプラグインですが、
2020/01/10 時点ではまだ beta 版となっており、上のようにまだバグがある可能性がある、と書かれています。
僕が使っている分には大丈夫そうなのですが、個人開発以外で使用する目的の場合はご注意ください。

インストールは以下のコマンドで実行することができます。

```Bash
$ yarn add -D @vuepress/plugin-blog
```

## `config.js` の編集

以下のように追記し、プラグインを使用可能な状態にします。

```js
module.exports = {
  plugins: [
    //中略
    ["@vuepress/blog"]
  ]
};
```

さらに、配列の 2 要素目に、以下のように設定を追記していきます。この設定で、`/tags` にアクセスが会った場合には、タグ一覧表示用の `Tags` レイアウトコンポーネント、 `/[タグ名]` でアクセスがあった場合には、タグが付いた記事一覧表示用の `Tag` レイアウトコンポーネントにルーティングが設定されるようになります。 僕のブログではこのような設定にしています。

[タグ一覧ページ (/blog/tags/)](/blog/tags/)

```js
plugins: [
  // 中略
  [
    "@vuepress/blog",
    {
      frontmatters: [
        {
          id: "tag",
          keys: ["tag", "tags"],
          path: "/blog/tags/",
          layout: "Tags",
          scopeLayout: "Tag"
        }
      ]
    }
  ]
];
```

## タグ一覧ページ用コンポーネントの作成

ルーティングの設定は完了したので、あとはタグ一覧表示用のコンポーネント群を作成すれば完了です。
`eject` されていることを前提に書くと（`eject` されていない場合は[こちら](https://35d.jp/blog/2019-12-29-vue-press-eject/)からどうぞ）、以下のようになります。

`Tags.Vue` タグ一覧ページ用のレイアウトコンポーネント。タグ一覧コンポーネントを呼び出しているだけです。

```js
// .vuepress/theme/layouts/Tags.Vue (新規作成)
// タグ一覧ページ表示用
//
<template>
  <div>
    <!-- 中略 -->
    <div class="theme-default-content">
      <h2>タグ一覧</h2>
      <TagList />
    </div>
    <!-- 中略 -->
  </div>
</template>
```

## タグ一覧コンポーネントの作成

`TagList.vue` タグ一覧コンポーネント。タグ一覧ページから呼び出される、タグ一覧コンポーネントです。`this.$frontmatterKey.list` にタグ情報のオブジェクトが配列として格納されているので、これをループで回してあげることで描画することができます。タグ名が押下されたときは、タグが付いた記事一覧表示用の、`Tag.vue` に飛ばすようにしています。

```js
<template>
  <div>
    <template v-for="tag in tags">
      <a v-bind:href="tag.path" style="margin-right: 8px;">{{ tag.name }}</a>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$frontmatterKey.list;
    }
  }
};
</script>

```

## 個々の記事(.md)でタグを設定する

タグは、記事 1 つ 1 つのマークダウンファイル内の `frontmatter` 内で記述します。この記事で言うと、ファイルの最上部にこんな感じにの記載をしてあります。

```yml
title: VuePress でカテゴリ一覧・タグ一覧ページを作成する
date: 2020-01-10
category: development
tags:
  - VuePress
```

以上で、タグ一覧ページの作成が完了です。

SEO 的にも良いと思うので、VuePress をお使いの方はぜひ使ってみてください。

---

💁‍♀️ 「タグが付いた記事一覧表示」については、この記事の主題からは外れるので、ここでは詳細は書きませんが、気になる方は公開リポジトリでこのブログのソースコードを公開しているので、こちらを参考にしてみてください。
[Tag.vue](https://github.com/35d/35d/blob/master/docs/.vuepress/theme/layouts/Tag.vue)

（要望が多ければ記事化するかもしれないです。）

---

不明点あればお気軽にどうぞ。 Twitter で DM いただければ回答できると思います！ 🙌
