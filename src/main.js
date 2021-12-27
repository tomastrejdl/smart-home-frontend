import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import * as ModalDialogs from 'vue-modal-dialogs'

import NavBar from '@/components/NavBar'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Toggle from '@/components/Toggle'
import TransitionExpand from '@/components/TransitionExpand'

import { AttachmentType } from './other/attachment-types'

Vue.use(VueAxios, axios)
Vue.use(ModalDialogs)

Vue.config.productionTip = false
Vue.config.ignoredElements = ['ion-icon']

Vue.component('NavBar', NavBar)
Vue.component('pulse-loader', PulseLoader)
Vue.component('Toggle', Toggle)
Vue.component('transition-expand', TransitionExpand)

/* REGISTER BASE COMPONENTS */
var requireComponent = require.context('./', true, /Base[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function(fileName) {
  var baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  var baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
  Vue.component(baseComponentName, baseComponentConfig)
})

// Global definitions available in all components
Vue.mixin({
  data: () => ({
    AttachmentType: AttachmentType
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
