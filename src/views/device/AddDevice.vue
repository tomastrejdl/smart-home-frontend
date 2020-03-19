<template>
  <div>
    <NavBar :links="false" backLink="/devices/search" />
    <h1 class="text-center text-2xl w-full">Add device</h1>
    <form
      class="w-full p-8 rounded-lg bg-blur-brighter"
      @submit="
        $event.preventDefault()
        addDevice()
      "
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <!-- DEVICE NAME INPUT -->
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Ceiling Light"
            v-model="name"
          />
        </div>

        <!-- ROOM SELECT -->
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="room"
          >
            Room
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            class="bg-blue-500 text-white font-bold py-2 px-4 m-2 rounded clickable-5"
            type="button"
            @click="addDevice()"
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
    name: 'Bedroom Controller',
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
