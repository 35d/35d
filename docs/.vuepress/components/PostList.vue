<template>
  <div>
    <ul>
      <li v-for="post in posts">
        {{ post.date }}
        <!-- {{ dateFormat(post.date) }} -->
        <a v-bind:href="post.path">{{ post.title }}</a>
        <!-- <p>{{post.frontmatter.description}}</p> -->
        <!-- <a v-bind:href="post.path">続きを読む</a> -->
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {},
  computed: {
    posts() {
      return (
        this.$site.pages
          // blogディレクトリ以下を投稿記事一覧表示の対象とする
          .filter(post => post.path.startsWith("/blog/"))
          // dateに設定した日付の降順にソートする
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      );
    },
    date() {
      return "";
    }
  }
};
</script>
