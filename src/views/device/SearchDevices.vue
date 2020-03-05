<template>
  <div>
    <NavBar :links="false" backLink="/devices" />

    <h1 class="text-center text-2xl w-full">Looking for devices ...</h1>

    <!-- REFRESH LIST -->
    <button class="bg-blue-500 rounded" type="button" @click="searchDevices()">
      Refresh
    </button>

    <!-- LIST OF FOUND DEVICES -->
    <div v-for="device in foundDevices" :key="device.macAddress">
      {{ device }}
      <router-link
        :to="{
          name: 'add-device',
          params: { deviceMacAddress: device.macAddress }
        }"
        class="bg-blue-300 rounded"
        >Setup device</router-link
      >
    </div>

    <div v-if="foundDevices.length == 0 && !loading">
      No devices found on your local network
    </div>

    <!-- ANIMATED LOADER -->
    <pulse-loader :loading="loading" class="m-2"></pulse-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

/**
 * This component shows a list of Devices that have not yet been configured to work with the system
 */
export default {
  data: () => ({
    foundDevices: [],
    loading: false
  }),
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
