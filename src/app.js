import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import api from './api'

window.app = new Vue({
	router: router,
	store: store,
	filters: filters,
	api: api,
	el: '#app',
	render: h => h(App)
})
