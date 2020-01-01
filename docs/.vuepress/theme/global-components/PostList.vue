<template>
  <ul>
    <li v-for="post in posts">
      <a v-bind:href="post.path">
        {{ post.frontmatter.date }}
        {{ post.title }}
      </a>
    </li>
  </ul>
</template>

<script>
import moment from "moment";

export default {
  methods: {},
  computed: {
    posts() {
      return this.$site.pages
        .filter(post => post.path.startsWith("/blog/"))
        .filter(post => !!post.title)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        .map(post => {
          post.frontmatter.date = moment(post.frontmatter.date).format("YYYY/MM/DD");
          return post;
        });
    },
    categories() {
      return [];
      // return this.$categories.list.sort((x, y) => y.posts.length - x.posts.length);
    },
    date() {
      return "";
    }
  },
  mounted() {}
};
</script>
