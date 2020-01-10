<template>
  <div class="ads-area" v-if="shouldShowAd()">
    <p class="ads">ADS</p>
    <div><Adsense data-ad-client="ca-pub-6440039437376764" data-ad-slot="9351153286"></Adsense>s</div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  mounted() {},
  methods: {
    // note: 記事ページにのみ広告を表示する
    shouldShowAd() {
      return this.$frontmatter.layout === "Post";
    }
  }
};
</script>

<style scoped>
.ads-area {
  padding: 32px;
}

.ads {
  text-align: center;
  font-weight: bold;
  color: #aaa;
}
</style>
