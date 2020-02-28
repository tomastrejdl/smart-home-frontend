import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () =>
      import(/* webpackChunkName: "rooms" */ '../views/room/Rooms.vue')
  },
  {
    path: '/rooms/add',
    name: 'add-room',
    component: () =>
      import(/* webpackChunkName: "add-room" */ '../views/room/AddRoom.vue')
  },
  {
    path: '/devices/search',
    name: 'search-devices',
    component: () =>
      import(
        /* webpackChunkName: "search-devices" */ '../views/device/SearchDevices.vue'
      )
  },
  {
    path: '/devices/add/:deviceMacAddress',
    name: 'add-device',
    component: () =>
      import(
        /* webpackChunkName: "add-device" */ '../views/device/AddDevice.vue'
      )
  },
  {
    path: '/devices',
    name: 'devices',
    component: () =>
      import(/* webpackChunkName: "devices" */ '../views/device/Devices.vue')
  },
  {
    path: '/attachments/add',
    name: 'add-attachment',
    component: () =>
      import(
        /* webpackChunkName: "add-attachment" */ '../views/attachment/AddAttachment.vue'
      )
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
