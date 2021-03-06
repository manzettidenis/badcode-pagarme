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
    {'id': 9991, 'nickname': 'Wild', 'gender': 'male', 'name': 'Pikachu', 'price': 450.00, 'stock': 10, 'level': 1},
    {'id': 9992, 'nickname': 'Wild', 'gender': 'female', 'name': 'Squirtle', 'price': 450.00, 'stock': 4, 'level': 1},
    {'id': 9993, 'nickname': 'Wild', 'gender': 'male', 'name': 'Bulbassaur', 'price': 450.00, 'stock': 6, 'level': 1},
    {'id': 9994, 'nickname': 'Wild', 'gender': 'female', 'name': 'Charmander', 'price': 450.00, 'stock': 3, 'level': 1},
    {'id': 9995, 'nickname': 'Wild', 'gender': 'male', 'name': 'Charmander', 'price': 450.00, 'stock': 1, 'level': 1},
    {'id': 9996, 'nickname': 'Wild', 'gender': 'female', 'name': 'Bulbassaur', 'price': 450.00, 'stock': 6, 'level': 1},
    {'id': 9997, 'nickname': 'Wild', 'gender': 'male', 'name': 'Squirtle', 'price': 450.00, 'stock': 4, 'level': 1},
    {'id': 9998, 'nickname': 'Wild', 'gender': 'female', 'name': 'Pikachu', 'price': 450.00, 'stock': 10, 'level': 1}
  ]
}

const actions = {
  buyPokemon ({commit, state}, data) {
    commit('start_buying')
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
            if (ctx.body === 'refused' || typeof ctx.body === 'string') {
              commit('fail_payment')
              return state.payment.status
            }
            commit('pokemon_was_bought', ctx)
            commit('end_buying')
          }, error => {
            commit('fail_payment')
            reject(error)
          })
        })
      })
  },

  createPokemon ({commit, state}, data) {
    let url = 'http://localhost:3000/pokemon/create'
    let pokemon = {
      trainer_id: data.trainer_id,
      name: data.name,
      nickname: data.nickname,
      level: data.level,
      gender: data.gender,
      price: 450
    }
    return new Promise((resolve, reject) => {
      Vue.http.put(url, JSON.stringify(pokemon))
      .then((ctx) => {
        commit('pokemon_was_created', ctx.body)
      }, error => {
        reject(error)
      })
    })
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
    console.log(pokemon)
    let pokemonModel = {
      id: pokemon.id,
      trainer_id: pokemon.trainer_id,
      name: pokemon.name,
      nickname: pokemon.nickname,
      level: pokemon.level,
      gender: pokemon.gender,
      price: 450
    }
    state.trainersPokemons.push(pokemonModel)
    console.log(state.trainersPokemons)

    return state.trainersPokemons
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
