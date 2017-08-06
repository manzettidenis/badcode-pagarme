const PokemonCtrl = require('./pokemon/pokemon.controller');
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
routes.get('/pokemon/get', PokemonCtrl.getAll);
routes.put('/pokemon/create', PokemonCtrl.create);
routes.post('/pokemon/buy', PokemonCtrl.buy);


module.exports = routes;
