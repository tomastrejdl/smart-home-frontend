<template>
  <div id="add-attachment">
    <NavBar :links="false" backLink="/" />
    <h1 class="w-full text-2xl text-center">Add attachment</h1>
    <form class="w-full max-w-lg px-8 mx-auto" @submit.prevent="addAttachment">
      <div
        class="bg-blur-brighter flex flex-col items-center p-8 mb-6 -mx-3 rounded-lg"
      >
        <!-- ATTACHMENT NAME INPUT -->
        <div class="md:mb-0 w-full px-3 mb-6">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-left text-gray-700 uppercase"
            for="attachment-name"
          >
            Name
          </label>
          <input
            class="focus:outline-none focus:bg-white block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-gray-700 bg-gray-200 border border-gray-700 rounded appearance-none"
            id="attachment-name"
            type="text"
            placeholder="e.g. Ceiling Light"
            v-model="name"
            autocomplete="off"
            required
            minlength="3"
          />
        </div>

        <!-- DEVICE SELECT -->
        <div class="md:mb-0 w-full px-3 mb-6">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-left text-gray-700 uppercase"
            for="device"
          >
            Device
          </label>
          <div class="relative">
            <select
              class="focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 pr-8 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-700 rounded appearance-none"
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
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- ATTACHMENT TYPE SELECT -->
        <div class="md:mb-0 w-full px-3 mb-6">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-left text-gray-700 uppercase"
            for="type"
          >
            Type
          </label>
          <div class="relative">
            <select
              class="focus:outline-none focus:bg-white focus:border-gray-500 block w-full px-4 py-3 pr-8 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-700 rounded appearance-none"
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
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- PIN SELECT -->
        <PinSelect
          v-model="pin"
          :attachmentType="type"
          :availablePins="availablePins"
        ></PinSelect>

        <!-- ADD ATTACHMENT BUTTON -->
        <div class="flex items-center justify-between">
          <button
            id="add-attachment"
            class="clickable-5 px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded"
            type="submit"
          >
            Add attachment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { AttachmentType } from '../../other/attachment-types'
import PinSelect from '../../components/PinSelect'

/**
 * Configure a new Attachment
 */
export default {
  components: { PinSelect },
  data: () => ({
    AttachmentType: AttachmentType,
    name: '',
    type: 'light',
    pin: null,
    deviceId: null
  }),
  computed: {
    ...mapState('rooms', ['rooms']),
    ...mapState('devices', ['devices']),
    ...mapGetters('attachments', ['getAttachmentsByDeviceId']),
    /**
     * Some Attachments are only alailable in some pins
     */
    compatiblePins() {
      switch (this.type) {
        case AttachmentType.TEMPERATURE_SENSOR:
          return ['D3']
        case AttachmentType.DOOR_SENSOR:
          return ['D4']
        default:
          return ['D1', 'D2', 'D3', 'D4']
      }
    },
    /**
     * Filter pins that are available on the selected Device
     */
    availablePins() {
      if (this.deviceId) {
        return this.compatiblePins.filter(
          pin =>
            this.getAttachmentsByDeviceId(this.deviceId)
              .map(att => att.pin)
              .indexOf(pin) == -1
        )
      } else return []
    }
  },
  mounted() {
    // If not defined, select the first Device in the list
    if (this.deviceId == null && this.devices.length > 0)
      this.deviceId = this.devices[0]._id
    // If not defined, select the first Pin in the list
    if (this.pin == null && this.availablePins.length > 0)
      this.pin = this.availablePins[0]
  },
  updated() {
    // If not defined, select the first Device in the list
    if (this.deviceId == null && this.devices.length > 0)
      this.deviceId = this.devices[0]._id
    // If not defined, select the first Pin in the list
    if (this.pin == null && this.availablePins.length > 0)
      this.pin = this.availablePins[0]
  },
  methods: {
    ...mapActions('attachments', ['createAttachment']),
    /**
     * Create a new Attachment
     */
    addAttachment() {
      this.createAttachment({
        name: this.name,
        type: this.type,
        pin: this.pin,
        deviceId: this.deviceId
      }).then(() => this.$router.push('/'))
    }
  },
  watch: {
    type(newValue, oldValue) {
      // Temperature sensor is only available on pin 'D3'
      if (newValue == AttachmentType.TEMPERATURE_SENSOR) this.pin = 'D3'
      // Door sensor is only available on pin 'D4'
      if (newValue == AttachmentType.DOOR_SENSOR) this.pin = 'D4'
    }
  }
}
</script>
