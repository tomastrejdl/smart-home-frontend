<template>
  <div>
    <NavBar :links="false" backLink="/" :menuItems="menuItems" />
    <div
      v-if="attachment"
      class="p-8 bg-blur-brighter max-w-lg mx-auto rounded-lg"
    >
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

      <Toggle
        v-if="
          this.attachment.type == AttachmentType.LIGHT ||
            this.attachment.type == AttachmentType.SOCKET
        "
        onText="on"
        offText="off"
        @input="toggleChange"
        :value="this.attachment.characteristics.isOn.value"
      ></Toggle>
    </div>
    <div v-else>
      <h1 class="text-center text-2xl w-full">
        Attachment {{ $route.params.attachmentId }} not found
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Light from '../../components/attachment/Light'
import Socket from '../../components/attachment/Socket'
import TemperatureSensor from '../../components/attachment/TemperatureSensor'
import DoorSensor from '../../components/attachment/DoorSensor'
import { AttachmentType } from '../../other/attachment-types'

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
  data: function() {
    return {
      attachment: null,
      allMenuItems: [
        {
          name: 'Invert',
          icon: 'repeat',
          types: [AttachmentType.DOOR_SENSOR],
          action: () => {
            this.invertCharacteristic(this.attachment)
          }
        },
        {
          name: 'Delete',
          icon: 'trash-outline',
          types: AttachmentType.ALL,
          action: () => {
            this.deleteAttachment(this.attachment)
            this.$router.push('/')
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters('attachments', ['getAttachmentById']),
    menuItems: function() {
      if (this.attachment)
        return this.allMenuItems.filter(
          item => item.types.indexOf(this.attachment.type) != -1
        )
      else return []
    }
  },
  mounted() {
    this.attachment = this.getAttachmentById(this.$route.params.attachmentId)
  },
  methods: {
    ...mapActions('attachments', [
      'deleteAttachment',
      'toggleAttachment',
      'invertCharacteristic'
    ]),
    toggleChange() {
      this.toggleAttachment(this.attachment).then(() => {
        this.attachment = this.getAttachmentById(
          this.$route.params.attachmentId
        )
      })
    }
  }
}
</script>

<style scoped></style>
