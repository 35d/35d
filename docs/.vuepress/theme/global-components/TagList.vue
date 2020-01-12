<template>
  <div class="taglist-area">
    <template v-for="tag in tags">
      <a v-bind:href="tag.path" style="margin-right: 8px;">{{ tag.name }}</a>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$frontmatterKey.list;
    }
  }
};
</script>

<style lang="stylus" scoped>
.taglist-area
  word-wrap: break-word
</style>
