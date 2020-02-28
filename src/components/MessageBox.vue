<template>
  <div class="message-box dialog-mask" @click="$close">
    <div class="dialog-content rounded" @click="$event.stopPropagation()">
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <footer>
        <button
          type="button"
          class="text-white font-bold bg-blue-500 rounded px-2 py-1"
          @click="$close"
        >
          OK
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.message-box {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100vw;
  height: calc(100vh + 20px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-mask {
  background-color: rgba(0, 0, 0, 0.2);
}

.dialog-content {
  background-color: #fff;
  padding: 2em 4em;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
