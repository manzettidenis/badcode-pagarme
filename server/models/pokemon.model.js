'use strict'

const Pokemon = (sequelize, DataTypes) => {
		 return sequelize.define('pokemon', {
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true
				}
			},
			genre: {
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
				allowNull: true,
				validate: {
					isAlphanumeric: true
				}
			},
			skills: {
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
		});
	};

module.exports = Pokemon;
