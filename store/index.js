export const state = () => ({ albums: [] })

export const mutations = {
  add (state, payload) {
    state.albums = payload
  },
  clear (state) {
    state.albums = []
  }
}

export const getters = {
  getAlbums (state) {
    return state.albums
  }
}
