'use strict'

let Authentication = require('express').Router();
let jsonwebtoken = require('jsonwebtoken');
let secretKey = require('../config').secretKey;

Authentication.use((req, res, next) => {

	let token = req.query['x-access-token'] || req.headers['x-access-token'];

	// check if token exist
	if (token) {
		jsonwebtoken.verify(token, secretKey, (err, decoded) => {
			if (err) {
				res.status(403).send({
					success: false,
					message: "Failed to authenticate user"
				});
			}
			req.decoded = decoded;
			next();

		});
	} else {
		res.status(403).send({
			success: false,
			message: "No token Provided"
		});
	}

});

module.exports = Authentication;