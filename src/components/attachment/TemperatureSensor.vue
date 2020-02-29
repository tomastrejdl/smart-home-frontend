<template>
  <div class="w-full flex">
    <ion-icon name="thermometer-outline" class="text-6xl"></ion-icon>
    <div class="flex flex-col flex-grow-1">
      <span>{{ attachment.name }}</span>
      <span
        >{{ attachment.characteristics.temperature.value }}
        {{
          attachment.characteristics.temperature.units == 'celsius' && 'ºC'
        }}</span
      >
      <span>{{ attachment.characteristics.humidity.value }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { attachment: Object }
}
</script>

<style></style>
