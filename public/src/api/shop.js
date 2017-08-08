import Vue from 'vue'

const _pokemons = [
  {'id': 1, 'nickname': 'Selvagem', 'genre': 'male', 'name': 'Pikachu', 'price': 450.00, 'stock': 1, 'level': 1},
  {'id': 2, 'nickname': 'Selvagem', 'genre': 'female', 'name': 'Squirtle', 'price': 450.00, 'stock': 1, 'level': 1},
  {'id': 3, 'nickname': 'Selvagem', 'genre': 'male', 'name': 'Bulbassaur', 'price': 450.00, 'stock': 1, 'level': 1},
  {'id': 4, 'nickname': 'Selvagem', 'genre': 'female', 'name': 'Charmander', 'price': 450.00, 'stock': 1, 'level': 1}
]

export default {
  getPokemons (cb) {
    setTimeout(() => cb(_pokemons), 100)
  },

  buyPokemon (pokemons, cb, errorCb) {
    // this.$http.post('/pokemon/buy', pokemons)
    //   .then((data) => {
    //     console.log(data)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
  },
  registerTrainer (trainer, cb, errorCb) {
    Vue.http.post('/trainer/create')
      .then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
  }
}
