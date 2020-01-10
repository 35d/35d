<template>
  <div class="ads-area" v-if="showAd()">
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
    showAd() {
      // TODO 表示条件を付ける
      return false;
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
