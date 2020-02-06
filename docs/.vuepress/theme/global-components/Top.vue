<template>
  <main class="l-main" :class="{ darkMode: isDarkMode }">
    <!-- <div class="c-switch">
      <a href="#" v-on:click="onPressSwitch" v-if="isDarkMode">🌚</a>
      <a href="#" v-on:click="onPressSwitch" v-if="!isDarkMode">🌞</a>
    </div> -->
    <div class="c-profile">
      <figure class="c-profile_figure">
        <img src="../../../assets/img/top/35d.gif" alt="___35d" class="c-profile_image" />
        <figcaption class="c-profile_caption">@___35d</figcaption>
      </figure>
      <!-- <div class="c-line"></div> -->
      <div>
        <ul class="c-linkArea">
          <li class="c-linkArea__list">
            <a href="#" @click.self="() => clickLink('PROFILE')" :class="[{ 'c-linkArea__list-active': activeContent === 'PROFILE' }]">PROFILE</a>
          </li>
          <li class="c-linkArea__list">
            <a href="#" @click.self="() => clickLink('BLOG')" :class="[{ 'c-linkArea__list-active': activeContent === 'BLOG' }]">BLOG</a>
          </li>
          <li class="c-linkArea__list">
            <a href="#" @click="() => clickLink('WORKS')" :class="[{ 'c-linkArea__list-active': activeContent === 'WORKS' }]">WORKS</a>
          </li>
          <li class="c-linkArea__list">
            <a href="#" @click="() => clickLink('CONTACT')" :class="[{ 'c-linkArea__list-active': activeContent === 'CONTACT' }]">CONTACT</a>
          </li>
        </ul>
      </div>
      <div class="c-contentArea" v-if="!!activeContent">
        <div v-if="activeContent === 'PROFILE'">
          <p style="font-size: 15px;">
            Yuji Tsuburaya (@___35d)<br />
            <span style="display: block; margin-bottom: 8px;"></span>
            🏠 Shomikitazawa / Tokyo<br />
            👩‍💻 Frontend Engineer / Vue.js / React <br />
            🏢 <a href="j-cat.co.jp" target="_blank" class="link">j-cat.co.jp</a> CTO / Co-Founder (2019/11-) <br />
            <span style="margin-left: 18px;"></span>ex. BizReach (2016-2019)<br />
            <span style="margin-left: 18px;"></span>ex. RICOH(2015-2016)<br />
            🎨 by @ch1ch1ch1_123<br />
            💚 Minimalism / Notion / GTD / Splatoon2<br />
          </p>
          <p style="font-size: 14px;">
            <br />
            - 1990年 福島県郡山市生まれ。<br />
            - 2015年 筑波大学大学院 数理物質科学研究科専攻修了。<br />
            同年、株式会社リコーに入社。SEとしてIT製品のソフトウェア開発を担当。<br />
            - 2016年 株式会社ビズリーチにフロントエンドエンジニアとして入社。<br />
            複数のWebアプリ・ネイティブアプリ開発の経験を積み、2017年に社内で技術者賞として表彰。<br />
            - 2019年から現在まで Japan Culture and Technology 株式会社 CTO / Founder。
          </p>
        </div>
        <div v-if="activeContent === 'BLOG'">
          <p class="tac" style="font-size: 14px">
            <a href="https://medium.com/35d" target="_blank" class="link">Medium</a> からお引越ししました<br />👇<br /><a href="/blog" class="link">新ブログ</a>
          </p>
        </div>
        <div v-if="activeContent === 'WORKS'">
          <p>そのうち書く</p>
        </div>
        <div v-if="activeContent === 'CONTACT'" class="c-snsArea">
          <p><a href="https://twitter.com/___35d" target="_blank" class="link">TWITTER</a></p>
          <p><a href="https://www.facebook.com/yuji.tsuburaya" target="_blank" class="link">FACEBOOK</a></p>
          <p><a href="https://github.com/35d" target="_blank" class="link">GITHUB</a></p>
          <!-- <ul>
            <li>
              <a href="https://twitter.com/___35d" target="_blank">
                TWITTER
              </a>
            </li>
          </ul>
          <ul :class="['c-profile_list', { 'c-profile_list-dark': isDarkMode }]">
            <li>
              <a href="https://twitter.com/___35d" target="_blank">
                <img src="../../../assets/img/top/twitter.png" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/yuji.tsuburaya" target="_blank">
                <img src="../../../assets/img/top/facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://github.com/35d" target="_blank">
                <img src="../../../assets/img/top/GitHub.png" alt="GitHub" />
              </a>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      isDarkMode: true,
      activeContent: "PROFILE" // デフォルトプロフィール
    };
  },
  computed: {},
  mounted() {
    window.addEventListener(
      "touchmove",
      function(event) {
        event.preventDefault();
      },
      { passive: false }
    );
  },
  methods: {
    onPressSwitch() {
      this.isDarkMode = !this.isDarkMode;
    },
    clickLink(link) {
      this.activeContent = link;
    }
  }
};
</script>

<style lang="stylus" scoped>
html
  color: #000
  background: #fff

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td
  margin: 0
  padding: 0
  font-size: 12px

table
  border-collapse: collapse
  border-spacing: 0

fieldset,
img
  border: 0

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var
  font-style: normal
  font-weight: normal

ol,
ul
  list-style: none

caption,
th
  text-align: left

h1,
h2,
h3,
h4,
h5,
h6
  font-size: 100%
  font-weight: normal

q:before,
q:after
  content: ""

abbr,
acronym
  border: 0
  font-variant: normal

sup
  vertical-align: text-top

sub
  vertical-align: text-bottom

input,
textarea,
select
  font-family: inherit
  font-size: inherit
  font-weight: inherit
  *font-size: 100%

legend
  color: #000

body
  font-family: 'Noto Sans JP', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  overflow: hidden

.l-main
  padding-top: 64px
  padding-bottom: 64px
  min-height: 100vh
  display: flex
  justify-content: center
  // height: calc(100vh + 32px);
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  margin-top: -32px!important

.c-snsArea
  text-align: center

.c-contentArea

.c-linkArea
  margin-bottom: 24px
  display: flex;

  &__list
    margin-right: 32px
    font-size: 16px

    a
      color: #FFF
      font-weight: 200

    &:last-child
      margin-right: 0

    &-active
      text-decoration: underline

.c-profile
  width: 300px
  min-height: calc(100vh - 90px)
  display: flex
  flex-direction: column
  align-items: center

  &_
    &figure
      margin-bottom: 40px
      text-align: center

    &image
      width: 160px
      height: 160px
      border-radius: 80px
      margin-bottom: 8px
      text-align: center

    &caption
      text-align: center
      font-size: 16px

    &list
      display: flex
      flex-direction: row
      width: 120px
      margin-bottom: 8px
      justify-content: space-evenly

      img
        width: 24px
        height: 24px
        border-radius: 20px

      li
        // margin-right: 8px

      li:not(:last-child)
        // margin-right: 16px

      &-dark
        opacity: 0

    &text
      color: #FFF
      text-align: center
      padding-top: 12px

      a
        color: #FFF

// .c-switch
//   position: absolute
//   top: 16
//   right: 16
//   opacity: 0.3

//   a
//     text-decoration: none

.darkMode
  background-color: #111
  color: #EEE

  &caption
    text-align: center

.tac
  text-align: center

.link
  color: #ddd
  text-decoration: underline
</style>
