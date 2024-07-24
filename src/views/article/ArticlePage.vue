<template>
  <div class="container">
    <div class="card">
      <h4>{{ article.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",
  components: {},
  created() { },
  mounted() { },
  beforeUnmount() { },
  props: {
    article: {
      default: function () {
        return { title: 'Article title' }
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.container {
  max-width: 1000px;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  height: 355px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    color: $text-gray;
  }
}
</style>