
const Sequelize = require('sequelize');
const sequelize = new Sequelize('pokemons', null, null, {
	dialect: 'sqlite',
	storage: './database.sqlite'
});


const database = () => {
	return sequelize;
}
module.exports = database();
