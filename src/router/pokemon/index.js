'use strict';

const request = require('request-promise');
const Pokemon = require('../../models/pokemon.model');


const PokemonCtrl = () => {
	return {
		getPokemons: (req,res) => {
			this.pokemon.findAll()
			.then(function listOfPokemons(pokemons) {
				res.send(pokemons);
			})
		},

		createPokemon: (req,res) => {
			Pokemon.create(req.body)
			.then(function sendPokemon(pokemon) {
				res.send(pokemon)
			})
		},

		buyPokemons: (req,res) => {
			Pokemon.findOne({
				where: {
					name: req.body.name
				}
			})
			.then((pokemon) => {
				if (pokemon.stock < req.body.quantity) {
					return res.status(400).send({
						error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock
					})
				}

				request({
					uri: 'https://api.pagar.me/1/transactions',
					method: 'POST',
					json: {
						api_key: "ak_test_WHgSu2XFmvoopAZMetV3LfA2RfEEQg",
						amount: pokemon.price * req.body.quantity * 100,
						card_number: "4024007138010896",
						card_expiration_date: "1050",
						card_holder_name: "Ash Ketchum",
						card_cvv: "123",
						metadata: {
							product: 'pokemon',
							name: pokemon.name,
							quantity: req.body.quantity
						}
					}
				})
				.then((body) => {
					if (body.status == 'paid') {

						pokemon.stock = pokemon.stock - req.body.quantity;
						pokemon.save()
						.then((pokemon) => {
							res.send(body);
						})
					}
				})
				.catch((err) => {
					console.log(JSON.stringify(err, null, 4));
					return res.status(err.response.statusCode).send(err.response.body);
				})

			})

		}

	}
	}


module.exports =  PokemonCtrl();
