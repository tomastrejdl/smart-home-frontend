<template>
  <transition-group tag="ul" name="fade" class="px-4">
    <li
      v-for="device in devices"
      :key="device._id"
      class="px-4 py-3 max-w-md mx-auto my-2 flex flex-row rounded-lg bg-blur-brighter"
    >
      <ion-icon
        class="px-3"
        name="hardware-chip-outline"
        size="large"
      ></ion-icon>
      <div class="w-full flex flex-row justify-between items-center">
        <span class="font-bold text-lg"> {{ device.name }}</span>
        <span class="text-gray-600"> {{ device.macAddress }}</span>
        <span
          class="font-bold text-red-500"
          :class="{ 'text-green-500': device.isOnline }"
        >
          {{ device.isOnline ? 'online' : 'offline' }}</span
        >
        <button
          class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="removeDevice(device)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </li>
    <li key="button">
      <router-link
        to="/devices/search"
        class="max-w-md px-4 py-3 mx-auto my-2 text-white flex flex-row clickable-flex-5 rounded-lg bg-blur-darker"
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
