<template>
  <div id="attachment-list">
    <div class="w-full px-4 mb-4 text-right">
      <!-- TOGGLE EDIT MODE -->
      <button
        class="bg-blur-brighter px-4 py-1 rounded"
        :class="{ 'bg-gray-100': edit }"
        @click="edit = !edit"
      >
        EDIT
      </button>
    </div>

    <div class="sm:px-32 lg:px-64 px-4">
      <transition-group
        tag="ul"
        name="fade"
        id="attachments-list"
        class="list grid gap-4"
      >
        <li
          v-for="attachment in attachments"
          :key="attachment._id"
          class="w-32 h-32 min-w-full mx-auto"
          :class="{
            'col-span-2': attachment.type == AttachmentType.TEMPERATURE_SENSOR
          }"
        >
          <!-- THE ATTACHMENT ITEM -->
          <AttachnemtItem
            :attachment="attachment"
            :edit="edit"
            @toggleAttachment="toggleAttachment"
            @deleteAttachment="deleteAttachment"
          ></AttachnemtItem>
        </li>

        <li class="h-32 min-w-full mx-auto" key="button">
          <!-- ADD NEW ATTACHMENT LINK -->
          <router-link
            id="add-new-attachment"
            to="attachments/add"
            class="clickable-flex-5 bg-blur-darker flex flex-col items-center justify-center w-full h-full text-sm font-semibold text-white rounded-lg cursor-pointer select-none"
          >
            <ion-icon name="add-circle-outline" class="text-5xl"></ion-icon>
            <span class="mt-4">New attachment</span>
          </router-link>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import AttachnemtItem from './AttachmentItem'
import { mapState, mapActions, mapGetters } from 'vuex'
import { AttachmentType } from '../../other/attachment-types'

/**
 * A list of Attachments
 */
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
