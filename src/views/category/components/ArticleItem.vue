<template>
  <li class="article-item">
    <a href="#" @click.prevent="showArticle">
      <div class="article-info">
        <i :class="'fa fa-' + article.icon"></i>
        <div>
          <span>
            {{ article.title }}
          </span>
          <span class="caption">Updated {{ article.updatedOn | updatedOnDate }}</span>
        </div>
      </div>
      <i class="fas fa-chevron-right"></i>
    </a>
  </li>
</template>

<script>
export default {
  name: "ArticleItem",
  components: {},
  created() { },
  mounted() { },
  beforeUnmount() { },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    showArticle() {
      prompt(JSON.stringify(this.article))
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.article-item {
  background-color: $white;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;

  &:hover {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }

  a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px;
    color: $text-black;
    text-decoration: none;
    padding: 20px 30px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;

    i {
      color: $green;
      font-size: 24px;
    }

    .caption {
      color: $text-gray;
      font-size: 11px;
      font-weight: 400;
      line-height: 22px;
    }
  }

  .article-info {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex-grow: 1;
    margin-right: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    div {
      margin-left: 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
}
</style>
