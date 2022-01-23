<template>
  <div id="add-room">
    <NavBar :links="false" backLink="/rooms" />
    <h1 class="w-full text-2xl text-center">Add room</h1>
    <form class="w-full max-w-lg px-8 mx-auto" @submit.prevent="addRoom">
      <div
        class="bg-blur-brighter flex flex-col items-center justify-center p-8 rounded-lg"
      >
        <!-- ROOM NAME INPUT -->
        <div class="md:mb-0 w-full px-3 mb-6">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-left text-gray-700 uppercase"
            for="room-name"
          >
            Name
          </label>
          <input
            class="focus:outline-none focus:bg-white block w-full px-4 py-3 mb-3 leading-tight text-gray-700 placeholder-gray-700 bg-gray-200 border border-gray-700 rounded appearance-none"
            id="room-name"
            type="text"
            placeholder="e.g. Bedroom"
            v-model="name"
            autocomplete="off"
            required
            minlength="3"
          />
        </div>

        <!-- ADD ROOM BUTTON -->
        <div class="flex items-center justify-between">
          <button
            id="add-room"
            class="clickable-5 px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded"
            type="submit"
          >
            Add room
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

/**
 * Create a new Room
 */
export default {
  data: () => ({
    name: ''
  }),

  methods: {
    ...mapActions('rooms', ['createRoom']),
    /**
     * Create the room with the entered name
     */
    addRoom() {
      this.createRoom({ name: this.name }).then(() =>
        this.$router.push('/rooms')
      )
    }
  }
}
</script>

<style scoped></style>
