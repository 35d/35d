module.exports = {
  title: "35d",
  description: "@35dのブログです。",
  head: [
    ["meta", { title: "35d" }],
    ["meta", { property: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/favicon.png" }]
  ],
  plugins: [
    [
      "@vuepress/google-analytics",
      "@vuepress/blog",
      {
        ga: "UA-148970528-1"
      }
    ]
  ]
};
