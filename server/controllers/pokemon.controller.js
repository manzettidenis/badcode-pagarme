'use strict'

const config = require('../config'),
	request = require('request-promise'),
	db = require('../database.js'),
	PokemonCtrl = {}

PokemonCtrl.getAll = (req, res) => {
	console.log('Getting all pokemons')
	db.pokemon.findAll()
		.then((pokemons) => {
			res.send(pokemons)
		})
		.catch((err) => {
			console.log(err)
			return res.send(err.message)
		})
}



PokemonCtrl.create = (req, res) => {
	console.log('creating')
	db.pokemon.create(req.body)
		.then((pokemon) => {
			console.log(pokemon.name + 'was created!')
			res.send(pokemon.name + 'was created!')
		})
		.catch((err) => {
			console.log(err)
			return res.send(err.message)
		})
};

PokemonCtrl.buy = (req, res) => {
  console.log(req.body)
  let pokemon = req.body.pokemon
  let data = {
    "api_key": config.application.api_key,
		"encryption_key": config.application.encryption_key,
		"amount": pokemon.price * 100,
		"payment_method": "credit_card",
		"card_hash": req.body.card.card_hash,
		"card_expiration_date": req.body.card.card_expiration_date,
		"card_holder_name": req.body.card.card_holder_name,
		"card_cvv": req.body.card.card_cvv
  }
	let trainer =
	request({
			uri: 'https://api.pagar.me/1/transactions',
			method: 'POST',
			json: true,
			body: data
		})
		.then((body) => {
			console.log(body.status)
				if (body.status == 'paid') {
					console.log(pokemon.name + ' paid')
					db.pokemon.create(pokemon)
						.then((poke) => {
							console.log(pokemon.trainer_id)
              db.pokemon.findAll({
								where: {
									trainer_id: pokemon.trainer_id
								}
							})
              .then((pokemons) => {
                data = {
                  pokemons: pokemons,
                  id: pokemon.id
                }
                res.send(data)
              })
						})
				} else if (body.status === 'refused') {
					return res.send(body.status)
        }
		})
		.catch((err) => {
			console.log(err.message)
			return res.send(err.message)
		})
}



module.exports = PokemonCtrl
