<template>
  <div class="px-4 sm:px-8">
    <NavBar :links="false" backLink="/devices" :menuItems="menuItems">
      <span>Add Device</span>
    </NavBar>

    <!-- LIST OF FOUND DEVICES -->
    <ul>
      <li
        v-for="device in foundDevices"
        :key="device.macAddress"
        class="px-4 py-6 max-w-md mx-auto my-4 flex flex-col rounded-lg bg-blur-brighter"
      >
        <div class="w-full flex justify-between items-center px-4 py-4">
          <div class="flex justify-start items-center">
            <ion-icon name="hardware-chip-outline" size="large"></ion-icon>
            <span class="font-bold text-lg pl-2"> {{ device.deviceType }}</span>
          </div>
          <span class="text-gray-600">{{ device.macAddress }}</span>
        </div>

        <div class="w-full flex justify-center items-center px-4">
          <router-link
            :to="{
              name: 'add-device',
              params: { deviceMacAddress: device.macAddress }
            }"
            class="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded clickable-5"
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
