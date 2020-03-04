import axios from 'axios'

/**
 * Devices Vuex module
 */
export default {
  namespaced: true,
  state: {
    devices: []
  },
  mutations: {
    setDevices: (state, devices) => (state.devices = devices),
    addDevice: (state, device) => state.devices.push(device),
    removeDeviceById: (state, deviceId) => {
      const index = state.devices.findIndex(device => device._id === deviceId)
      state.devices.splice(index, 1)
    }
  },
  actions: {
    getDevices: async ({ rootGetters, commit }) => {
      const devices = await axios
        .get(rootGetters['app/getApiUrl']('devices'))
        .then(r => r.data)
      commit('setDevices', devices)
    },
    createDevice: async ({ commit, rootGetters }, device) => {
      const createdDevice = await axios
        .post(rootGetters['app/getApiUrl']('devices'), device)
        .then(r => r.data)
      commit('addDevice', createdDevice)
    },

    /**
     * Delete device and remove all attachments received in the responce (these atachments ware
     * deleted from the database when their corresponding device was deleted)
     */
    deleteDevice: async ({ rootGetters, commit }, device) => {
      await axios
        .delete(rootGetters['app/getApiUrl']('devices/' + device._id))
        .then(res => {
          if (res.data.deletedAttachments)
            res.data.deletedAttachments.forEach(attachmentId => {
              commit('attachments/removeAttachmentById', attachmentId, {
                root: true
              })
            })
        })
      commit('removeDeviceById', device._id)
    }
  },
  getters: {
    getDeviceById: state => deviceId =>
      state.devices.find(device => device._id === deviceId)
  }
}
