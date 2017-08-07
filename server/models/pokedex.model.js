'use strict'

const Pokedex = (sequelize, DataTypes) => {
	return sequelize.define('pokedex', {
		money: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1000,
			validate: {
				isNumeric: true
			}
		}

	});
}

module.exports = Pokedex;
