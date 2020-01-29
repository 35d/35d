---
title: プロダクションビルド時に console.log を消す babel プラグインを Vue.js と Nuxt.js に導入する
date: 2020-01-28
category: zatsu
tags:
  - Vue.js
  - Nuxt.js
  - babel
meta:
  - property: og:title
    content: プロダクションビルド時に console.log を消す babel プラグインを Vue.js と Nuxt.js に導入する
  - property: og:description
    content: デバッグ時に console.log はよく使われると思うのですが、プロダクションビルド時に余分なデータがコンソールに吐き出されるとかっこ悪いですよね。
  - property: og:type
    content: article
  # - property: og:image
  # content: https://35d.jp/ogp/2020-01-25-1.jpg
---

<PostTop />

# プロダクションビルド時に console.log を消す babel プラグインを Vue.js と Nuxt.js に導入する

デバッグ時に `console.log` はよく使われると思うのですが、
プロダクションビルド時に余分なデータがコンソールに吐き出されるとかっこ悪いですよね。
表題の通りですが、`console.log` を消す `babel` プラグインを `Vue.js` と `Nuxt.js` それぞれに導入し、
プロダクションビルド時のみに `console.log` が消すことができたので、その方法をご紹介したいと思います。

## 共通 プラグインのインストール

[babel-plugin-transform-remove-console](https://babeljs.io/docs/en/babel-plugin-transform-remove-console) を以下のコマンドでインストールします。(`yarn` の場合は適宜読み替えてください。)

```bash
npm install babel-plugin-transform-remove-console --save-dev
```

## Vue.js に導入する

`Vue.js` の場合には `.babelrc` に以下を追記します。

```js
"env": {
  "test": {
    "presets": ["env", "stage-2"]
  },
  "production": {
    "plugins": ["transform-remove-console"]
  }
}
```

## Nuxt.js に導入する

`Nuxt.js` の場合には `nuxt.config.js` に以下を追記します。

```js
/*
 ** Build configuration
 */
build: {
  /*
   ** You can extend webpack config here
   */
  terser: {
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production";
      }
    }
  }
}
```
