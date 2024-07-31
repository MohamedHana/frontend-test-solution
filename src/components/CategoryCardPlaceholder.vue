<template>
  <div class="category-card-placeholder"></div>
</template>

<script>
export default {
  name: "CategoryCardPlaceholder",
  components: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  props: {},
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

.category-card-placeholder {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 315px;
  flex: 0 0 315px;
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
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: $white;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#eeeeee),
    color-stop(8%, #dddddd),
    to(#eeeeee)
  );
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.ie10-class {
  .category-card-placeholder {
    width: 315px;
    background-color: $white;
    background: $white;
    float: left;
    margin: 15px;
  }
}
</style>
