---
title: VuePress v1.3.0 リリース
date: 2020-01-31
category: development
tags:
  - VuePress
meta:
  - property: og:title
    content: VuePress v1.3.0 リリース
  - property: og:description
    content: 細かいバグ修正と、何個かの新機能追加がありました。自分に関係ありそうなところをピックアップしてみます。
  - property: og:type
    content: article
---

<PostTop />

# VuePress v1.3.0 リリース

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">v1.3.0 has been officially published! 🎉🎊<br><br>For the latest changes, check out:<a href="https://t.co/iNvKQC12NS">https://t.co/iNvKQC12NS</a></p>&mdash; VuePress (@vuepressjs) <a href="https://twitter.com/vuepressjs/status/1222897778885414917?ref_src=twsrc%5Etfw">January 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

2020 年 1 月 31 日、 VuePress の v1.3.0 がリリースされましたね。

細かいバグ修正と、何個かの新機能追加がありました。自分に関係ありそうなところをピックアップしてみます。

### [Bug Fixes] plugin-google-analytics: duplicate tracking of first page (fix #2017) (#2039) (a69df21)

トップページで 2 回 PV がカウントされてしまうバグが修正されました。（というか今までそうだったのか……知らなかった……）

### [Feature] \$cli: Notify users of a newer release

CLI で新しいアップデートがあった場合に通知してくれるようになりました。これで気づきやすくなりましたね。

ざっと読んでみたものの、あまり自分と関係ありそうな大きなリリースはありませんでした。細かい内容はこちらから。
![CHANGELOG.md](https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md)
