'use strict'
let userRouter = require('express').Router();
let UserDAO = require('../domain/dao/userDAO');

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
			res.status(201).send({
				message: 'success'
			});

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});


module.exports = userRouter;
