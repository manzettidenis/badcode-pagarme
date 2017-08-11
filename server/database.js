'use strict'

const config = require('./../config/config'),
	Sequelize = require('sequelize')

let options = {
		dialect: 'sqlite',
		logging: false
	}

let sequelize

if (process.env.NODE_ENV === 'test') {
	options.storage = './config/test_database.sqlite'
	sequelize = new Sequelize(
		config.test_database.name,
		config.test_database.user,
		config.test_database.password, options)
} else {
	options.storage = './config/database.sqlite'
	sequelize = new Sequelize(
		config.database.name,
		config.database.user,
		config.database.password, options)
}



module.exports = [sequelize, Sequelize];
