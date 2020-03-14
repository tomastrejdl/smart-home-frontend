/**
 * App Vuex module
 * Houses global configuration and state
 */
export default {
  namespaced: true,
  state: {
    apiUrl:
      process.env.NODE_ENV == 'production'
        ? window.origin + '/api'
        : 'http://localhost:3000/api',
    apiVersion: 'v1'
  },
  mutations: {},
  actions: {},
  getters: {
    getApiUrl: state => route =>
      state.apiUrl + '/' + state.apiVersion + '/' + route
  }
}
