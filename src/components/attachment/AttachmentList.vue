<template>
  <div>
    <button
      class="rounded px-2"
      :class="{ 'bg-gray-300': edit }"
      @click="edit = !edit"
    >
      EDIT
    </button>
    <ul
      class="max-w-xs sm:max-w-md mx-auto grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-4"
    >
      <li
        v-for="attachment in attachments"
        :key="attachment._id"
        class="h-32 min-w-full mx-auto"
      >
        <AttachnemtItem
          :attachment="attachment"
          :edit="edit"
          @toggleAttachment="toggleAttachment"
          @deleteAttachment="deleteAttachment"
        ></AttachnemtItem>
      </li>
      <li class="h-32 min-w-full mx-auto">
        <router-link
          to="attachments/add"
          class="w-full h-full flex flex-col justify-center items-center cursor-pointer select-none"
        >
          <ion-icon name="add-circle-outline" class="text-5xl"></ion-icon>
          <span class="mt-4">New attachment</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AttachnemtItem from './AttachmentItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    AttachnemtItem
  },
  data: () => ({
    edit: false
  }),
  computed: {
    ...mapState('attachments', ['attachments']),
    ...mapGetters('devices', ['getDeviceById'])
  },
  methods: {
    ...mapActions('attachments', ['deleteAttachment', 'toggleAttachment'])
  }
}
</script>

<style scoped></style>
