<template>
  <nav class="flex flex-wrap items-center justify-between p-4">
    <!-- GLOBAL NAVIGATION -->
    <div
      class="order-2 w-1/3 text-center font-bold flex justify-center items-center"
      v-if="links"
    >
      <router-link class="px-1" to="/">Home</router-link> |
      <router-link class="px-1" to="/rooms">Rooms</router-link> |
      <router-link class="px-1" to="/devices">Devices</router-link> |
      <router-link class="px-1" to="/about">About</router-link>
    </div>

    <!-- BACK ARROW -->
    <div class="navbar-menu order-1 text-left w-1/3">
      <router-link
        v-if="backLink"
        :to="backLink"
        class="text-2xl inline-block mt-0 mr-10"
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </router-link>
    </div>

    <!-- OTHER NAVIGATION -->
    <div class="navbar-menu order-3 text-right w-1/3">
      <ul class="flex flex-row justify-end">
        <li v-for="item in menuItems" :key="item.name">
          <button
            @click="item.action()"
            class="px-4 border border-transparent rounded hover:border-gray-500 bg-transparent active:bg-gray-300"
            :class="item.classes"
          >
            <ion-icon :name="item.icon"></ion-icon>
            {{ item.name }}
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

<style scoped>
.router-link-exact-active {
  color: #42b983;
}
</style>
