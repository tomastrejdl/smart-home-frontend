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
    deleteAttachment: async ({ rootGetters, commit }, attachmentId) => {
      await axios.delete(
        rootGetters['app/getApiUrl']('attachments/' + attachmentId)
      )
      commit('removeAttachmentById', attachmentId)
    },

    toggleAttachment: async ({ rootGetters, commit }, attachment) => {
      await axios
        .post(
          rootGetters['app/getApiUrl'](
            'attachments/' + attachment._id + '/toggle'
          )
        )
        .then(res => {
          commit('removeAttachmentById', res.data.newValue._id)
          commit('addAttachment', res.data.newValue)
        })
    }
  },
  getters: {
    getAttachmentById: state => attachmentId =>
      state.attachments.find(attachment => attachment._id === attachmentId)
  }
}
