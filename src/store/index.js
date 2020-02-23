import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import rooms from './modules/rooms'
import devices from './modules/devices'
import attachments from './modules/attachments'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    app,
    rooms,
    devices,
    attachments
  }
})
