'use strict'

const Pokemon = (sequelize, DataTypes) => {
	return sequelize.define('Pokemon', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		trainer_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
			values: ['male', 'female'],
			validate: {
				isIn: [
					['male', 'female']
				],
			}
		},
		nickname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		level: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			validate: {
				isNumeric: true
			}
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: {
				isAlphanumeric: true
			}
		}
	})
}
module.exports = Pokemon;
