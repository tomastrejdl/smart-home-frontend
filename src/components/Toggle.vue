<!-- Source: https://github.com/TowelSoftware/tailwindcss-toggle/blob/master/TailwindToggle.vue -->
<template>
  <div>
    <div class="form-switch inline-block align-middle">
      <input
        v-bind:value="value"
        v-model="isToggleOn"
        v-on:change="$emit('input', $event.target.checked)"
        type="checkbox"
        name="1"
        id="1"
        class="form-switch-checkbox"
      />
      <label class="form-switch-label" for="1"></label>
    </div>
    <label class="text-grey-dark" for="1">{{
      `${isToggleOn ? onText : offText}`
    }}</label>
  </div>
</template>

<script>
export default {
  mounted() {
    this.isToggleOn = this.value
  },
  props: ['value', 'onText', 'offText'],
  data() {
    return {
      isToggleOn: false
    }
  }
}
</script>

<style scoped lang="postcss">
/* CHECKBOX TOGGLE SWITCH */
.form-switch {
  @apply relative select-none w-12 mr-2 leading-normal;
}
.form-switch-checkbox {
  @apply hidden;
}
.form-switch-label {
  @apply block overflow-hidden cursor-pointer bg-gray-300 rounded-full h-6;
  transition: background-color 0.2s ease-in;
}
.form-switch-label:before {
  @apply absolute block bg-white inset-y-0 rounded-full h-5 w-5 shadow-xs;
  margin-top: 2px;

  right: calc(50% + 2px);
  content: '';
  transition: all 0.2s ease-in;
}
.form-switch-checkbox:checked + .form-switch-label,
.form-switch-checkbox:checked + .form-switch-label:before {
}
.form-switch-checkbox:checked + .form-switch-label {
  @apply bg-gray-700;
}
.form-switch-checkbox:checked + .form-switch-label:before {
  right: 2px;
}
</style>
