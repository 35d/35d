---
title: VuePress のデフォルトテーマを eject する
date: 2019-12-29
category: development
tags:
  - VuePress
meta:
  - property:  og:title
    content: VuePress のデフォルトテーマを eject する
  - property:  og:description
    content: もろもろいじりたいところがあり、かつ、もとのテーマの資産も流用したい、ということで eject して、それを加工していくことにしました。
  - property:  og:type
    content: article
---

# VuePress のデフォルトテーマを eject する

テーマをいじりたいところがあり、かつ、もとのテーマの資産も流用したい。ということでもとのテーマを eject して、それを加工していくことにしました。

以下のコマンドで実行できます。

```
vuepress eject
```

参考: [https://vuepress.vuejs.org/theme/default-theme-config.html](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages)

---

eject して、`plugin-blog` をインストールして、タグ機能やカテゴリ機能を導入する予定です。
