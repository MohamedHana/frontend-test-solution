<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3 class="mt-2">Everything you need to manage your messaging</h3>
    </div>
    <search-articles></search-articles>
  </div>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "Header",
  components: {
    "search-articles": Search,
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
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

#header-wrapper {
  margin-top: 36px;
  margin-bottom: 54px;
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

  #header-text {
    text-align: center;
    font-family: $font-family;
    color: $text-black;
    padding: 20px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 34px;
      line-height: 41px;
    }

    h3 {
      margin-top: 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
