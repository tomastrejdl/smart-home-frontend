<template>
  <transition-group tag="ul" name="fade" class="px-4" id="device-list">
    <li
      v-for="device in devices"
      :key="device._id"
      class="device-list-item bg-blur-brighter flex flex-col max-w-md px-4 py-3 mx-auto my-2 rounded-lg"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-start">
          <ion-icon
            class="px-3"
            name="hardware-chip-outline"
            size="large"
          ></ion-icon>
          <span class="text-lg font-bold"> {{ device.name }}</span>
        </div>
        <span
          class="font-bold text-red-500"
          :class="{ 'text-green-500': device.isOnline }"
        >
          {{ device.isOnline ? 'online' : 'offline' }}</span
        >
        <button
          class="delete-device hover:bg-red-400 focus:outline-none px-2 py-1 font-bold rounded-full"
          @click="removeDevice(device)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
      <div
        class="flex items-center justify-start w-full px-4 pt-2 mt-2 border-t border-gray-600"
      >
        <span class="text-gray-600">Mac address: {{ device.macAddress }}</span>
      </div>
    </li>
    <li key="button">
      <router-link
        id="search-devices"
        to="/devices/search"
        class="clickable-flex-5 bg-blur-darker flex flex-row max-w-md px-4 py-3 mx-auto my-2 text-white rounded-lg"
      >
        <ion-icon class="px-3 text-2xl" name="add-circle-outline"></ion-icon>
        <span class="font-semibold">Add device</span>
      </router-link>
    </li>
  </transition-group>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

/**
 * List of Devices
 */
export default {
  computed: {
    ...mapState('devices', ['devices']),
    ...mapGetters('rooms', ['getRoomById'])
  },
  methods: {
    ...mapActions('devices', ['deleteDevice']),
    removeDevice(device) {
      if (
        confirm(
          'When you delete thid device, all attachments will be deleted as well. Are you sure?'
        )
      )
        this.deleteDevice(device)
    }
  }
}
</script>

<style scoped></style>
