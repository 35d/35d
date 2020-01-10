module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
  themeConfig: {
    search: false, // 検索ボックス非表示
    lastUpdated: "最終更新日時",
    nav: [
      { text: "技術", link: "/blog/categories/development/" },
      { text: "記録", link: "/blog/categories/log/" },
      { text: "雑", link: "/blog/categories/zatsu/" },
      { text: "タグ一覧", link: "/blog/tags/" }
    ]
    // sidebar: ["/", "/", ["/", "Explicit link text"]]
  },
  title: "35d",
  description: "@___35dのブログです。",
  head: [
    ["meta", { title: "35d" }],
    ["meta", { property: "og:title", content: "35d" }],
    ["meta", { property: "og:description", content: "@___35dのブログです。" }],
    ["meta", { property: "og:image", content: "https://35d.jp/og-image.jpg" }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["script", { "data-ad-client": "ca-pub-6440039437376764", async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }]
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
    ],
    ["@vuepress/nprogress"]
  ]
};
