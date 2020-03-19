<template>
  <div class="px-3">
    <span
      class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
    >
      Select Pin
    </span>
    <div class="flex justify-between items-center">
      <div
        class="container relative select-none w-auto p-8 bg-gray-200 rounded-md"
        v-for="pin in availablePins"
        :key="pin"
      >
        <input
          type="radio"
          id="pin"
          :value="pin"
          :checked="pin == value"
          @input="$emit('input', $event.target.value)"
          :disabled="
            attachmentType == AttachmentType.TEMPERATURE_SENSOR ||
              attachmentType == AttachmentType.DOOR_SENSOR
          "
          class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <label for="pin" class="text-xl">
          {{ pin }}
        </label>
        <div
          class="background bg-transparent pointer-events-none absolute top-0 left-0 w-full h-full border border-gray-300 rounded-md"
        ></div>
      </div>
    </div>
    <p class="text-gray-700 text-xs font-semibold italic">
      Temperature sensors use pin 3, door sensors use pin 4, other types of
      attachments can use any available pin.
    </p>
    <p v-if="availablePins.length == 0" class="text-red-500 text-xs italic">
      No available Pins on this device
    </p>
  </div>
</template>

<script>
/**
 * A restyled radio button group, to select pins on Devices
 * Works just like radio buttons, just styled to be clickable buttons
 */
export default {
  props: { value: String, availablePins: Array, attachmentType: String }
}
</script>

<style lang="postcss" scoped>
.container input:hover ~ .background {
  @apply border border-gray-300;
}

.container input:checked ~ .background {
  @apply border-2 border-blue-500;
}
</style>
