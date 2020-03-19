<template>
  <div
    id="app"
    v-if="dataLoaded"
    class="h-screen w-screen antialiased text-gray-900"
  >
    <div class="app-background"></div>
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </div>
  <div
    v-else
    class="h-screen w-screen flex flex-col justify-center items-center"
  >
    <pulse-loader :loading="!dataLoaded" color="#4299e1"></pulse-loader>
    <div v-if="error">
      Error. Could not connect to server
      <button @click="loadData" class="bg-blue-500 px-2 py-1 rounded mx-auto">
        Reload
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    transitionName: 'slide-right',
    dataLoaded: false,
    error: false
  }),
  async mounted() {
    await this.loadData()
  },
  methods: {
    ...mapActions({
      getRooms: 'rooms/getRooms',
      getDevices: 'devices/getDevices',
      getAttachments: 'attachments/getAttachments'
    }),
    async loadData() {
      // LOAD DATA FROM API
      try {
        await this.getRooms()
        await this.getDevices()
        await this.getAttachments()
        this.dataLoaded = true
      } catch (err) {
        this.error = true
      }
    }
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

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.app-background {
  @apply fixed top-0 left-0 w-screen h-screen;
  background-image: url('/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(1.1);
  z-index: -999;
}

ion-icon {
  margin-bottom: -0.1em;
}

a:focus,
button:focus {
  outline: none;
  @apply shadow-outline;
}

a,
button,
.clickable,
.clickable-5 {
  @apply block transform transition duration-100 ease-in-out;
}

.clickable-flex,
.clickable-flex-5 {
  @apply flex transform transition duration-100 ease-in-out;
}

a:hover,
button:hover,
.clickable-flex:hover,
.clickable:hover {
  /* a:focus,
button:focus,
.clickable-flex:focus,
.clickable:focus { */
  @apply scale-110;
}

.clickable-flex-5:hover,
.clickable-5:hover {
  /* .clickable-flex-5:focus,
.clickable-5:focus { */
  @apply scale-105;
}

a:active,
button:active,
.clickable-flex:active,
.clickable:active {
  @apply scale-90;
}

.clickable-flex-5:active,
.clickable-5:active {
  @apply scale-95;
}

/* Background filters */
.bg-blur {
  backdrop-filter: blur(20px);
  transition: backdrop-filter 0.2s;
}

.bg-blur-brighter {
  backdrop-filter: blur(20px) brightness(1.3);
  transition: backdrop-filter 0.2s;
}

.bg-blur-darker {
  backdrop-filter: blur(20px) brightness(0.9);
  transition: backdrop-filter 0.2s;
}

/** ANIMATIONS */

/* Fade bounce */
.fade-bounce-enter,
.fade-bounce-leave-to {
  opacity: 0;
  transform: scale(0);
}

.fade-bounce-enter-active {
  transition: all 0.15s cubic-bezier(0.28, 1.48, 0.74, 1.35);
}
.fade-bounce-leave-active {
  transition: all 0.15s ease-out;
}

/* Slide */
.slide-right-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 0.1s ease-in;
}
.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 0.1s ease-out;
}

.slide-right-move,
.slide-left-move {
  transition: all 0.2s;
}

/* Fade */
.fade-enter,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(20px) brightness(1.3);
}

.fade-enter-active {
  transition: all 0.2s;
  backdrop-filter: blur(20px) brightness(1.3);
}

.fade-leave-active {
  transition: all 0.3s;
  transition: opacity 0s;
  opacity: 0;
  transform: translateY(0);
  position: absolute;
  backdrop-filter: blur(20px) brightness(1.3);
}

.fade-move {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

ion-icon {
  --ionicon-stroke-width: 12px;
}

@media (min-width: 640px) {
  ion-icon {
    --ionicon-stroke-width: 16px;
  }
}
</style>
