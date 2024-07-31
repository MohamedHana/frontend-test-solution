<template>
  <div id="body-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Body",
  components: {},
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

#body-wrapper {
  background: $body-background;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
