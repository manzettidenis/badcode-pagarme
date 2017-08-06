const Database = require('../database');
const Sequelize = require('sequelize');

const Pokemon = Database.define('pokemon', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	genre: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'male'
	},
	nickname: {
		type: Sequelize.STRING,
		allowNull: true
	},
	skills: {
		type: Sequelize.INTEGER,
		defaultValue: 1,
		allowNull: false
	},
	stock: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1
	}
});

	Pokemon.sync({logging: true}).then(() => {
		console.log('Pokemon model is ready!');
	});

module.exports = Pokemon;
