<template>
  <div class="home">
    <AddRoom></AddRoom>
    <RoomList></RoomList>
    <hr />
    <AddDevice></AddDevice>
    <DeviceList></DeviceList>
    <hr />
    <AddAttachment></AddAttachment>
    <AttachmentList></AttachmentList>

    <hr />
    <button class="bg-blue-500 rounded" @click="searchDevices()">
      Seach devices
    </button>
    <div v-for="device in devices" :key="device">
      {{ device }}
      <button class="bg-blue-300 rounded" @click="setupDevice(device)">
        Setup device
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddRoom from '@/components/AddRoom'
import RoomList from '@/components/RoomList'
import AddDevice from '@/components/AddDevice'
import DeviceList from '@/components/DeviceList'
import AddAttachment from '@/components/AddAttachment'
import AttachmentList from '@/components/AttachmentList'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    devices: []
  }),
  computed: {
    ...mapGetters('app', ['getApiUrl'])
  },
  components: {
    AddRoom,
    RoomList,
    AddDevice,
    DeviceList,
    AddAttachment,
    AttachmentList
  },
  methods: {
    ...mapActions('devices', ['createDevice']),
    async searchDevices() {
      this.devices = (
        await this.axios.get(this.getApiUrl('devices') + '/searchDevices')
      ).data
    },
    async setupDevice(device) {
      this.createDevice({
        name: 'Autocreated',
        macAddress: device.macAddress
      })
    }
  }
}
</script>
