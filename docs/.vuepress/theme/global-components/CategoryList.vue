<template>
  <div>
    <template v-for="category in categories">
      <a v-bind:href="category.path" style="margin-right: 8px;">{{ category.name }}</a>
    </template>
  </div>
</template>

<script>
import moment from "moment";

export default {
  computed: {
    categories() {
      return this.$frontmatterKey.list;
    },
    date() {
      return "";
    }
  },
  mounted() {}
};
</script>
