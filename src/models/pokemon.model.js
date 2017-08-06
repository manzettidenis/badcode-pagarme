var Sequelize = require('sequelize');
const sequelize = new Sequelize('pokemons', null, null, {
	dialect: 'sqlite'
});
var Pokemon = sequelize.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	stock: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1
	}
});

module.exports = Pokemon;
