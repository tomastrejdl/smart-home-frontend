<template>
  <div
    id="attachment-item"
    class="relative border rounded shadow-sm w-full h-full flex flex-col justify-center items-center select-none"
    :class="{
      'cursor-pointer':
        attachment.type == AttachmentType.LIGHT ||
        attachment.type == AttachmentType.SOCKET
    }"
  >
    <router-link
      class="absolute top-0 right-0 m-2 "
      :to="{
        name: 'attachment-detail',
        params: { attachmentId: attachment._id }
      }"
    >
      <ion-icon name="information-circle-outline" class="text-xl"></ion-icon>
    </router-link>
    <div @click="attachmentClicked(attachment)">
      <Light
        v-if="attachment.type == AttachmentType.LIGHT"
        :attachment="attachment"
      />
      <Socket
        v-if="attachment.type == AttachmentType.SOCKET"
        :attachment="attachment"
      />
      <TemperatureSensor
        v-if="attachment.type == AttachmentType.TEMPERATURE_SENSOR"
        :attachment="attachment"
      />
      <DoorSensor
        v-if="attachment.type == AttachmentType.DOOR_SENSOR"
        :attachment="attachment"
      />
    </div>

    <button
      v-if="edit"
      class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
      @click="$emit('deleteAttachment', attachment)"
    >
      <ion-icon name="trash-outline"></ion-icon>
    </button>
  </div>
</template>

<script>
import Light from './Light'
import Socket from './Socket'
import TemperatureSensor from './TemperatureSensor'
import DoorSensor from './DoorSensor'

import { AttachmentType } from '../../other/attachment-types'

/**
 * Displays an Attachment Item
 */
export default {
  components: {
    Light,
    Socket,
    TemperatureSensor,
    DoorSensor
  },
  props: {
    attachment: { type: Object, required: true },
    edit: { type: Boolean, default: false }
  },
  methods: {
    /**
     * Emit a toggleAttachment event signaling, that the user has clicked this attachment
     * @param {*} attachment The attachment that was clicked
     */
    attachmentClicked(attachment) {
      if (
        attachment.type == AttachmentType.LIGHT ||
        attachment.type == AttachmentType.SOCKET
      ) {
        this.$emit('toggleAttachment', attachment)
      }
    }
  }
}
</script>

<style scoped></style>
