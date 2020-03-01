import axios from 'axios'

export default {
  namespaced: true,
  state: {
    attachments: []
  },
  mutations: {
    setAttachments: (state, attachments) => (state.attachments = attachments),
    addAttachment: (state, attachment) => state.attachments.push(attachment),
    removeAttachmentById: (state, attachmentId) => {
      const index = state.attachments.findIndex(
        attachment => attachment._id === attachmentId
      )
      state.attachments.splice(index, 1)
    },
    updateAttachment: (state, attachment) => {
      state.attachments = [
        ...state.attachments.map(att =>
          att._id !== attachment._id ? att : { ...att, ...attachment }
        )
      ]
    }
  },
  actions: {
    getAttachments: async ({ rootGetters, commit }) => {
      const attachments = await axios
        .get(rootGetters['app/getApiUrl']('attachments'))
        .then(r => r.data)
      commit('setAttachments', attachments)
    },
    createAttachment: async ({ commit, rootGetters }, attachment) => {
      const createdAttachment = await axios
        .post(rootGetters['app/getApiUrl']('attachments'), attachment)
        .then(r => r.data)
      commit('addAttachment', createdAttachment)
    },
    deleteAttachment: async ({ rootGetters, commit }, attachment) => {
      await axios.delete(
        rootGetters['app/getApiUrl']('attachments/' + attachment._id)
      )
      commit('removeAttachmentById', attachment._id)
    },

    toggleAttachment: async ({ rootGetters, commit }, attachment) => {
      await axios
        .post(
          rootGetters['app/getApiUrl'](
            'attachments/' + attachment._id + '/toggle'
          )
        )
        .then(res => {
          commit('updateAttachment', res.data.newValue)
        })
    }
  },
  getters: {
    getAttachmentById: state => attachmentId =>
      state.attachments.find(attachment => attachment._id === attachmentId),
    getAttachmentsByDeviceId: state => deviceId =>
      state.attachments.filter(attachment => attachment.deviceId === deviceId)
  }
}
