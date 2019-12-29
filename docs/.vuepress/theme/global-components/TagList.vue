<template>
  <ul>
    <template v-for="tag in tags">
      <a v-bind:href="tag.path" style="margin-right: 8px;">{{ tag.name }}</a>
    </template>
  </ul>
</template>

<script>
import moment from "moment";

export default {
  computed: {
    tags() {
      return this.$frontmatterKey.list;
    },
    date() {
      return "";
    }
  },
  mounted() {}
};
</script>
