<template>
	<div id="body-wrapper">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "Body",
    components: {},
    created () {},
    mounted () {},
    beforeUnmount() {},
    data () {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
	}
</script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';

  #body-wrapper {
    background: $body-background;
    flex: 1;
  }
</style>
