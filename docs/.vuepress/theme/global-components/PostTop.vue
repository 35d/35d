<template>
  <ul class="breadcrumbs breadcrumbs--with-here">
    <li class="breadcrumbs__item breadcrumbs__item--first"><a href="/blog/">ブログトップ</a><span> </span></li>
    <li class="breadcrumbs__item breadcrumbs__item--last breadcrumbs__item--here">
      {{ pageTitle }}
      <span></span>
    </li>
  </ul>
</template>

<style scoped>
.breadcrumbs {
  /* border: 1px solid; */
  list-style: none;
  margin: 0;
  padding: 0;
}
.breadcrumbs__item {
  display: inline;
}
.breadcrumbs__item::after {
  content: ">";
  font-size: 0.5em;
  margin: 0 0.5em;
  position: relative;
  bottom: 0.25em;
}
.breadcrumbs__item--last::after {
  display: none;
}
</style>

<script>
export default {
  computed: {
    pageTitle() {
      return this.$page.title;
    },
  },
  created() {},
};
</script>
