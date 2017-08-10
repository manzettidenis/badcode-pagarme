import Vue from 'vue'
import pagarme from 'pagarme'

const state = {
  count: 0,
  title: 0,
  isBought: false,
  payment: {
    status: 'stand-by'
  },
  trainersPokemons: [],
  details: [],
  shopsPokemons: [
    {'id': 9991, 'nickname': 'Selvagem', 'gender': 'male', 'name': 'Pikachu', 'price': 450.00, 'stock': 10, 'level': 1},
    {'id': 9992, 'nickname': 'Selvagem', 'gender': 'female', 'name': 'Squirtle', 'price': 450.00, 'stock': 4, 'level': 1},
    {'id': 9993, 'nickname': 'Selvagem', 'gender': 'male', 'name': 'Bulbassaur', 'price': 450.00, 'stock': 6, 'level': 1},
    {'id': 9994, 'nickname': 'Selvagem', 'gender': 'female', 'name': 'Charmander', 'price': 450.00, 'stock': 3, 'level': 1},
    {'id': 9995, 'nickname': 'Selvagem', 'gender': 'male', 'name': 'Charmander', 'price': 450.00, 'stock': 1, 'level': 1},
    {'id': 9996, 'nickname': 'Selvagem', 'gender': 'female', 'name': 'Bulbassaur', 'price': 450.00, 'stock': 6, 'level': 1},
    {'id': 9997, 'nickname': 'Selvagem', 'gender': 'male', 'name': 'Squirtle', 'price': 450.00, 'stock': 4, 'level': 1},
    {'id': 9998, 'nickname': 'Selvagem', 'gender': 'female', 'name': 'Pikachu', 'price': 450.00, 'stock': 10, 'level': 1}
  ]
}

const actions = {
  buyPokemon ({commit, state}, data) {
    commit('start_buying')
    console.log('data')
    console.log(data)
    commit('start_payment')
    let url = 'http://localhost:3000/pokemon/buy'
    const card = {
      card_number: data.trainer.cardNumber.replace(/[.]/g, ''),
      card_holder_name: data.trainer.cardHolderName,
      card_expiration_date: data.trainer.cardExpiration.replace(/[/]/g, ''),
      card_cvv: data.trainer.cardCVV
    }
    pagarme.client.connect({ encryption_key: 'ek_test_bKrSQk7gUwOaoNbjIx6MVDE5ktTKyZ' })
      .then(client => client.security.encrypt(card))
      .then((cardHash) => {
        let body = {
          pokemon: {
            trainer_id: data.pokemon.trainerID,
            name: data.pokemon.name,
            nickname: data.pokemon.nickname,
            level: data.pokemon.level,
            gender: data.pokemon.gender,
            price: data.pokemon.price
          },
          card: {
            card_hash: cardHash,
            card_expiration_date: card.card_expiration_date,
            card_holder_name: card.card_holder_name,
            card_cvv: card.card_cvv
          }
        }
        return new Promise((resolve, reject) => {
          Vue.http.post(url, JSON.stringify(body))
          .then((ctx) => {
            console.log(ctx)
            if (ctx.body === 'refused') {
              console.log('fail_payment')
              commit('fail_payment')
              return state.payment.status
            }
            console.log('payment accept')
            commit('pokemon_was_bought', ctx)
            commit('end_buying')
          }, error => {
            reject(error)
          })
        })
      })
  },
  createPokemon ({commit, state}, data) {

  },
  getDetailPokemons ({commit, state}, data) {
    data.pokemons = state
    commit('pokemons_details_updated', data)
  },

  getCouples ({commit, state}, data) {

  }

}

const mutations = {
  pokedex_has_changed (state, pokemon) {
    state.trainersPokemons.push(pokemon)
  },

  end_buying (state, data) {
    state.isBought = true
    state.payment.status = 'stand-by'
    return state.payment.status
  },

  start_buying (state, data) {
    state.isBought = false
    return
  },

  start_payment (state, data) {
    state.payment.status = 'processing'
    return
  },

  fail_payment (state, data) {
    state.payment.status = 'refused'
    return
  },

  pokemon_was_bought (state, data) {
    state.payment.status = 'paid'
    state.trainersPokemons = data.body.pokemons
    return state.trainersPokemons
  },

  pokemon_was_created (state, pokemon) {
  },

  pokemons_details_updated (state, data) {
    if (data.where === 'pokedex') {
      state.details = state.trainersPokemons.find((p) => p.id === data.id) || {}
      return state.details
    } else {
      state.details = state.shopsPokemons.find((p) => p.id === data.id) || {}
      return state.details
    }
  }

}

const getters = {
  myPokemons (state, getters, rootState) {
    return state.trainersPokemons
  },

  detailsOfPokemon (state, getters, rootState) {
    return state.details
  },

  shopsPokemons (state, getters, rootState) {
    return state.shopsPokemons
  },

  couplesPokemon (state, getters, rootState) {
    return state.couples
  },

  itsWasBought (state, getters, rootState) {
    state.isBought = state.isBought
    return state.isBought
  },

  countPokemons (state, getters, rootState) {
    state.count = state.trainersPokemons.length
    return state.count
  },

  paymentStatus (state, getters, rootState) {
    state.payment.status = state.payment.status
    return state.payment.status
  }

}

export default {
  state,
  actions,
  mutations,
  getters
}
