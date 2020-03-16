<template>
  <div id="app" v-if="dataLoaded">
    <transition :name="transitionName" mode="out-in">
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

<style lang="postcss">
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
  @apply scale-110;
}

.clickable-flex-5:hover,
.clickable-5:hover {
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

/** ANIMATIONS */

/* Fade bounce */
.fade-bounce-enter {
  opacity: 0;
  transform: scale(0);
}

.fade-bounce-enter-active {
  transition: all 0.15s cubic-bezier(0.28, 1.48, 0.74, 1.35);
}
.fade-bounce-leave-active {
  transition: all 0.15s ease-out;
}

.fade-bounce-leave-to {
  opacity: 0;
  transform: scale(0);
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
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-leave-active {
  transition: all 0.3s;
  transition: opacity 0s;
  opacity: 0;
  transform: translateY(0);
  position: absolute;
}

.fade-move {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
</style>
