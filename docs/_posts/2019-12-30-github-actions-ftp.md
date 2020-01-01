---
title: GitHub Actions で Vue.js のビルドをして FTP サーバー経由で自動デプロイ
date: 2019-12-30
category: development
tags:
  - VuePress
  - Vue.js
  - GitHub Actions
meta:
  - name: og:title
    content: GitHub Actions で Vue.js のビルドをして FTP サーバー経由で自動デプロイ
  - name: og:description
    content: タイトルの通りなのですが、Vue.js プロジェクトの検証環境がほしいというお願いをされ、GitHub Actions を使ってビルドとデプロイを自動化してみました。
  - name: og:type
    content: article
  - name: og:image
    content: /ogp/2019-12-30.png
---

# GitHub Actions で Vue.js のビルドをして FTP サーバー経由で自動デプロイ

[Medium に書いていた記事](https://medium.com/35d/github-actions-%E3%81%A7-vue-js-%E3%81%AE%E3%83%93%E3%83%AB%E3%83%89%E3%82%92%E3%81%97%E3%81%A6-ftp-%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E7%B5%8C%E7%94%B1%E3%81%A7%E8%87%AA%E5%8B%95%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4-23e23bd4d5f8)をこちらに移行しました。（2019/12/30）

タイトルの通りなのですが、Vue.js プロジェクトの検証環境がほしいというお願いをされ、GitHub Actions を使ってビルドとデプロイを自動化してみました。

今までにも CircleCI + Firebase Hosting や Netlify (こちらはサービス内で完結) などでさまざまなビルドデプロイの自動化をやってきたのですが、ここに basic 認証をかけたいという要件が加わり、

- Firebase Hosting + Cloud Function だとリクエスト数の限界がある
- Netlify だと割とお高めな課金が必要

などと様々な壁にぶち当たりました。

そこで今回は、GitHub Actions で Vue.js のプロジェクトをビルド、その成果物をすでに借りている XSERVER に git-ftp を使ってファイルを転送し、そこを検証環境として使うという手段を取ることにしました。

整理すると、

- basic 認証がかけた検証環境がほしい

- 自動でビルド＆デプロイしたい

- できれば課金なしで

の 3 つの要件を満たす手段を考えた結論が GitHub Actions + git-ftp だったというわけでした。

背景が長くなってしまいましたが、以下がサンプルコードになります。

[https://gist.github.com/35d/fc97fdeb6a197d3e40291e03f11a5ed2](https://gist.github.com/35d/fc97fdeb6a197d3e40291e03f11a5ed2)

```
name: Deploy via git-ftp
on: push:
  branches:
    - master
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: npm i && npm run build
        run: cd htdocs && npm i && npm run build
      - name: git-ftp push
        uses: SamKirkland/FTP-Deploy-Action@2.0.0
        env:
          FTP_SERVER: [ServerName]
          FTP_USERNAME: ${{ secrets.FTP_USER }}
          FTP_PASSWORD: ${{ secrets.FTP_PWD }}
          LOCAL_DIR: dist
          REMOTE_DIR: [DirPath]
```

設定の手間は CircleCI と同じくらいで、使うサービス数が 1 つ減ったのでこっちの方が良い気がする。使い倒していきたい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">GitHub Actions 使うと、使うサービスが1つ減ってハッピーだね。CircleCI からだんだん離れていこう。</p>&mdash; Yuji Tsuburaya (@___35d) <a href="https://twitter.com/___35d/status/1204507459659784192?ref_src=twsrc%5Etfw">December 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
