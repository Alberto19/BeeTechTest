let sequelize = require('sequelize');
let connection = require('../../db/connection');

let User = connection.define('user', {
  nome: {
    type: sequelize.STRING
  },
    email: {
    type: sequelize.STRING,
    isEmail: true,
  },
    senha: {
    type: sequelize.STRING
  }
});

module.exports = User;




