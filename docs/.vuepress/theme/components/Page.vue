<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageEdit :tags="tags" />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems", "tags"]
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

img + em {
  text-align: center;
  display: block;
}

p > img {
  display: block;
  margin: 0 auto;
}

img + strong {
  text-align: center;
  display: block;
}

script + p > strong {
  text-align: center;
  display: block;
}
</style>
