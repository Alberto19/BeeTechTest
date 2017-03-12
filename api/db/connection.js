let sequelize = require('sequelize');
let config = require('../config');

let db = config.db.dev;

let connection = new sequelize(db.database, db.user, db.pass, {
	host: db.host,
	port: db.port,
	dialect: 'postgres',
	omitNull: true,

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// var connection = new sequelize('postgres://kjwihmbdrmutcr:3c9b0ed6cd26bf3f70a10c859b769874aef22c387c7a3d3bbfb3d0c3820db068@ec2-107-20-230-243.compute-1.amazonaws.com:5432/d8h6nu5b46uvi7');

module.exports = connection;