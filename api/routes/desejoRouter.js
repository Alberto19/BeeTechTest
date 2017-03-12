'use strict'
let desejoRouter = require('express').Router();
let desejoDAO = require('../domain/dao/desejoDAO');

desejoRouter.get('',(req, res)=>{
	desejoDAO.findAll().then((result)=>{
			res.status(201).json(result);

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});

desejoRouter.post('/create',(req, res)=>{
	desejoDAO.persist(req.body).then((result)=>{
			res.status(201).send({
				message: 'success'
			});

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});
desejoRouter.get('/edit/:id',(req, res)=>{
	desejoDAO.findOne(req.params).then((result)=>{
			res.status(201).json(result);

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});
desejoRouter.post('/editar',(req, res)=>{
	desejoDAO.update(req.body).then((result)=>{
			res.status(201).json(result);

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});

desejoRouter.post('/delete/:id',(req, res)=>{
	desejoDAO.delete(req.params).then((result)=>{
			res.status(201).json(result);

	}).catch((err)=>{
		res.status(500).send({
			error: err
		});
	});
});


module.exports = desejoRouter;
