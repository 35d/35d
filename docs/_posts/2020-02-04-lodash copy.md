---
title: Lodash は使う関数のみ import してファイルサイズを削減しよう
date: 2020-02-04
category: development
tags:
  - Vue.js
  - Lodash
meta:
  - property: og:title
    content: Lodash は使う関数のみ import してファイルサイズを削減しよう
  - property: og:description
    content: Lodash 便利ですよね。僕も、オブジェクトを含んだ配列のソートや、配列のシャッフルをしたいときによくお世話になってます。
  - property: og:type
    content: article
---

<PostTop />

# Lodash は使う関数のみ import してファイルサイズを削減しよう

[Lodash](https://lodash.com/) 便利ですよね。
JavaScript 書いている人は一度はお世話になったことがあると思います。
僕も、オブジェクトを含んだ配列のソートや、配列のシャッフルをしたいときによくお世話になってます。

そんな便利な Lodash ですが、`import _ from 'lodash';` で無邪気にまとめて全てインポートすると、
本来必要のない余分なものまでインポートされてしまい、バンドルサイズが肥大化してしまうという問題点があります。

## 少し検証してみました

簡単な Vue.js のプログラムのサンプルで、ファイルサイズがどの程度変わるのか比較検証を行ってみました。

```vue
<template>
  <div id="app">
    {{ suffledArray }}
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "app",
  data() {
    return {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  computed: {
    suffledArray() {
      return _.shuffle(this.array);
    }
  }
};
</script>
```

配列をシャッフルして表示するだけのシンプルなプログラムです。こちらのプログラムを `yarn build` でバンドルしてみたところ、`1,350,839 バイト（1.4 MB）` となりました。一方で、使用する関数のみ部分的にインポートしてみた場合のコードが以下になります。

```vue
<template>
  <div id="app">
    {{ suffledArray }}
  </div>
</template>

<script>
import shuffle from "lodash/shuffle";

export default {
  name: "app",
  data() {
    return {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  computed: {
    suffledArray() {
      return shuffle(this.array);
    }
  }
};
</script>
```

こちらも同様に `yarn build` でバンドルしてみたところ、 `624,203 バイト（639 KB）` となりました。
ファイルサイズが圧倒的に小さくなっていることが分かりますよね。

## まとめ

Lodash を使うときは、必要な関数のみインポートするようにしましょう。

小さな工夫で、バンドルサイズを小さくすることができます。
Lodash 自体は決して軽いライブラリではないので、この方法がオススメです。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今まで無邪気に import _ from &quot;lodash&quot;; してたけど、これ良くなかったなあ。使う関数だけ import する形にしたらメッチャ軽くなった。</p>&mdash; Yuji Tsuburaya (@___35d) <a href="https://twitter.com/___35d/status/1224614129282928640?ref_src=twsrc%5Etfw">February 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
