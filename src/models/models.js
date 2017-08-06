const Pokemon = require('./pokemon/pokemon.model');
const Pokedex = require('./pokedex/pokedex.model');


const models = () => {

	return {
		Pokemon,
		Pokedex
	}
}


module.exports = models;
