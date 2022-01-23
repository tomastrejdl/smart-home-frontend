<template>
  <nav
    id="navbar"
    class="sm:py-4 flex flex-wrap items-center justify-between px-4 py-2"
  >
    <!-- GLOBAL NAVIGATION -->
    <div id="global-navigation" class="order-2 w-1/3 font-bold text-center">
      <div v-if="links" class="flex items-center justify-center">
        <router-link class="px-2 mx-1 rounded" to="/">Home</router-link>
        <router-link class="px-2 mx-1 rounded" to="/rooms">Rooms</router-link>
        <router-link class="px-2 mx-1 rounded" to="/devices"
          >Devices</router-link
        >
        <router-link class="px-2 mx-1 rounded" to="/about">About</router-link>
      </div>
      <div v-else class="flex items-center justify-center">
        <slot></slot>
      </div>
    </div>

    <!-- BACK ARROW -->
    <div class="navbar-menu mx- order-1 w-1/3 text-left">
      <router-link
        v-if="backLink"
        :to="backLink"
        class="back-link inline-block text-2xl"
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </router-link>
    </div>

    <!-- OTHER NAVIGATION -->
    <div class="navbar-menu order-3 w-1/3 text-right">
      <ul class="flex flex-row justify-end">
        <li v-for="item in menuItems" :key="item.name">
          <button
            :id="item.icon"
            @click="item.action()"
            class="w-8 h-8 text-white bg-blue-500 rounded-full"
            :class="item.classes"
          >
            <ion-icon
              :name="item.icon"
              class="text-xl"
              style="--ionicon-stroke-width: 40px;"
            ></ion-icon>
            <span v-if="item.name">{{ item.name }}</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/**
 * Navigation bar
 * Can show global navigation links or back arrow or both
 */
export default {
  props: {
    links: {
      type: Boolean,
      default: true
    },
    backLink: String,
    menuItems: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped lang="postcss">
.router-link-exact-active {
  backdrop-filter: blur(20px) brightness(1.3);
  @apply text-blue-500;
}

.back-link {
  width: fit-content;
}
</style>
