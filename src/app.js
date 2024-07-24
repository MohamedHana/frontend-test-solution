import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'

window.app = new Vue({
	router: router,
	store: store,
	filters: filters,
	el: '#app',
	render: h => h(App)
})
