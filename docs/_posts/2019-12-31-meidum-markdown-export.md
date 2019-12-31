---
title: Medium から Markdown ファイルをエクスポートする
date: 2019-12-31
category: Development
tags:
  - Medium
  - VuePress
  - Markdown
meta:
  - name: og:title
    content: Medium から Markdown ファイルをエクスポートする
  - name: og:description
    content: Medium で書いていたブログをこの VuePress ブログにインポートするにあたって、Medium の記事を Markdown 形式でエクスポートするやり方を調べたのでブログにまとめておこうと思います。
  - name: og:type
    content: article
---

# Medium から Markdown ファイルをエクスポートする

Medium で書いていたブログをこの VuePress ブログにインポートするにあたって、Medium の記事を Markdown 形式でエクスポートするやり方を調べたのでブログにまとめておこうと思います。

公式の機能では Markdown 形式のエクスポートはサポートされていないので、プラグインをインストールします。

```
npm install mediumexporter
```

`mediumexporter` コマンドが使えるようになるので、Markdown に変換したい URL 指定して実行します。これでマークダウン形式のファイルが吐き出されるので、VuePress 内にファイルを置けばインポート完了です。

```
mediumexporter <urltothemediumpost> > filename.md
```

画像のパスは、Medium のサーバ上のままなので、手元に持ってきたい場合には、画像をダウンロードして、手元に再配置する必要があります。
