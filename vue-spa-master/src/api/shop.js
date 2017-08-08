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
    // this.$http.post('/api', pokemons).then(() => {
    //   setTimeout(() => {
    //         // simulate random checkout failure.
    //     (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
    //       ? cb()
    //       : errorCb()
    //   }, 100)
    // })
  },
  registerTrainer (trainer, cb, errorCb) {
    this.$http.post('/api').then(() => {
    })
  }
}
