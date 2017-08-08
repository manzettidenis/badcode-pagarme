'use strict'

const config = require('./config'),
	Sequelize = require('sequelize'),
 	sequelize = new Sequelize(
	config.database.name,
	config.database.user,
	config.database.password, {
		dialect: 'sqlite',
		storage: './database.sqlite',
		logging: false
	}),
	db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.trainer = require('./models/trainer.model')(sequelize, Sequelize);
db.pokemon = require('./models/pokemon.model')(sequelize, Sequelize);
db.pokedex = require('./models/pokedex.model')(sequelize, Sequelize);

// Relations
db.trainer.hasOne(db.pokedex);
db.pokedex.hasMany(db.pokemon);

module.exports = db;
