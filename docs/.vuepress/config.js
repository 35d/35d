module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
  themeConfig: {
    nav: [
      { text: "技術", link: "/blog/categories/development/" },
      { text: "記録", link: "/blog/categories/log/" },
      { text: "雑", link: "/blog/categories/zatsu/" },
      { text: "タグ一覧", link: "/blog/tags/" }
    ]
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
          },
          {
            id: "category",
            keys: ["category"],
            path: "/blog/categories/",
            layout: "Categories",
            scopeLayout: "Category"
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
