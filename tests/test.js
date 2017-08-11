//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const config = require('./../config/config'),
	models = require('./../server/models/'),
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	server = require('./../server'),
	should = chai.should(),
	pagarme = require('pagarme')

chai.use(chaiHttp)

//Our parent block
beforeEach(done => {
	models.sequelize.sync({
			force: true,
			logging: false
		})
		.then(() => {
			done()
		})
})

describe('/GET trainer', () => {
	it('it should list all trainers', (done) => {
		chai.request(server)
			.get('/trainer/get')
			.end((err, res) => {
				res.should.have.status(200)
				res.body.should.be.a('array')
				res.body.length.should.be.eql(0)
				done()
			})
	})
})

describe('/PUT trainer', () => {
	it('it should CREATE a trainer', (done) => {
		chai.request(server)
			.put('/trainer/create')
			.send({
				nickname: 'Fogao'
			})
			.end((err, res) => {
				res.should.have.status(200)
				res.body.should.be.a('object')
				res.body.nickname.should.to.be.equal('Fogao')
				chai.request(server)
					.get('/trainer/get')
					.end((err, res) => {
						res.should.have.status(200)
						res.body.should.be.a('array')
						res.body.length.should.be.eql(1)
						done()
					})
			})
	})
})

describe('/GET pokemon', () => {
	it('it should list all the pokemons', (done) => {
		chai.request(server)
			.get('/pokemon/get')
			.end((err, res) => {
				res.should.have.status(200)
				res.body.should.be.a('array')
				res.body.length.should.be.eql(0)
				done()
			})
	})
})

describe('/PUT pokemon', () => {
	it('it should CREATE a pokemon', (done) => {
		chai.request(server)
			.put('/pokemon/create')
			.send({
				name: 'Charmander',
				nickname: 'Foguinho',
				level: 11,
				gender: 'female',
				price: 8990,
				trainer_id: 1
			})
			.end((err, res) => {
				res.should.have.status(200)
				res.body.should.be.a('object')
				res.body.nickname.should.to.be.equal('Foguinho')
				chai.request(server)
					.get('/pokemon/get')
					.end((err, res) => {
						res.should.have.status(200)
						res.body.should.be.a('array')
						res.body.length.should.be.eql(1)
						done()
					})
			})
	})
})


describe('/POST pokemon', function() {
	this.timeout(5000)
	it('it should BUY the pokemon', (done) => {
		const card = {
			card_number: '4716455486557625',
			card_holder_name: 'Manzetti Denis',
			card_cvv: '135',
			card_expiration_date: '1040',
		}
		pagarme.client.connect({
				encryption_key: 'ek_test_bKrSQk7gUwOaoNbjIx6MVDE5ktTKyZ'
			})
			.then(client => client.security.encrypt(card))
			.then((cardHash) => {
				chai.request(server)
					.post('/pokemon/buy')
					.send({
						pokemon: {
							name: 'Charmander',
							nickname: 'Foguinho',
							level: 11,
							gender: 'female',
							price: 890,
							trainer_id: 1
						},
						card: {
							card_hash: cardHash,
							card_holder_name: card.card_holder_name,
							card_cvv: card.card_cvv,
							card_expiration_date: card.card_expiration_date,
						}
					})
					.end((err, res) => {
						res.should.have.status(200)
						res.body.pokemons[0].nickname.should.to.be.equal('Foguinho')
						done()
					})
			})
			.catch((err) => {
				console.log(err)
			})

	})
})


describe('/POST pokemon', function() {
	this.timeout(5000)
	it('it should get payment refused trying buy a pokemon', (done) => {
		const card = {
			card_number: '4716455486557625',
			card_holder_name: 'Manzetti Denis',
			card_cvv: '635',
			card_expiration_date: '1040',
		}
		pagarme.client.connect({
				encryption_key: 'ek_test_bKrSQk7gUwOaoNbjIx6MVDE5ktTKyZ'
			})
			.then(client => client.security.encrypt(card))
			.then((cardHash) => {
				chai.request(server)
					.post('/pokemon/buy')
					.send({
						pokemon: {
							name: 'Charmander',
							nickname: 'Foguinho',
							level: 11,
							gender: 'female',
							price: 890,
							trainer_id: 1
						},
						card: {
							card_hash: cardHash,
							card_holder_name: card.card_holder_name,
							card_cvv: card.card_cvv,
							card_expiration_date: card.card_expiration_date,
						}
					})
					.end((err, res) => {
            res.should.have.status(200)
						res.text.should.to.be.equal('refused')
						done()
					})
			})
			.catch((err) => {
				console.log(err)
			})

	})
})
