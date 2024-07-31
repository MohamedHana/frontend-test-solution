<template>
  <router-link :to="`/category/${category.id}`" class="category-card">
    <div class="icon">
      <i :class="'fa fa-' + category.icon"></i>
    </div>
    <h2>{{ category.title }}</h2>
    <div class="caption">
      <span class="text-green">{{ category.totalArticle }} articles</span>
      <span class="text-small"
        >Last update {{ category.updatedOn | timeAgo }}</span
      >
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CategoryCard",
  components: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  props: {
    category: {
      type: Object,
      required: true,
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

.category-card {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 315px;
  flex: 0 0 315px;
  background-color: $white;
  background: $white;
  border-radius: 4px;
  padding: 30px;
  margin-bottom: 0;
  text-align: center;
  text-decoration: none;
  box-shadow: $card-box-shadow;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  cursor: pointer;

  &:hover {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  .icon {
    position: relative;
    margin-bottom: 20px;
    color: $green;
    font-size: 2.5em;
  }

  h2 {
    margin-bottom: 20px;
    color: $text-black;
    font-size: 20px;
    line-height: 24px;
  }

  .caption {
    span {
      font-size: 13px;
      color: $text-gray;
      display: block;
    }

    .text-small {
      font-size: 11px;
    }

    .text-green {
      color: $green;
    }
  }
}

.ie10-class {
  .category-card {
    width: 315px;
    background-color: $white;
    background: $white;
    float: left;
    margin: 15px;
  }
}
</style>
