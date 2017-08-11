
const [sequelize, Sequelize] = require('../database'),

  db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize

// Models
db.trainer = require('./trainer.model')(sequelize, Sequelize)
db.pokemon = require('./pokemon.model')(sequelize, Sequelize)

// Relations
db.trainer.hasMany(db.pokemon)


module.exports = db
