<template>
  <div>
    <div>
      <ion-icon
        v-if="attachment.characteristics.isOpen.value"
        src="/img/door-open-solid.svg"
        class="text-6xl"
      ></ion-icon>
      <ion-icon
        v-if="!attachment.characteristics.isOpen.value"
        src="/img/door-closed-solid.svg"
        class="text-6xl"
      ></ion-icon>
    </div>
    <div>
      {{ attachment.name }}
    </div>
  </div>
</template>

<script>
/**
 * Door sensor component
 * shows the state open/closed
 */
export default {
  props: { attachment: { type: Object, required: true } }
}
</script>

<style scoped></style>
