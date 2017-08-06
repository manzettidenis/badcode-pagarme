'use strict';

const request = require('request-promise'),
	db = require('../database.js'),
	TrainerCtrl = {};


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
	console.log('creating')
	db.trainer.create(req.body)
		.then((trainer) => {
			console.log(trainer.name + 'was created!')
			res.send(trainer.name + 'was created!')
		})
		.catch((err) => {
			console.log(err)
			return res.send(err.message)
		})
};


module.exports = TrainerCtrl;
