// import shop from '@/api/shop'

const state = {
  status: 'firstStep',
  trainer: {}
}

const actions = {
  changeCenario ({commit, state}, val) {
    console.log('chegou changeCenario')
    commit('cenario_has_changed', val)
  },
  updateTrainer ({commit, state}, val) {
    console.log('chegou updateTrainer')
    commit('trainer_has_update', val)
  }
}

const mutations = {
  cenario_has_changed (state, status) {
    console.log('chegou cenario_has_changed')
    state.status = status
  },
  trainer_has_update (state, val) {
    console.log('chegou trainer has update')
    state.status = val
  }
}

const getters = {
  trainerData (state, getters, rootState) {
    console.log('chegou trainerData getter')
    return state.trainer
  },
  cenarioStatus (state, getters, rootState) {
    console.log('chegou cenarioStatus getter')
    return state.status
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
