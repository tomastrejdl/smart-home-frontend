<template>
  <div
    id="attachment-item"
    class="border rounded shadow-sm w-full h-full flex flex-col justify-center items-center cursor-pointer select-none"
    @click="$emit('toggleAttachment', attachment)"
  >
    <div
      :class="{
        'text-yellow-500': attachment.characteristics.isOn.value,
        'text-black': !attachment.characteristics.isOn.value
      }"
    >
      <ion-icon name="bulb-outline" class="text-6xl"></ion-icon>
    </div>
    <div>
      {{ attachment.name }}
      <button
        v-if="edit"
        class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
        @click="$emit('deleteAttachment', attachment)"
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs'

import MessageBox from '../MessageBox'
import { create } from 'vue-modal-dialogs'

const messageBox = create(MessageBox, 'content')

export default {
  props: { attachment: Object, edit: Boolean },
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
