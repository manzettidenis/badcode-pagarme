'use strict';

const request = require('request-promise'),
	db = require('../database.js'),
	TrainerCtrl = {};


TrainerCtrl.getAll = (req, res) => {
	console.log('Getting all trainers')
	db.trainer.findAll({
			include: [{
				model: db.pokemon
			}]
		})
		.then((trainers) => {
			res.send(trainers);
		})
		.catch((err) => {
			console.log(err)
			return res.send(err.message)
		})
}
TrainerCtrl.get = (req, res) => {
	console.log('Getting all trainers')
	db.trainer.find({
			nickname: req.nickname
		})
		.then((trainer) => {
			res.send(trainer);
		})
		.catch((err) => {
			console.log(err)
			return res.send(err.message)
		})
}

TrainerCtrl.create = (req, res) => {
	console.log(req.body)
	db.trainer.create(req.body)
		.then((trainer) => {
			res.send(trainer)
		})
		.catch((err) => {
			console.log(err)
			return res.send(err.message)
		})
};


module.exports = TrainerCtrl;
