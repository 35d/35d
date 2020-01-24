<template>
  <div class="ads-area" v-if="shouldShowAd()">
    <p class="title">ADS</p>
    <div class="ads-area-inner">
      <div class="ads">
        <Adsense data-ad-client="ca-pub-6440039437376764" data-ad-slot="9879692356"></Adsense>
      </div>
      <div class="ads ads-right">
        <Adsense data-ad-client="ca-pub-6440039437376764" data-ad-slot="1453094345"></Adsense>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  padding: 32px 0;
}

.title {
  text-align: center;
  font-weight: bold;
  color: #aaa;
}

.ads-area-inner {
  display: flex;
  justify-content: space-around;
}

.ads {
  /* background-color: red; */
  height: 250px;
  min-width: 300px;
}
@media screen and (max-width: 660px) {
  .ads-right {
    display: none;
  }
}
</style>
