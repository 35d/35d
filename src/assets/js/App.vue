<template>
  <main class="l-main" :class="{ darkMode: isDarkMode }">
    <div class="c-switch">
      <a href="#" v-on:click="onPressSwitch" v-if="isDarkMode">🌚</a>
      <a href="#" v-on:click="onPressSwitch" v-if="!isDarkMode">🌞</a>
    </div>
    <div class="c-profile">
      <figure>
        <img src="../images/35d.gif" alt="___35d" class="c-profile_image">
        <figcaption class="c-profile_caption">@___35d</figcaption>
      </figure>
      <ul :class="['c-profile_list', { 'c-profile_list-dark': isDarkMode}]">
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
          <a href="https://github.com/nikke1925" target="_blank">
            <img src="../images/GitHub.png" alt="GitHub">
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: true
    };
  },
  methods: {
    onPressSwitch() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>