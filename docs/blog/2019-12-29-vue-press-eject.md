---
title: VuePress のデフォルトテーマを eject する
date: 2019-12-29
category: Development
tags:
  - VuePress
meta:
  - name: og:title
    content: VuePress のデフォルトテーマを eject する
  - name: og:description
    content: もろもろいじりたいところがあり、かつ、もとのテーマの資産も流用したい、ということで eject して、それを加工していくことにしました。
  - name: og:type
    content: article
---

# VuePress のデフォルトテーマを eject する

もろもろいじりたいところがあり、かつ、もとのテーマの資産も流用したい、  
ということで eject して、それを加工していくことにしました。

以下のコマンドで実行できる

```
vuepress eject
```

※ VuePress にアップデートがあったときに、package.json 経由でアップデートができなくなるので注意が必要です。ご利用は自己責任で……

(参考)[https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages]
