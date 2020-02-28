<template>
  <ul>
    <li
      v-for="device in devices"
      :key="device._id"
      class="border rounded px-4 py-3 shadow-sm max-w-xs mx-auto my-2 flex flex-row"
    >
      <ion-icon
        class="px-3"
        name="hardware-chip-outline"
        size="large"
      ></ion-icon>
      <div class="w-full flex flex-row justify-between items-center">
        <span class="font-bold text-lg"> {{ device.name }}</span>
        <button
          class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
          @click="removeDevice(device)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

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
