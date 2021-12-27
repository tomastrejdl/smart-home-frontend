<template>
  <div>
    <NavBar :links="false" backLink="/rooms" />
    <h1 class="text-center text-2xl w-full">Add room</h1>
    <form class="w-full max-w-lg mx-auto px-8" @submit.prevent="addRoom">
      <div
        class="flex flex-col justify-center items-center p-8 rounded-lg bg-blur-brighter"
      >
        <!-- ROOM NAME INPUT -->
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white placeholder-gray-700"
            id="first-name"
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
            class="bg-blue-500 text-white font-bold py-2 px-4 m-2 rounded clickable-5"
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
