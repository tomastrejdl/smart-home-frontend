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

import { AttachmentType } from './other/attachment-types'

Vue.use(VueAxios, axios)
Vue.use(ModalDialogs)

Vue.config.productionTip = false
Vue.config.ignoredElements = ['ion-icon']

Vue.component('NavBar', NavBar)
Vue.component('pulse-loader', PulseLoader)

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
