<template>
  <div>
    <div>
      <ion-icon name="bulb-outline" class="text-6xl"></ion-icon>
    </div>
    <div>
      {{ attachment.name }}
    </div>
  </div>
</template>

<script>
/**
 * Light component
 * Shows the state ON/OFF
 */
export default {
  props: { attachment: { type: Object, required: true } }
}
</script>

<style scoped></style>
