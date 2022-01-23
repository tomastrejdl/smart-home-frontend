<template>
  <transition-group tag="ul" name="fade" class="px-4" id="room-list">
    <li
      v-for="room in rooms"
      :key="room._id"
      class="room-list-item bg-blur-brighter flex flex-col items-center max-w-md px-4 py-3 mx-auto my-2 rounded-lg"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-between">
          <ion-icon class="px-3" name="bed-outline" size="large"></ion-icon>
          <span class="text-lg font-bold">{{ room.name }}</span>
        </div>
        <!-- DELETE ROOM -->
        <button
          class="delete-room hover:bg-red-400 focus:outline-none px-2 py-1 font-bold rounded-full"
          @click="deleteRoom(room._id)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
      <div
        class="flex items-center justify-start w-full px-4 pt-2 mt-2 border-t border-gray-600"
      >
        <span>Actions:</span>
        <!-- TURN ALL LIGHTS IN THE ROOM ON -->
        <button
          class="turn-all-lights-on focus:outline-none px-2 py-1 font-bold rounded-full"
          @click="toggleAllLights(room._id, true)"
        >
          <span class="font-bold">all</span>
          <ion-icon name="bulb-outline"></ion-icon>
          <span class="font-bold">on</span>
        </button>

        <!-- TURN ALL LIGHTS IN THE ROOM OFF -->
        <button
          class="turn-all-lights-off focus:outline-none px-2 py-1 font-bold rounded-full"
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
        id="add-new-room"
        to="/rooms/add"
        class="clickable-flex-5 bg-blur-darker flex flex-row max-w-md px-4 py-3 mx-auto my-2 text-white rounded-lg"
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
