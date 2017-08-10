import shop from '@/api/shop'

const state = {
  all: []
}

const actions = {
  getAllPokemons ({commit}) {
    shop.getPokemons(pokemons => {
      commit('recieve_pokemons', pokemons)
    })
  }
}

const mutations = {
  recieve_pokemons (state, pokemons) {
    state.all = pokemons
  }
}

const getters = {
  allPokemons (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
