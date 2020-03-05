<template>
  <div>
    <NavBar />

    <RoomList />

    <router-link
      to="/rooms/add"
      class="px-4 py-3 max-w-xs mx-auto my-2 flex flex-row"
    >
      <ion-icon class="px-3" name="add-circle-outline" size="large"></ion-icon>
      <div class="w-full flex flex-row justify-between item-center">
        <span class="font-bold text-lg">New room</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import RoomList from '@/components/room/RoomList'

/**
 * Room management, create, view, update and delete Rooms
 */
export default {
  components: {
    RoomList
  }
}
</script>

<style scoped></style>
