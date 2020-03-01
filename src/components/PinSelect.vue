<template>
  <div>
    <div class="flex justify-center items-center">
      <div
        class="container relative select-none w-auto m-4 p-8"
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
            type == AttachmentType.TEMPERATURE_SENSOR ||
              type == AttachmentType.DOOR_SENSOR
          "
          class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <label for="pin">
          {{ pin }}
        </label>
        <div
          class="background bg-transparent pointer-events-none absolute top-0 left-0 w-full h-full border border-gray-300 rounded"
        ></div>
      </div>
    </div>
    <p class="text-gray-600 text-xs italic">
      Temperature sensors use pin 3, door sensors use pin 4, other types of
      attachments can use any available pin.
    </p>
    <p v-if="availablePins.length == 0" class="text-red-500 text-xs italic">
      No available Pins on this device
    </p>
  </div>
</template>

<script>
export default {
  props: { value: String, availablePins: Array, type: String }
}
</script>

<style scoped>
.container input:hover ~ .background {
  border: 1px solid #ccc;
}

.container input:checked ~ .background {
  border: 2px solid #2196f3;
}
</style>
