// import shop from '@/api/shop'
import Vue from 'vue'

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
    let trainerModel = {
      nickname: ctx.nickname,
      card_number: ctx.cardNumber,
      card_holder_name: ctx.cardHolderName,
      card_expiration_date: ctx.cardExpiration,
      cvv: ctx.CVV
    }
    console.log(trainerModel)
    Vue.http.post('http://localhost:3000/trainer/create', trainerModel)
    .then((trainer) => {
      console.log('trainer: ' + trainer)
    })
    .catch((err) => {
      console.log('err: ' + err)
    })
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
    state.status = status
  },
  trainer_has_update (state, trainer) {
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
