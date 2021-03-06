<template>
  <footer class="page-edit">
    <ul style="padding-left: 0;">
      <li v-for="tag in tags" class="tag">
        <a v-bind:href="'/blog/tags/' + tag + '/'" style="margin-right: 8px;">{{ tag }}</a>
      </li>
    </ul>
    <div class="edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink />
    </div>
    <div class="last-updated" v-if="lastUpdated">
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
    <RectangleAdsense />
    <template v-if="shouldShowPopularPosts()">
      <h3>
        人気記事
      </h3>
      <ul>
        <li v-for="post in _popularPosts">
          <a :href="post.url">{{ post.title }}</a>
        </li>
      </ul>
    </template>
  </footer>
</template>
<script>
import isNil from "lodash/isNil";
import { endingSlashRE, outboundRE } from "../util";
// import ResponsiveAdsense from "../global-components/ResponsiveAdsense";
import RectangleAdsense from "../global-components/RectangleAdsense";
import popularPosts from "../popularPosts";
import _ from "lodash";

export default {
  name: "PageEdit",
  props: ["tags"],
  components: {
    RectangleAdsense
  },
  computed: {
    _popularPosts() {
      return _.shuffle(popularPosts).slice(0, 5);
    },
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink) ? this.$site.themeConfig.editLinks : this.$page.frontmatter.editLink;

      const { repo, docsDir = "", docsBranch = "master", docsRepo = repo } = this.$site.themeConfig;

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath);
      }
      return null;
    },

    editLinkText() {
      return this.$themeLocaleConfig.editLinkText || this.$site.themeConfig.editLinkText || `Edit this page`;
    }
  },
  methods: {
    // note: 記事ページにのみ広告を表示する
    shouldShowPopularPosts() {
      return this.$frontmatter.layout === "Post";
    },
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`;
      return base.replace(endingSlashRE, "") + `/edit` + `/${docsBranch}/` + (docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "") + path;
    }
  }
};
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto

  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color #aeaeae
    .time
      font-weight 400
      color #aaa
.tag
  list-style: none;
  display: inline-block;
  margin-bottom: 4px;
  font-size: 12px;
  a
    color lighten($textColor, 25%)
    background-color: #f2f2f2;
    color: #909090;
    padding: 4px 8px;
    margin-right: 8px;


@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom 0.5rem
    .last-updated
      font-size 0.8em
      float none
      text-align left
</style>
