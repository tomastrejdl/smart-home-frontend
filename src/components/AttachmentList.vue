<template>
  <div>
    <ul v-for="attachment in attachments" :key="attachment._id">
      <li>
        {{ attachment.name }} -
        <button
          class="font-bold py-1 px-2 rounded focus:outline-none"
          :class="{
            'bg-green-500 hover:bg-green-600':
              attachment.characteristics.isOn.value,
            'bg-gray-400 hover:bg-gray-500': !attachment.characteristics.isOn
              .value
          }"
          @click="toggleAttachment(attachment)"
        >
          {{ attachment.characteristics.isOn.value ? 'ON' : 'OFF' }}
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="deleteAttachment(attachment._id)"
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
    ...mapState('attachments', ['attachments']),
    ...mapGetters('devices', ['getDeviceById'])
  },
  methods: {
    ...mapActions('attachments', ['deleteAttachment', 'toggleAttachment'])
  }
}
</script>

<style></style>
