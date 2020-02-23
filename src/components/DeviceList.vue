<template>
  <div>
    <ul v-for="device in devices" :key="device._id">
      <li>
        {{ device.name }} -
        {{ device.roomId ? getRoomById(device.roomId).name : 'none' }}
        <button
          class="bg-red-500 hover:bg-red-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="removeDevice(device)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
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

<style></style>
