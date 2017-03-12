'use strict'

let jsonwebtoken = require('jsonwebtoken');
let secretKey = require('../config').secretKey;
let q = require('q');

module.exports = new class Token {

	createToken(user) {
		var defer = q.defer();
			let token = jsonwebtoken.sign({
				email: user.email,
			}, secretKey);
			defer.resolve(token);
		return defer.promise;
	}
}