import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: {
      loading: false,
      error: null,
      data: []
    },
  },
  mutations: {
    setCategoriesLoading(state, payload) {
      state.categories.loading = payload
    },
    setCategoriesError(state, payload) {
      state.categories.error = payload
    },
    setCategoriesData(state, payload) {
      state.categories.data = payload
    },
  },
  actions: {
    fetchCategories({ commit, state }) {
      commit('setCategoriesLoading', true)
      commit('setCategoriesError', null)

      setTimeout(() => {
        api.request.get(api.endpoints.categories.fetch)
          .then((response) => {
            commit('setCategoriesData', response.data)
          })
          .catch((error) => {
            commit('setCategoriesError', error)
          })
          .finally(() => {
            commit('setCategoriesLoading', false)
          })
      }, 1000)
    }
  },
  getters: {
    categories: (state) => state.categories.data.filter(category => category.enabled).sort((a, b) => a.order - b.order),
    haveCategories: (state, getters) => getters.categories.length > 0,
    categoriesAreLoading: (state) => state.categories.loading,
    categoriesError: (state) => state.categories.error,
  }
})
