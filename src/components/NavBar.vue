<template>
  <nav class="flex flex-wrap items-center justify-between p-4">
    <div
      class="order-2 w-1/3 text-center font-bold flex justify-center items-center"
      v-if="links"
    >
      <router-link class="px-1" to="/">Home</router-link> |
      <router-link class="px-1" to="/rooms">Rooms</router-link> |
      <router-link class="px-1" to="/devices">Devices</router-link> |
      <router-link class="px-1" to="/about">About</router-link>
    </div>
    <div class="navbar-menu order-1 text-left w-1/3">
      <router-link
        v-if="backLink"
        :to="backLink"
        class="text-2xl inline-block mt-0 mr-10 text-blue-900 hover:text-blue-700"
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </router-link>
    </div>
    <div class="navbar-menu order-3 w-1/3 text-right">
      <!-- <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700"
        href="#"
        >Blog</a
      > -->
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Boolean,
      default: true
    },
    backLink: String
  }
}
</script>

<style scoped>
.router-link-exact-active {
  color: #42b983;
}
</style>
