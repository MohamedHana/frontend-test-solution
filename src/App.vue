<template>
	<div id="tawk-page">
		<tawk-header></tawk-header>
		<tawk-body></tawk-body>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
	name: "App",
	components: {
		'tawk-header': Header,
		'tawk-body': Body
	}
}
</script>

<style lang="scss">
@import 'scss/main.scss';

#tawk-page {
	display: flex;
	flex-direction: column;
	min-height: 100%;
}
</style>
