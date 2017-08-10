//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const Sequelizer = require("sequelizer")
  sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password, {
    dialect: 'sqlite',
    storage: './config/database.sqlite',
    logging: false
  }),
  Pokemon = require('../server/models/pokemon.model')

//Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)
//Our parent block
describe('Pokemon', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => {
           done()
        })
    })
/*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/book')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0)
              done()
            })
      })
  })

})
