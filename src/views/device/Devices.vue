<template>
  <div>
    <NavBar></NavBar>
    <DeviceList></DeviceList>
    <router-link
      to="/devices/search"
      class="px-4 py-3 max-w-xs mx-auto my-2 flex flex-row"
    >
      <ion-icon class="px-3" name="add-circle-outline" size="large"></ion-icon>
      <div class="w-full flex flex-row justify-between item-center">
        <span class="font-bold text-lg">Add device</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import DeviceList from '@/components/device/DeviceList'

export default {
  components: {
    DeviceList
  }
}
</script>

<style scoped></style>
