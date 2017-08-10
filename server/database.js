'use strict'

const config = require('./../config/config'),
	Sequelize = require('sequelize'),
 	sequelize = new Sequelize(
	config.database.name,
	config.database.user,
	config.database.password, {
		dialect: 'sqlite',
		storage: './config/database.sqlite',
		logging: false
	}),
	db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.trainer = require('./models/trainer.model')(sequelize, Sequelize);
db.pokemon = require('./models/pokemon.model')(sequelize, Sequelize);

// Relations
db.trainer.hasMany(db.pokemon);

module.exports = db;
