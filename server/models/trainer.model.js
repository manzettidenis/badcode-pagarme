module.exports = (sequelize, DataTypes) => {
	const Trainer = sequelize.define('Trainer', {
		nickname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true
			}
		},
		card_number: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isAlphanumeric: true
			}
		},
		card_holder_name: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isAlphanumeric: true
			}
		},
		card_expiration_date: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isAlphanumeric: true
			}
		},
		cvv: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isAlphanumeric: true
			}
		}
	});
	return Trainer
}
