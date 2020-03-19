<template>
  <button
    @click="attachmentClicked(attachment)"
    class="relative rounded-lg w-full h-full flex flex-col justify-center items-center select-none clickable-flex-5 bg-blur-brighter"
    :class="{
      'cursor-pointer':
        attachment.type == AttachmentType.LIGHT ||
        attachment.type == AttachmentType.SOCKET
    }"
  >
    <router-link
      class="absolute top-0 right-0 h-8 w-8 p-1 flex justify-center items-center rounded-full"
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
        class="absolute top-0 left-0 -mt-3 -ml-3 hover:bg-red-400 font-bold py-0 px-1 rounded-full bg-gray-300"
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
