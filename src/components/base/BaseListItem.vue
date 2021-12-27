<template>
  <div
    class="w-full flex justify-between items-center px-1 py-2 border-b text-left"
  >
    <div class="flex-shrink-0">
      <slot name="left"></slot>
    </div>
    <div class="flex-grow flex justify-start items-center px-2">
      {{ text }}
    </div>
    <div class="flex-shrink-0">
      <slot name="right">
        <ion-icon name="chevron-forward"></ion-icon>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    link: { type: String, default: null }
  }
}
</script>
