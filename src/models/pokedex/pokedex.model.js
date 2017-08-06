const Database = require('../database');
const Sequelize = require('sequelize');

const Pokedex = Database.define('pokedex', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}

});

	Pokedex.sync({logging: true}).then(() => {
		console.log('Pokedex model is ready!');
	});
module.exports = Pokedex;
