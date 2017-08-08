import shop from '@/api/shop'

const state = {
  all: []
}

const actions = {
  addToCart ({commit}, product) {
    commit('add_to_cart', product.id)
  },
  getAllPokemons ({commit}) {
    shop.getPokemons(pokemons => {
      commit('recieve_pokemons', pokemons)
    })
  }
}

const mutations = {
  recieve_pokemons (state, pokemons) {
    state.all = pokemons
  },
  add_to_cart (state, productId) {
    state.all.find(p => p.id === productId).inventory--
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
