<template>
  <ul class="w-full max-w-4xl mx-auto px-4 py-2">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  data: () => ({
    licenses: []
  })
}
</script>
