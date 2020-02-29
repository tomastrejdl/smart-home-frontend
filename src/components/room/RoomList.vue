<template>
  <ul>
    <li
      v-for="room in rooms"
      :key="room._id"
      class="border rounded px-4 py-3 shadow-sm max-w-xs mx-auto my-2 flex flex-row"
    >
      <ion-icon class="px-3" name="bed-outline" size="large"></ion-icon>
      <div class="w-full flex flex-row justify-between items-center">
        <span class="font-bold text-lg">{{ room.name }}</span>
        <button
          class="hover:bg-yellow-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
          @click="toggleAllLights(room._id)"
        >
          <ion-icon name="bulb-outline"></ion-icon>
        </button>
        <button
          class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
          @click="deleteRoom(room._id)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('rooms', ['rooms']),
    ...mapGetters('app', ['getApiUrl'])
  },
  methods: {
    ...mapActions('rooms', ['getRooms', 'deleteRoom']),
    ...mapActions('attachments', ['getAttachments']),
    async toggleAllLights(roomId) {
      this.axios
        .post(this.getApiUrl('rooms/' + roomId + '/toggleAllLights'))
        .then(res => {
          this.getAttachments()
        })
    }
  },
  mounted() {
    this.getRooms()
  }
}
</script>

<style scoped></style>
