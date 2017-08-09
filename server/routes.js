const PokemonCtrl = require('./controllers/pokemon.controller'),
	TrainerCtrl = require('./controllers/trainer.controller'),
	path = require('path'),
	routes = require('express').Router();



// Trainer Routes
routes.get('/trainer/getAll', TrainerCtrl.getAll);
routes.get('/trainer/get', TrainerCtrl.get);
routes.put('/trainer/create', TrainerCtrl.create);


// Pokemon Routes
routes.get('/pokemon/get', PokemonCtrl.getAll);
routes.put('/pokemon/create', PokemonCtrl.create);
routes.post('/pokemon/buy', PokemonCtrl.buy);


module.exports = routes;
