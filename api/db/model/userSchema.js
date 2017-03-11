let sequelize = require('sequelize');
let connection = require('../connection');

let User = connection.define('user', {
  nome: {
    type: sequelize.STRING
  },
    email: {
    type: sequelize.STRING
  },
    senha: {
    type: sequelize.STRING
  },
    dataCriacao: {
    type: sequelize.DATE
  },
    dataAtualizacao: {
    type: sequelize.DATE
  },
});

module.exports = User;




