<template>
  <div id="search-devices" class="sm:px-8 px-4">
    <NavBar :links="false" backLink="/devices" :menuItems="menuItems">
      <span>Add Device</span>
    </NavBar>

    <!-- LIST OF FOUND DEVICES -->
    <ul id="devices-list">
      <li
        v-for="device in foundDevices"
        :key="device.macAddress"
        class="devices-list-item bg-blur-brighter flex flex-col max-w-md px-4 py-6 mx-auto my-4 rounded-lg"
      >
        <div class="flex items-center justify-between w-full px-4 py-4">
          <div class="flex items-center justify-start">
            <ion-icon name="hardware-chip-outline" size="large"></ion-icon>
            <span class="pl-2 text-lg font-bold"> {{ device.deviceType }}</span>
          </div>
          <span class="text-gray-600">{{ device.macAddress }}</span>
        </div>

        <div class="flex items-center justify-center w-full px-4">
          <router-link
            :to="{
              name: 'add-device',
              params: { deviceMacAddress: device.macAddress }
            }"
            class="add-device clickable-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Setup this device
          </router-link>
        </div>
      </li>
    </ul>

    <div v-if="foundDevices.length == 0 && !loading">
      No devices found on your local network
    </div>

    <!-- ANIMATED LOADER -->
    <pulse-loader :loading="loading" color="#4299e1" class="m-2"></pulse-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

/**
 * This component shows a list of Devices that have not yet been configured to work with the system
 */
export default {
  data() {
    return {
      foundDevices: [],
      loading: false,
      menuItems: [
        {
          icon: 'refresh',
          action: this.searchDevices
        }
      ]
    }
  },
  computed: {
    ...mapGetters('app', ['getApiUrl'])
  },
  mounted() {
    this.searchDevices()
  },
  methods: {
    /**
     * Get an updated list of devices from the server
     */
    async searchDevices() {
      this.loading = true
      this.foundDevices = (
        await this.axios.get(this.getApiUrl('devices') + '/searchDevices')
      ).data
      this.loading = false
    }
  }
}
</script>

<style scoped></style>
