---
title: TypeScript の勉強を始めた
date: 2020-03-11
category: zatsu
tags:
  - TypeScript
  - NuxtJS
  - Vue.js
meta:
  - property: og:title
    content: TypeScript の勉強を始めた
  - property: og:description
    content: 今までやろうやろうと思ってやれていなかった TypeScript の勉強をとうとう始めました。動機としては、いま本業でやっているプロジェクトが全て NuxtJS 製で、型安全に作っていきたかった。新しい技術インプットしたかった。という感じです。
  - property: og:type
    content: article
---

<PostTop />

# TypeScript の勉強を始めた

今までやろうやろうと思ってやれていなかった TypeScript の勉強をとうとう始めました。
動機としては、

- いま本業でやっているプロジェクトが全て NuxtJS 製で、型安全に作っていきたかった
- 新しい技術インプットしたかった

という感じです。[TypeScript の本](https://amzn.to/2W3BOBE)を読んだり、
Nuxt の公式ガイドをみながら導入してみたり、実践的にちょこちょこ使い始めています。
まだ any がたくさんある状態なので、型をしっかり入れていきたい気持ち。

```
Property [Method] does not exist on type
```

というエラーでしばらくハマったり（解決済み）、
ジェネリクスがまだイマイチよく分かってなかったり、
Vuex の型定義がよく分かってなかったりするので、
これから勉強していきたいと思います。

ちなみに上のやつは、

```
export default Vue.extend({
```

と書かないと型の解決してくれなかったりするんですね（今まで `export default {}` みたいな感じで書いてた）。インプットして、発信できそうなことは発信していきたい気持ち ✨

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">TypeScript 何も分からない……</p>&mdash; Yuji Tsuburaya (@___35d) <a href="https://twitter.com/___35d/status/1237408774366703617?ref_src=twsrc%5Etfw">March 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
