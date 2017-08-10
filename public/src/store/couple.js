
const state = {
  couples: []
}

const actions = {
  getCouples ({commit, state}, data) {

  }
}

const mutations = {
  couples_are_formed (state, data) {

  }
}

const getters = {
  couplesPokemon (state, getters, rootState) {
    return state.couples
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
