<template>
  <div>
    <NavBar :links="false" backLink="/devices"></NavBar>
    <h1 class="text-center text-2xl w-full">Looking for devices ...</h1>
    <button class="bg-blue-500 rounded" type="button" @click="searchDevices()">
      Refresh
    </button>
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
    <pulse-loader :loading="loading" class="m-2"></pulse-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
