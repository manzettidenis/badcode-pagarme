'use strict';

const request = require('request-promise'),
	db = require('../models/'),
	TrainerCtrl = {};


TrainerCtrl.getAll = (req, res) => {
	db.trainer.findAll({
		})
		.then((trainers) => {
			res.send(trainers);
		})
		.catch((err) => {
			return res.send(err.message)
		})
}

TrainerCtrl.create = (req, res) => {
	db.trainer.create(req.body)
		.then((trainer) => {
			res.send(trainer)
		})
		.catch((err) => {
			return res.send(err.message)
		})
};


module.exports = TrainerCtrl;
