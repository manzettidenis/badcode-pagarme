module.exports = (sequelize, DataTypes) => {
	const Trainer = sequelize.define('Trainer', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true
			}
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isAlphanumeric: true
			}
		}
	});
	return Trainer
}
