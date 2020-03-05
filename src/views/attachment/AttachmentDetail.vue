<template>
  <div v-if="attachment">
    <NavBar :links="false" backLink="/" />

    <h1 class="text-center text-2xl w-full">{{ attachment.name }}</h1>

    <div>
      <Light
        v-if="attachment.type == AttachmentType.LIGHT"
        :attachment="attachment"
        :detail="true"
      />

      <Socket
        v-if="attachment.type == AttachmentType.SOCKET"
        :attachment="attachment"
        :detail="true"
      />

      <TemperatureSensor
        v-if="attachment.type == AttachmentType.TEMPERATURE_SENSOR"
        :attachment="attachment"
        :detail="true"
      />

      <DoorSensor
        v-if="attachment.type == AttachmentType.DOOR_SENSOR"
        :attachment="attachment"
        :detail="true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Light from '../../components/attachment/Light'
import Socket from '../../components/attachment/Socket'
import TemperatureSensor from '../../components/attachment/TemperatureSensor'
import DoorSensor from '../../components/attachment/DoorSensor'

/**
 * A Detailed view of an Attachment
 */
export default {
  components: {
    Light,
    Socket,
    TemperatureSensor,
    DoorSensor
  },
  data: () => ({
    attachment: null
  }),
  computed: {
    ...mapGetters('attachments', ['getAttachmentById'])
  },
  mounted() {
    this.attachment = this.getAttachmentById(this.$route.params.attachmentId)
  }
}
</script>

<style scoped></style>
