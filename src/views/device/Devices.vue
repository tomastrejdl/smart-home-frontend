<template>
  <div>
    <NavBar />
    <DeviceList />
  </div>
</template>

<script>
import DeviceList from '@/components/device/DeviceList'

/**
 * Device management, create, view, update and delete Devices
 */
export default {
  components: {
    DeviceList
  }
}
</script>

<style scoped></style>
