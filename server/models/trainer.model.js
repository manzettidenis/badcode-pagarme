module.exports = (sequelize, DataTypes) => {
	const Trainer = sequelize.define('Trainer', {
		nickname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		card_hash: {
			type: DataTypes.STRING,
			allowNull: true
		},
		card_cvv: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address_street: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address_zipcode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address_state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address_city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address_neighborhood: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phone_ddd: {
			type: DataTypes.STRING,
			allowNull: true,
		}
	});
	return Trainer
}
