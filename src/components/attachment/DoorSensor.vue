<template>
  <div>
    <div
      :class="{
        'text-yellow-500': attachment.characteristics.isOpen.value,
        'text-black': !attachment.characteristics.isOpen.value
      }"
    >
      <ion-icon name="square-outline" class="text-6xl"></ion-icon>
    </div>
    <div>
      {{ attachment.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: { attachment: Object }
}
</script>

<style></style>
