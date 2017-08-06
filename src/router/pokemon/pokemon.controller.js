'use strict';

const request = require('request-promise');
const Pokemon = require('../../models/pokemon/pokemon.model');
console.log(Pokemon)


const PokemonCtrl = () => {
	return {

		getAll: (req,res) => {
			console.log('Getting all pokemons')
			Pokemon.findAll()
			.then(function listOfPokemons(pokemons) {
				res.send(pokemons);
			})
		},

		create: (req,res) => {
			console.log('creating')
			Pokemon.create(req.body)
			.then(function sendPokemon(pokemon) {
				console.log(pokemon.name + 'was created!')
				res.send(pokemon)
			})
		},

		buy: (req,res) => {
			console.log('Buying')
			Pokemon.findOne({
				where: {
					name: req.body.name
				}
			})
			.then((pokemon) => {
				console.log(pokemon.name + ' buying')
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
					console.log(pokemon.name + ' was bought')
					if (body.status == 'paid') {
						console.log(pokemon.name + ' payment acepted')
						pokemon.stock = pokemon.stock - req.body.quantity;
						pokemon.save()
						.then((pokemon) => {
							console.log(pokemon.name + ' sending to your pokedex')
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
