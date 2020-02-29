<template>
  <div
    id="attachment-item"
    class="border rounded shadow-sm w-full h-full flex flex-col justify-center items-center select-none"
    :class="{
      'cursor-pointer':
        attachment.type == AttachmentType.LIGHT ||
        attachment.type == AttachmentType.SOCKET
    }"
    @click="$emit('toggleAttachment', attachment)"
  >
    <div>
      <Light
        v-if="attachment.type == AttachmentType.LIGHT"
        :attachment="attachment"
      ></Light>
      <Socket
        v-if="attachment.type == AttachmentType.SOCKET"
        :attachment="attachment"
      ></Socket>
      <TemperatureSensor
        v-if="attachment.type == AttachmentType.TEMPERATURE_SENSOR"
        :attachment="attachment"
      ></TemperatureSensor>
      <DoorSensor
        v-if="attachment.type == AttachmentType.DOOR_SENSOR"
        :attachment="attachment"
      ></DoorSensor>
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
import Hammer from 'hammerjs'

import Light from './Light'
import Socket from './Socket'
import TemperatureSensor from './TemperatureSensor'
import DoorSensor from './DoorSensor'

import { AttachmentType } from '../../other/attachment-types'

import MessageBox from '../MessageBox'
import { create } from 'vue-modal-dialogs'

const messageBox = create(MessageBox, 'content')

export default {
  components: {
    Light,
    Socket,
    TemperatureSensor,
    DoorSensor
  },
  props: { attachment: Object, edit: Boolean },
  data: () => ({
    AttachmentType: AttachmentType
  }),
  mounted() {
    const item = document.getElementById('attachment-item')
    const manager = new Hammer.Manager(item)
    const Press = new Hammer.Press({
      time: 700
    })
    manager.add(Press)
    manager.on('press', function(e) {
      messageBox('Hello world')
    })
  }
}
</script>

<style></style>
