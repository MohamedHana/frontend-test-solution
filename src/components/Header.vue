<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3 class="mt-2">Everything you need to manage your messaging</h3>
		</div>
		<div id="search-container">
			<input v-model="query" :disabled="loading" type="text" class="search-input" placeholder="Search for answers" 
				aria-label="Search for answers" aria-describedby="search-button">
			<button :disabled="loading" @click="search" class="search-button" type="button">
				<i v-if="loading" class="fa fa-circle-notch fa-spin"></i>
				<i v-else class="fa fa-search"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
    components: {},
    created () {},
    mounted () {},
    beforeUnmount() {},
    data () {
      return {
				query: '',
				loading: false,
				answers: []
			}
    },
    computed: {},
    watch: {},
    methods: {
			search() {}
		},
	}
</script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';

	#header-wrapper {
		margin-top: 36px;
		margin-bottom: 54px;
		display: flex;
		flex-direction: column;
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

		#search-container {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20px;

			.search-input {
				width: 640px;
				padding: 15px;
				border: 1px solid $border-color;
				border-radius: 3px 0 0 4px;
				font-size: 1em;
				outline: none;

				&::placeholder {
					color: $text-gray;
					font-size: 16px;
					line-height: 19.2px;
				}
			}

			.search-button {
				padding: 15px 25px;
				border: 1px solid $green;
				background-color: $green;
				color: $white;
				cursor: pointer;
				border-radius: 0 3px 4px 0;
				font-size: 1em;
				display: flex;
				align-items: center;
				justify-content: center;

				&:focus {
					outline: none;
				}

				&:hover {
					background-color: $green-dark;
					border: 1px solid $green-dark;
				}

				&:disabled {
					background-color: $green-light;
					border: 1px solid $green-light;
					cursor: not-allowed;
				}

				i {
					font-size: 1.2em;
				}
			}
		}
	}

	@media (max-width: 320px) {
		.search-input {
			max-width: 200px;
		}
	}

	@media (max-width: 576px) {
		.search-input {
			max-width: 260px;
		}
	}

	@media (min-width: 577px) and (max-width: 768px) {
		.search-input {
			max-width: 400px;
		}
	}
</style>
