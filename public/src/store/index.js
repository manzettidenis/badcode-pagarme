import Vuex from 'vuex'
import Vue from 'vue'
import cart from './cart'
import register from './register'
import couple from './couple'
import details from './details'
import pokemons from './pokemons'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    register,
    details,
    couple,
    pokemons
  }
})
