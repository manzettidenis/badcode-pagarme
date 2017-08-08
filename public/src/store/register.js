// import shop from '@/api/shop'

const state = {
  status: 'firstStep',
  trainer: {}
}

const actions = {
  changeCenario ({commit, state}, val, data) {
    console.log('chegou changeCenario')
    commit('cenario_has_changed', val)
  },
  updateTrainer ({commit, state}, ctx) {
    console.log('chegou updateTrainer')
    // this.$http.put('http://localhost:3000/trainer/create')
    // .then((trainer) => {
    //   console.log('trainer: ' + trainer)
    // })
    commit('trainer_has_update', ctx)
  },
  getStartPokemons ({commit, state}) {
    // this.$http.get('http://localhost:3000/pokemon/get')
    // .then((pokemons) => {
    //   console.log('lista: ' + pokemons)
    // })
  }
}

const mutations = {
  cenario_has_changed (state, status) {
    console.log('chegou cenario_has_changed')
    state.status = status
  },
  trainer_has_update (state, trainer) {
    console.log('chegou trainer has update: ' + trainer)
    state.trainer = trainer
  }
}

const getters = {
  trainerData (state, getters, rootState) {
    return state.trainer
  },
  cenarioStatus (state, getters, rootState) {
    return state.status
  },
  getStartPokemons (state, getters, rootState) {
    return state.freePokemons
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
