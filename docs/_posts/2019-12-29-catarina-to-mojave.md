---
title: MacOS Catalina から Mojave にダウングレードした
date: 2019-12-29
category: Memo
tags:
  - Mac
meta:
  - name: og:title
    content: MacOS Catalina から Mojave にダウングレードした
  - name: og:description
    content: メインで使っているマシンを MacOS Catalina から Mojave にダウングレードしました。動画配信で使っているキャプチャーボードとの相性がすこぶる悪く、ゲーム配信や録画がうまくできなくなってしまったためです(悲しい)。色々と試行錯誤を繰り返した＆まとまったドキュメントがなかなか見つからなかったので手順をメモしておきます。
  - name: og:image
    content: /ogp/2019-12-29-1.png
  - name: og:type
    content: article
---

# MacOS Catalina から Mojave にダウングレードした

[Medium に書いていた記事](https://medium.com/35d/macos-catalina-%E3%81%8B%E3%82%89-mojave-%E3%81%AB%E3%83%80%E3%82%A6%E3%83%B3%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%89%E3%81%97%E3%81%9F-88c1caa80a8e)をこちらに移行しました。

表題の通りですが、メインで使っているマシンを MacOS Catalina から Mojave にダウングレードしました。動画配信で使っているキャプチャーボードとの相性がすこぶる悪く、ゲーム配信や録画がうまくできなくなってしまったためです(悲しい)。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">キャプチャーボードとの接続周りが不安定すぎるから、やっぱりまだ Mojave でしばらく戦うことにした。さようなら Catalina よろしく Mojave😇</p>&mdash; Yuji Tsuburaya (@___35d) <a href="https://twitter.com/___35d/status/1198748630858883072?ref_src=twsrc%5Etfw">November 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

色々と試行錯誤を繰り返した＆まとまったドキュメントがなかなか見つからなかったので手順をメモしておきます。

## 前提

- MacOS Catalina を使用している
- 外付けの HDD または SSD (または USB フラッシュメモリ) を持っている
- Time Machine のバックアップはない状態（クリーンインストールするしかない状態）

## やったこと・手順

1. ディスクユーティリティから外付けのドライブにパーティションを作る 20GB くらいあると安心です。パーティション作るの面倒だったら USB メモリとかでもできる、はず。僕は手持ちの SSD でやりました。

2. [App Store](https://apps.apple.com/us/app/macos-mojave/id1398502828?ls=1&mt=12) から Mojave のインストールイメージをダウンロード。インストールはしない。というかできないです。

3. 以下のコマンドを叩いて、作成したパーティションにインストールイメージをインストールします。

```
sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia — volume /Volumes/[作成したパーティション名]
```

このタイミングで、何回かエラーが出ました。パーティションを初期化したあとにフォルダの作成とか、なにか操作してしまうと、インストールできないっぽいので、注意が必要です。
（公式ページ）[https://support.apple.com/ja-jp/HT201372](https://support.apple.com/ja-jp/HT201372)

4. mac を再起動させます。「command (⌘) + R」を押しながら再起動させて、macOS を再インストールを選択します。ここでさきほどインストールした外付け SSD から Mojave がインストール対象として選択できれば成功です。30分くらいでインストールが完了しました。

![インストーラのスクリーンショット](../assets/img/2019-12-29-2.jpg)

Catalina は β 版のときからもろもろ苦しめられてきて戦いつづけてたんだけど、とうとう戦いに終止符が打てて良かった（完全敗北だけど）。Mac でゲーム実況とかしてる人がどういう環境でやってるのか本当に知りたいから誰か教えて……

とはいえ、これで快適にゲーム映像が取り込めるようになったので、ゲーム配信と動画収録頑張ります💪 ポケモンやるぞ〜。
