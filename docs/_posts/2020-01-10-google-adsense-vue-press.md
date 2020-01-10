---
title: VuePress で作ったブログに Google Adsense を導入する
date: 2020-01-10
category: development
tags:
  - Google Adsense
  - VuePress
  - お金
meta:
  - name: og:title
    content: VuePress で作ったブログに Google Adsense を導入する
  - name: og:description
    content: 早速 VuePress 製のこのブログに Google Adsense を導入し、記事ページの最下部にのみ広告を表示するようにしました。思い通りに表示させるまでに、ちょこちょこハマったので、その手順を記事化しておこうと思います。調べながら進めたのですが、なかなか体系的にまとまっている記事もなく、うまくいかず諦めてしまった方もいたようだったので、この記事が誰かの参考になれば幸いです。
  - name: og:type
    content: article
  - name: og:image
    content: /ogp/2020-01-10-1.png
---

# VuePress で作ったブログに Google Adsense を導入する

昨日無事 Google Adsense の審査が通りました 👏

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">年末に出した Adsense 審査が通ってた〜〜〜！！！💪 <a href="https://t.co/cvXjgi9IRp">pic.twitter.com/cvXjgi9IRp</a></p>&mdash; Yuji Tsuburaya (@___35d) <a href="https://twitter.com/___35d/status/1215063259688009728?ref_src=twsrc%5Etfw">January 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

早速 VuePress 製のこのブログに Google Adsense を導入し、記事ページの最下部にのみ広告を表示するようにしました。思い通りに表示させるまでに、ちょこちょこハマったので、その手順を記事化しておこうと思います。

調べながら進めたのですが、なかなか体系的にまとまっている記事もなく、うまくいかず諦めてしまった方もいたようだったので、この記事が誰かの参考になれば幸いです。

## 前提条件

- Google Adsense の審査が通っていること
- VuePress を eject していること（コードを埋め込むのに必要です。まだの方は[こちら](https://35d.jp/blog/2019-12-29-vue-press-eject/)からどうぞ）

## 必要なライブラリのインストール

`vue-script2` と `vue-google-adsense` が必要なので、それぞれインストールします。 `yarn` をお使いの方は以下のコマンドで。 `npm` の方は適宜読み替えてください。

```shell
$ yarn add vue-script2 vue-google-adsense
```

## enhanceApp.js の準備

`Vue.use()` を使用して、グローバルで Google Adsense のコードを読み込めるようにする必要があるのですが、そのためには、`enhanceApp.js` を編集する必要があります。`enhanceApp.js` 以下のように編集してください。まだ `enhanceApp.js` がない場合は、[こちらの VuePress の公式ドキュメント](https://v1.vuepress.vuejs.org/guide/basic-config.html#theme-configuration) を参考に、新規でファイルを作成してください。`Vue.use()` について詳しくは[こちらの Vue.js の公式ドキュメント](https://jp.vuejs.org/v2/guide/plugins.html)を参照してください。

```js
// path/to/.vuepress/enhanceApp.js

export default ({ Vue, options, router, siteData }) => {
  if (typeof window !== "undefined") {
    import("vue-google-adsense")
      .then(module => {
        const Ads = module.default;
        Vue.use(require("vue-script2"));
        Vue.use(Ads.Adsense); // ディスプレイ広告
        // Vue.use(Ads.InArticleAdsense); // 記事内広告
        // Vue.use(Ads.InFeedAdsense); // フィード内広告
      })
      .catch(e => {
        console.log(e);
      });
  }
};
```

ポイントとしては、`if (typeof window !== "undefined") {` で `window` 関数の有無をチェックしていること。ライブラリ内部で `window` 関数を使用しているので、フロントで実行される場合のみスクリプトが読み込まれるようにしています。

現時点では `Ads.Adsense` のディスプレイ広告しか使っていないので、他の広告に関してはコメントアウトしておくことにします。

## 広告表示用コンポーネントの作成

ここはお好みですが、広告を表示するためのコンポーネントを作成しました。`Adsense` を薄くラップするイメージです。以下のように `ResponsiveAdsense.vue` というファイルを作成しました。このファイルを、広告を表示したい箇所でインポートして使用します。`data-ad-client` と `data-ad-slot` の部分は Google Adsense 管理画面から広告を作成し、番号を取得してください。`Adsense` コンポーネントは、先程の `Vue.use()` でグローバルに登録されているので、インポートする必要はありません。

```js
// ResponsiveAdsense.vue
<template>
  <div class="ads-area" v-if="shouldShowAd()">
    <p class="ads">ADS</p>
    <div>
      <Adsense data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX"></Adsense>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // note: 記事ページにのみ広告を表示する
    shouldShowAd() {
      return this.$frontmatter.layout === "Post";
    }
  }
};
</script>
```

僕の場合は、記事ページでのみ広告を表示したかったので、`shouldShowAd()` で判定を加えています。（ここはちょっと判定と実装が微妙かもしれないので、適宜書き換えてください。）

## 広告表示用コンポーネントの表示

好きな位置で、先程作成した `ResponsiveAdsense.vue` をインポートして使用してください。ここで、`VuePress` を `eject` しておかないと、柔軟にコードを書くことができないので、`eject` しておくことをオススメします。実装イメージは以下のような感じです。僕は `PageEdit.vue` らへんに以下を追記しました。

```js
<template>
  <!-- 中略 -->
  <!-- 表示したい箇所でコンポーネントの読み込み -->
  <ResponsiveAdsense />
  <!-- 中略 -->
</template>

<script>
// 中略
import ResponsiveAdsense from "../global-components/ResponsiveAdsense";
// 中略
components: {
  ResponsiveAdsense
},
// 中略
</script>
```

これで `VuePress` に広告を表示させることができました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">VuePress + Google Adsense 、ちょこちょこハマりポイントあったけどうまくいった気がする。</p>&mdash; Yuji Tsuburaya (@___35d) <a href="https://twitter.com/___35d/status/1215506886037884930?ref_src=twsrc%5Etfw">January 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

不明点あればお気軽にどうぞ。 Twitter で DM いただければ回答できると思います！ 🙌
