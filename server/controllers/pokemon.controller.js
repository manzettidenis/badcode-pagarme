'use strict'

const config = require('../../config/config'),
	request = require('request-promise'),
	db = require('../models/'),
	PokemonCtrl = {}

PokemonCtrl.getAll = (req, res) => {
	db.pokemon.findAll()
		.then((pokemons) => {
			res.send(pokemons)
		})
		.catch((err) => {
			return res.send(err.message)
		})
}



PokemonCtrl.create = (req, res) => {
	db.pokemon.create(req.body)
		.then((pokemon) => {
			res.send(pokemon)
		})
		.catch((err) => {
			return res.send(err.message)
		})
};

PokemonCtrl.buy = (req, res) => {
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
				if (body.status == 'paid') {
					db.pokemon.create(pokemon)
						.then((poke) => {
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
					console.log('enviando bodystatus')
					res.send(body.status)
        }
		})
		.catch((err) => {
			return res.send(err.message)
		})
}



module.exports = PokemonCtrl
