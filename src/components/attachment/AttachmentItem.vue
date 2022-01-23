<template>
  <button
    @click="attachmentClicked(attachment)"
    class="attachment-item bg-blur-brighter focus:shadow-none relative flex flex-col items-center justify-center w-full h-full rounded-lg select-none"
    :class="{
      'cursor-pointer':
        attachment.type == AttachmentType.LIGHT ||
        attachment.type == AttachmentType.SOCKET,
      'not-clickable cursor-default':
        attachment.type == AttachmentType.TEMPERATURE_SENSOR ||
        attachment.type == AttachmentType.DOOR_SENSOR,
      'bg-yellow-400':
        attachment.characteristics.isOn &&
        attachment.characteristics.isOn.value,
      'bg-initial':
        attachment.characteristics.isOn &&
        !attachment.characteristics.isOn.value
    }"
  >
    <router-link
      class="attachment-detail-link absolute top-0 right-0 flex items-center justify-center w-8 h-8 p-1 rounded-full"
      :to="{
        name: 'attachment-detail',
        params: { attachmentId: attachment._id }
      }"
    >
      <ion-icon name="information-circle-outline" class="text-xl"></ion-icon>
    </router-link>
    <div>
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

    <transition name="fade-bounce">
      <button
        v-if="edit"
        class="hover:bg-red-400 absolute top-0 left-0 px-1 py-0 -mt-3 -ml-3 font-bold bg-gray-300 rounded-full"
        @click="$emit('deleteAttachment', attachment)"
      >
        <ion-icon name="close"></ion-icon>
      </button>
    </transition>
  </button>
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
