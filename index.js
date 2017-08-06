'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');



const Router = require('./src/router/routes');
const Models = require('./src/models/models');

app.use(bodyParser.json());
app.use('/', Router);
app.listen(3000,() => {
	console.log('Listening on http://localhost:3000');
});
