<template>
  <div id="add-device">
    <NavBar :links="false" backLink="/devices/search" />
    <h1 class="w-full text-2xl text-center">Add device</h1>
    <form class="w-full max-w-lg px-8 mx-auto" @submit.prevent="addDevice">
      <div
        class="bg-blur-brighter flex flex-col items-center justify-center p-8 rounded-lg"
      >
        <!-- DEVICE NAME INPUT -->
        <div class="md:mb-0 w-full px-3 mb-6">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-left text-gray-700 uppercase"
            for="device-name"
          >
            Name
          </label>
          <input
            class="focus:outline-none focus:bg-white block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-gray-700 bg-gray-200 border border-gray-700 rounded appearance-none"
            id="device-name"
            type="text"
            v-model="name"
            required
            minlength="3"
            placeholder="e.g. Bedroom Controller"
          />
        </div>

        <!-- ROOM SELECT -->
        <div class="md:mb-0 w-full px-3 mb-6">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            for="room"
          >
            Room
          </label>
          <div class="relative">
            <select
              class="focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-700 rounded appearance-none"
              id="room"
              v-model="roomId"
            >
              <option :value="null" key="none">none</option>
              <option v-for="room in rooms" :value="room._id" :key="room._id">
                {{ room.name }}
              </option>
            </select>
          </div>
        </div>

        <!-- ADD DEVICE BUTTON -->
        <div class="flex items-center justify-between">
          <button
            id="add-device"
            class="clickable-5 px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded"
            type="submit"
          >
            Add device
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

/**
 * Configure a new Device to be used with the system
 */
export default {
  data: () => ({
    name: '',
    roomId: null
  }),
  computed: {
    ...mapState('rooms', ['rooms'])
  },
  methods: {
    ...mapActions('devices', ['createDevice']),
    /**
     * Create a Device with the specified name, add it to the specified Room
     */
    addDevice() {
      this.createDevice({
        name: this.name,
        macAddress: this.$route.params.deviceMacAddress,
        roomId: this.roomId && this.roomId
      }).then(() => this.$router.push('/devices'))
    }
  }
}
</script>
