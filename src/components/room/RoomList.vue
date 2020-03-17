<template>
  <transition-group tag="ul" name="fade">
    <li
      v-for="room in rooms"
      :key="room._id"
      class="px-4 py-3 max-w-md mx-auto my-2 flex flex-row rounded-lg background-blur"
    >
      <ion-icon class="px-3" name="bed-outline" size="large"></ion-icon>
      <div class="w-full flex flex-row justify-between items-center">
        <span class="font-bold text-lg">{{ room.name }}</span>

        <!-- TURN ALL LIGHTS IN THE ROOM ON -->
        <button
          class="font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="toggleAllLights(room._id, true)"
        >
          <ion-icon name="bulb-outline"></ion-icon>
          <span class="font-bold"> all on</span>
        </button>

        <!-- TURN ALL LIGHTS IN THE ROOM OFF -->
        <button
          class="font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="toggleAllLights(room._id, false)"
        >
          <ion-icon name="bulb-outline"></ion-icon>
          <span class="font-bold"> all off</span>
        </button>

        <!-- DELETE ROOM -->
        <button
          class="hover:bg-red-400 font-bold py-1 px-2 rounded-full focus:outline-none"
          @click="deleteRoom(room._id)"
        >
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </li>
    <li key="button">
      <router-link
        to="/rooms/add"
        class="px-4 py-3 max-w-xs mx-auto my-2 flex flex-row clickable-flex-5"
      >
        <ion-icon
          class="px-3"
          name="add-circle-outline"
          size="large"
        ></ion-icon>
        <div class="w-full flex flex-row justify-between item-center">
          <span class="font-bold text-lg">New room</span>
        </div>
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
