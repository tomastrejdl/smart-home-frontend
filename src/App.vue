<template>
  <div id="app" v-if="dataLoaded">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    transitionName: 'slide-right',
    dataLoaded: false
  }),
  async mounted() {
    // LOAD DATA FROM API
    await this.getRooms()
    await this.getDevices()
    await this.getAttachments()
    this.dataLoaded = true
  },
  methods: {
    ...mapActions({
      getRooms: 'rooms/getRooms',
      getDevices: 'devices/getDevices',
      getAttachments: 'attachments/getAttachments'
    })
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ion-icon {
  margin-bottom: -0.1em;
}

button:focus {
  outline: none;
}

.btn {
  @apply bg-blue-500 text-white font-bold rounded px-4 py-1;
}
</style>
