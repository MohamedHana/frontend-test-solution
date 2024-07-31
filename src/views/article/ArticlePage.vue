<template>
  <div class="article-page container">
    <div class="card">
      <h4>{{ article.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",
  components: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  props: {
    article: {
      default: function () {
        return { title: "Article title" };
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.article-page.container {
  max-width: 1000px;
  padding: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .card {
    height: 355px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    h4 {
      color: $text-gray;
    }
  }
}
</style>
