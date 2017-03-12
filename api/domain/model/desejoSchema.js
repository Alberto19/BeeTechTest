
let sequelize = require('sequelize');
let connection = require('../../db/connection');

let Desejo = connection.define('desejo', {
  nome: {
    type: sequelize.STRING
  },
    descricao: {
    type: sequelize.STRING
  },
    valor: {
    type: sequelize.DOUBLE
  }
});

module.exports = Desejo;




