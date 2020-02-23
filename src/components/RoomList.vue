<template>
  <div>
    <div v-for="room in rooms" :key="room._id">
      {{ room.name }}
      <button
        class="bg-red-500 hover:bg-red-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        @click="deleteRoom(room._id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('rooms', ['rooms'])
  },
  methods: {
    ...mapActions('rooms', ['getRooms', 'deleteRoom'])
  },
  mounted() {
    this.getRooms()
  }
}
</script>

<style></style>
