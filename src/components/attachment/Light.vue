<template>
  <div>
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
    </div>
  </div>
</template>

<script>
export default {
  props: { attachment: { type: Object, required: true } }
}
</script>

<style scoped></style>
