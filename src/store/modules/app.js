/**
 * App Vuex module
 * Houses global configuration and state
 */
export default {
  namespaced: true,
  state: {
    apiUrl:
      process.env.NODE_ENV !== 'production'
        ? 'https://smarthome.local/api'
        : 'https://localhost:3000/api',
    apiVersion: 'v1'
  },
  mutations: {},
  actions: {},
  getters: {
    getApiUrl: state => route =>
      state.apiUrl + '/' + state.apiVersion + '/' + route
  }
}
