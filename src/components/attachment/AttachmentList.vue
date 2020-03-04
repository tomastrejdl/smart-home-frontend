<template>
  <div>
    <div class="w-full text-right px-4 mb-4">
      <button
        class="border border-gray-500 rounded px-2"
        :class="{ 'bg-gray-300': edit }"
        @click="edit = !edit"
      >
        EDIT
      </button>
    </div>
    <div class="px-8 sm:px-32 lg:px-64">
      <ul class="list grid gap-4">
        <li
          v-for="attachment in attachments"
          :key="attachment._id"
          class="h-32 w-32 min-w-full mx-auto"
          :class="{
            'col-span-2': attachment.type == AttachmentType.TEMPERATURE_SENSOR
          }"
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
  </div>
</template>

<script>
import AttachnemtItem from './AttachmentItem'
import { mapState, mapActions, mapGetters } from 'vuex'
import { AttachmentType } from '../../other/attachment-types'

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

<style scoped>
.list {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
