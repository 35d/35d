---
title: "Error: Could not load the default credentials. コールドスタート問題でハマった"
date: 2020-01-03
category: development
tags:
  - Firebase
meta:
  - property: og:title
    content: "Error: Could not load the default credentials. コールドスタート問題でハマった"
  - property: og:description
    content: Could not load the default credentials. というエラーが出てハマりました。API を叩いて、メール送信したり、Slack に通知飛ばしたり、DB に書き込みに行ったりする処理をしている関数でこのエラーが発生。僕の環境では、コールドスタンバイ状態になると、これが発生してしまっていました。（夜は正常に処理ができていたけど、朝実行するとエラーになる。）
  - property: og:type
    content: article
---

<PostTop />

# Cloud Functions のコールドスタート問題でハマった（Error: Could not load the default credentials. ）

この記事は[こちら](https://blog.35d.jp/2020-01-03-firebase-bug)に移行しました。
