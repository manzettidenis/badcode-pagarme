const PokemonCtrl = require('./pokemon');
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
console.log(PokemonCtrl.getPokemons)
routes.get('/get', PokemonCtrl.getPokemons);
routes.put('/create', PokemonCtrl.createPokemon);
routes.post('/buy', PokemonCtrl.buyPokemons);


module.exports = routes;
