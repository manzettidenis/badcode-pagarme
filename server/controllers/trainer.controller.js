'use strict';

const request = require('request-promise'),
	db = require('../database.js'),
	TrainerCtrl = {};


TrainerCtrl.getAll = (req, res) => {
	console.log('Getting all trainers')
	db.trainer.findAll()
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
	const promise = db.trainer.create(req.body);

	db.trainer.find({
			where: {
				nickname: req.body.nickname
			}
		})
		.then((ctx) => {
				if(ctx === null) {
					db.promise.then((trainer) => {
						res.send(trainer.nickname + 'was created!')
					})
					.catch((err) => {
						console.log(err)
						return res.send(err.message)
					})
				}
				return res.send(ctx)
		}).catch((err) => {
			console.log(err)
			return res.send(err.message)
		})

};


module.exports = TrainerCtrl;
