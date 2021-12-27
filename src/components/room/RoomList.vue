<template>
  <transition-group tag="ul" name="fade" class="px-4">
    <li
      v-for="room in rooms"
      :key="room._id"
      class="px-4 py-3 max-w-md mx-auto my-2 flex flex-col items-center rounded-lg bg-blur-brighter"
    >
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-between items-center">
          <ion-icon class="px-3" name="bed-outline" size="large"></ion-icon>
          <span class="font-bold text-lg">{{ room.name }}</span>
        </div>
        <!-- DELETE ROOM -->
        <button
          class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="deleteRoom(room._id)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
      <div
        class="w-full flex justify-start items-center mt-2 px-4 pt-2 border-t border-gray-600"
      >
        <span>Actions:</span>
        <!-- TURN ALL LIGHTS IN THE ROOM ON -->
        <button
          class="font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="toggleAllLights(room._id, true)"
        >
          <span class="font-bold">all</span>
          <ion-icon name="bulb-outline"></ion-icon>
          <span class="font-bold">on</span>
        </button>

        <!-- TURN ALL LIGHTS IN THE ROOM OFF -->
        <button
          class="font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="toggleAllLights(room._id, false)"
        >
          <span class="font-bold">all</span>
          <ion-icon name="bulb-outline"></ion-icon>
          <span class="font-bold">off</span>
        </button>
      </div>
    </li>
    <li key="button">
      <router-link
        to="/rooms/add"
        class="max-w-md px-4 py-3 mx-auto my-2 text-white flex flex-row clickable-flex-5 rounded-lg bg-blur-darker"
      >
        <ion-icon class="px-3 text-2xl" name="add-circle-outline"></ion-icon>
        <div class="font-semibold">New room</div>
      </router-link>
    </li>
  </transition-group>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

/**
 * List of Rooms
 */
export default {
  computed: {
    ...mapState('rooms', ['rooms']),
    ...mapGetters('app', ['getApiUrl'])
  },
  methods: {
    ...mapActions('rooms', ['getRooms', 'deleteRoom']),
    ...mapActions('attachments', ['getAttachments']),
    async toggleAllLights(roomId, targetState) {
      this.axios
        .post(this.getApiUrl('rooms/' + roomId + '/toggleAllLights'), {
          targetState
        })
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
