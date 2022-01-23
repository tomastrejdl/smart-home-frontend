<template>
  <div id="rooms">
    <NavBar />
    <RoomList />
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
