let sequelize = require('sequelize');
let config = require('../config');

let db = config.db.dev;

let connection = new sequelize(db.database, db.user, db.pass, {
	host: db.host,
	port: db.port,
	dialect: 'postgres',
	dialectOptions: {
    ssl: true
  },
	omitNull: true,

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = connection;