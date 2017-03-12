'use strict'
let userRouter = require('express').Router();
let UserDAO = require('../domain/dao/userDAO');
let token = require('../util/token');

userRouter.get('',(req, res)=>{
	UserDAO.findAll().then((result)=>{
			res.status(201).json(result);

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});

userRouter.post('/create',(req, res)=>{
	UserDAO.persist(req.body).then((result)=>{
			token.createToken(req.body).then(token=>{
				res.status(201).send({
					token: token
				});
			});

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});


userRouter.post('/login',(req, res)=>{
	UserDAO.findOne(req.body).then((result)=>{
		token.createToken(req.body).then(token=>{
			res.status(201).send({
				user:result,
				token: token
			});
		});
	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});

module.exports = userRouter;
