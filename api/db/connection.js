let sequelize = require('sequelize');

let connection = new sequelize('test', 'postgres', '190896', {
	host: 'localhost',
	port: 5432,
	dialect: 'postgres',
	omitNull: true,

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = connection;