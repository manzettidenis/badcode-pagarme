// import shop from '@/api/shop'
import Vue from 'vue'
import pagarme from 'pagarme'
console.log(pagarme)
const state = {
  status: 'firstStep',
  trainer: {
    id: '',
    nickname: '',
    cardNumber: '',
    cardHash: '',
    cardHolderName: '',
    cardExpiration: '',
    cardCVV: ''
  }
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
        console.log(trainer.body.id)
        commit('trainer_id_has_update', trainer.body.id)
        commit('cenario_has_changed', 'playGame')
      }, error => {
        console.log('trainer err')
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
  },
  trainer_id_has_update (state, id) {
    console.log(id)
    state.trainer.id = id
  }
}

const getters = {
  trainerData (state, getters, rootState) {
    return state.trainer
  },
  cenarioStatus (state, getters, rootState) {
    return state.status
  },
  itWasRegistered (state, getters, rootState) {
    return state.trainer
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
