<template>
  <div>
    <div>
      <ion-icon name="flash-outline" class="text-6xl"></ion-icon>
    </div>
    <div>
      {{ attachment.name }}
    </div>
  </div>
</template>

<script>
/**
 * Socket component
 * Shows the state ON/OFF
 */
export default {
  props: { attachment: { type: Object, required: true } }
}
</script>

<style scoped></style>
