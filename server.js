'use strict';

const express = require('express'),
			app = express(),
			path = require('path'),
			bodyParser = require('body-parser'),
			Sequelize = require('sequelize'),
			db = require('./src/database.js'),
			Config = require('./src/config'),
			Router = require('./src/routes');

app.use(bodyParser.json());
app.use('/', Router);
app.use(express.static(path.join(__dirname, 'public')));

db.sequelize.sync().then(() => {
	console.log('all models are sync.')
  app.listen(Config.application.port, () => {
    console.log('Express listening on port:', Config.application.port);
  });
});
