<template>
  <ul>
    <li v-for="post in posts">
      <a v-bind:href="post.path">
        {{ post.title }}
      </a>
    </li>
  </ul>
</template>

<script>
import moment from "moment";
import _ from "lodash";

export default {
  methods: {},
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(post => post.path.startsWith("/blog/"))
        .filter(post => !!post.title)
        .map(post => {
          post.title = `${moment(post.frontmatter.date).format("YYYY/MM/DD")} ${post.title}`;
          return post;
        })
        .filter(post => {
          console.log(post);
          return true;
        });
      return _.orderBy(posts, ["title"], ["desc"]);
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
