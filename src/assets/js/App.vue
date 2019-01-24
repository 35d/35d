<template>
  <main class="l-main" :class="{ darkMode: isDarkMode }">
    <div class="c-switch">
      <a href="#" v-on:click="onPressSwitch" v-if="isDarkMode">🌚</a>
      <a href="#" v-on:click="onPressSwitch" v-if="!isDarkMode">🌞</a>
    </div>
    <div class="c-profile">
      <figure class="c-profile_figure">
        <img src="../images/35d.gif" alt="___35d" class="c-profile_image">
        <figcaption class="c-profile_caption">@___35d</figcaption>
      </figure>
      <ul :class="['c-profile_list', { 'c-profile_list-dark': isDarkMode}]" v-if="!isDarkMode">
        <li>
          <a href="https://medium.com/35d" target="_blank">
            <img src="../images/medium.png" alt="blog">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/___35d" target="_blank">
            <img src="../images/twitter.png" alt="twitter">
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/yuji.tsuburaya" target="_blank">
            <img src="../images/facebook.png" alt="facebook">
          </a>
        </li>
        <li>
          <a href="https://github.com/35d" target="_blank">
            <img src="../images/GitHub.png" alt="GitHub">
          </a>
        </li>
      </ul>
      <p class="c-profile_text" v-if="isDarkMode">
        個人開発が好きで
        <br>いろいろ作っています
        <br>
        <br>いまは、本のメモサービス
        <a href="https://bukumo.jp" target="_blank">Bukumo</a>
        <br>をがんばっています
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    };
  },
  mounted() {
    window.addEventListener("touchmove", function(event) {
      event.preventDefault();
    });
  },
  methods: {
    onPressSwitch() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>