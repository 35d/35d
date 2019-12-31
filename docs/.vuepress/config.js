module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
  title: "35d",
  description: "@35dのブログです。",
  head: [
    ["meta", { title: "35d" }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/favicon.png" }]
  ],
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/blog/",
            itemPermalink: "/blog/:year-:month-:day-:slug",
            layout: "IndexPost", // 記事一覧ページ /blog/ ホーム
            itemLayout: "Post", // 記事詳細ページ
            pagination: {
              lengthPerPage: 30
            }
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/blog/tags/",
            layout: "Tags",
            scopeLayout: "Tag"
          }
        ]
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-148970528-1"
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://35d.jp/",
        changefreq: "hourly"
      }
    ]
  ]
};
