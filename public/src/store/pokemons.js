// import shop from '@/api/shop'
import Vue from 'vue'

const state = {
  count: 0,
  title: 0,
  trainersPokemons: [],
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
    let url = 'http://localhost:3000/pokemon/buy'
    let body = {
      pokemon: {
        name: data.pokemon.name,
        nickname: data.pokemon.nickname,
        level: data.pokemon.level,
        gender: data.pokemon.gender,
        price: data.pokemon.price
      },
      card: {
        card_number: data.trainer.cardNumber.replace(/[.]/g, ''),
        card_expiration_date: data.trainer.cardExpiration.replace(/[/]/g, ''),
        card_holder_name: data.trainer.cardHolderName,
        card_cvv: data.trainer.cardCVV
      }

    }
    return new Promise((resolve, reject) => {
      Vue.http.post(url, JSON.stringify(body))
      .then((ctx) => {
        commit('pokemon_was_bought', ctx)
      }, error => {
        reject(error)
      })
    })
  },
  getMyPokemons ({commit, state}, data) {

  }
}

const mutations = {
  pokedex_has_changed (state, pokemon) {
    state.trainersPokemons.push(pokemon)
  },
  pokemon_was_bought (state, data) {
    state.trainersPokemons = data.body.pokemons
    return state.trainersPokemons
  },
  pokemon_was_created (state, pokemon) {
    console.log(pokemon)
    state.shopsPokemons.filter((p) => {
    })
  }
}

const getters = {
  myPokemons (state, getters, rootState) {
    return state.trainersPokemons
  },
  shopsPokemons (state, getters, rootState) {
    return state.shopsPokemons
  },
  countPokemons (state, getters, rootState) {
    state.count = state.trainersPokemons.length
    return state.count
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
