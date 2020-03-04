import axios from 'axios'

/**
 * Devices Vuex module
 */
export default {
  namespaced: true,
  state: {
    rooms: []
  },
  mutations: {
    setRooms: (state, rooms) => (state.rooms = rooms),
    addRoom: (state, room) => state.rooms.push(room),
    removeRoomById: (state, roomId) => {
      const index = state.rooms.findIndex(room => room._id === roomId)
      state.rooms.splice(index, 1)
    }
  },
  actions: {
    getRooms: async ({ rootGetters, commit }) => {
      const rooms = await axios
        .get(rootGetters['app/getApiUrl']('rooms'))
        .then(r => r.data)
      commit('setRooms', rooms)
    },
    createRoom: async ({ commit, rootGetters }, room) => {
      const createdRoom = await axios
        .post(rootGetters['app/getApiUrl']('rooms'), room)
        .then(r => r.data)
      commit('addRoom', createdRoom)
    },
    deleteRoom: async ({ rootGetters, commit }, roomId) => {
      await axios.delete(rootGetters['app/getApiUrl']('rooms/' + roomId))
      commit('removeRoomById', roomId)
    }
  },
  getters: {
    getRoomById: state => roomId =>
      state.rooms.find(room => room._id === roomId)
  }
}
