<template>
  <div class="category-card-placeholder"></div>
</template>

<script>
export default {
  name: "CategoryCardPlaceholder",
  components: {},
  created() { },
  mounted() { },
  beforeUnmount() { },
  props: {},
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

.category-card-placeholder {
  flex: 0 0 315px;
  border-radius: 4px;
  padding: 30px;
  margin-bottom: 0;
  text-align: center;
  text-decoration: none;
  box-shadow: $card-box-shadow;
  transition: transform 0.2s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: $white;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
}
</style>
