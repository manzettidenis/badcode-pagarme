// import shop from '@/api/shop'
import Vue from 'vue'

const state = {
  status: 'firstStep',
  trainer: {
    nickname: '',
    cardNumber: '4024007138010896',
    cardHolderName: '',
    cardExpiration: '1224',
    cardCVV: '144'
  },
  model: {}
}

const actions = {

  changeCenario ({commit, state}, val, data) {
    commit('cenario_has_changed', val)
  },

  createTrainer ({commit, state}, ctx) {
    let url = 'http://localhost:3000/trainer/create'
    let body = {
      nickname: state.trainer.nickname,
      card_number: state.trainer.cardNumber.replace(/[.]/g, ''),
      card_holder_name: state.trainer.cardHolderName,
      card_expiration: state.trainer.cardExpiration.replace(/[/]/g, ''),
      cvv: state.trainer.cardCVV
    }
    return new Promise((resolve, reject) => {
      Vue.http.put(url, JSON.stringify(body))
      .then((trainer) => {
        commit('trainer_has_update', ctx)
        commit('cenario_has_changed', 'playGame')
      }, error => {
        reject(error)
      })
    })
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
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
