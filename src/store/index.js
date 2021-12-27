import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import rooms from './modules/rooms'
import devices from './modules/devices'
import attachments from './modules/attachments'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    appVersion: process.env.VUE_APP_VERSION || '0',
    buildDate: process.env.VUE_APP_BUILD_DATE || ''
  },
  getters: {
    appVersion: state => state.appVersion,
    buildDate: state => state.buildDate
  },
  modules: {
    app,
    rooms,
    devices,
    attachments
  }
})
