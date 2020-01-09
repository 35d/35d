---
title: ローカルではビルド通るのに、Netlify 上ではビルドが通らないという現象にちょっとハマった
date: 2020-01-09
category: development
tags:
  - Netlify
  - Git
meta:
  - name: og:title
    content: ローカルではビルド通るのに、Netlify 上ではビルドが通らないという現象にちょっとハマった
  - name: og:description
    content: 手元ではビルド通るのに、Netlify 上ではビルドが通らないという現象でちょっとハマった
  - name: og:type
    content: article
---

# 手元ではビルド通るのに、Netlify 上ではビルドが通らないという現象にちょっとハマった

原因は Vue のファイル名の大文字・小文字が間違っていた、ということだったのですが、ファイル名の大文字・小文字が Git で差分として出ないということを知りませんでした。

誤ったファイル名でファイルを作成 -> コミット・プッシュ(Netlify でビルド失敗) -> ファイル名修正(ローカルではビルド成功) -> 差分が出ない
という状態になってしまっており、手元ではビルド通るのに、なぜか Netlify 上だとビルドが通らないという現象になってしまっていました。

---

以下のコマンドで Git の設定を変更できます。

```
$ git config core.ignorecase false
```

設定の確認は以下のコマンドで設定を確認することができます。`false` になっていれば、大文字・小文字を区別する設定に無事なっています。

```
$ git config -l --local | grep core.ignorecase
core.ignorecase=false
```

デフォルト値は `true` になっていて、これがファイル名の大文字・小文字を区別しない設定になっているので注意が必要です。
