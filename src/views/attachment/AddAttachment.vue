<template>
  <div>
    <NavBar :links="false" backLink="/"></NavBar>
    <h1 class="text-center text-2xl w-full">Add attachment</h1>
    <form class="w-full max-w-lg mx-auto">
      <div class="flex flex-col items-center -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Ceiling Light"
            v-model="name"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="device"
          >
            Device
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="device"
              v-model="deviceId"
            >
              <option
                v-for="device in devices"
                :value="device._id"
                :key="device._id"
              >
                {{ device.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="type"
          >
            Type
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="type"
              v-model="type"
            >
              <option :value="AttachmentType.LIGHT">Light</option>
              <option :value="AttachmentType.SOCKET">Smart Socket</option>
              <option :value="AttachmentType.TEMPERATURE_SENSOR"
                >Temperature sensor</option
              >
              <option :value="AttachmentType.DOOR_SENSOR">Door sensor</option>
            </select>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="pin"
          >
            Pin
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="pin"
              v-model="pinNumber"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="addAttachment()"
          >
            Add attachment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { AttachmentType } from '../../other/attachment-types'

export default {
  data: () => ({
    AttachmentType: AttachmentType,
    name: 'Ceiling light',
    type: 'light',
    pinNumber: 1,
    deviceId: null
  }),
  computed: {
    ...mapState('rooms', ['rooms']),
    ...mapState('devices', ['devices'])
  },
  updated() {
    if (this.deviceId == null && this.devices.length > 0)
      this.deviceId = this.devices[0]._id
  },
  methods: {
    ...mapActions('attachments', ['createAttachment']),
    addAttachment() {
      this.createAttachment({
        name: this.name,
        type: this.type,
        pinNumber: this.pinNumber,
        deviceId: this.deviceId
      }).then(() => this.$router.push('/'))
    }
  }
}
</script>
