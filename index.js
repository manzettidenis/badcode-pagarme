'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const Pokemon = require('./src/models/pokemon.model');
const Router = require('./src/router/routes');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('pokemons', null, null, {
	dialect: 'sqlite'
});

app.use(bodyParser.json());
app.use('/', Router);
app.listen(3000, function () {
	console.log('Listening on http://localhost:3000');
});


Pokemon.sync({force: true}).then(function () {
	console.log('Model is ready!');
});
