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

以下のエラーが出てハマりました。Firebase Functions の API を叩いて、メール送信したり、Slack に通知飛ばしたり、DB に書き込みに行ったりする処理をしている関数でこのエラーが発生。僕の環境では、コールドスタンバイ状態になると、これが発生してしまっていました。（夜は正常に動作していたけど、朝実行するとエラー、再度実行すると正常に動作、という事象でした。）

```
Error: Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.
    at GoogleAuth.getApplicationDefaultAsync (/srv/node_modules/googleapis-common/node_modules/google-auth-library/build/src/auth/googleauth.js:159:19)
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:229:7)
```

結論、 GCP のバグっぽくて、（このブログを書いている 2020 年 1 月 3 日時点では）まだ解決されてない問題だと Google の方も言っています。

[https://github.com/googleapis/google-auth-library-nodejs/issues/798#issuecomment-544764448](https://github.com/googleapis/google-auth-library-nodejs/issues/798#issuecomment-544764448)

とりあえず暫定的な解決策もこの Issue に載っています。僕たちも、キーをアップロードし、起動時に以下のように環境変数に読み込ませるという手段で対応することにしました。（キーのアップロードが必要なので、GitHub の公開リポジトリでは行わないように注意してください）

```
process.env.GOOGLE_APPLICATION_CREDENTIALS = './key.json';
```

これでエラーが出なくなったのでひとまず大丈夫そう。この問題でだいぶハマってしまったので、同じエラーが出て困っている人の参考になればと思います。
