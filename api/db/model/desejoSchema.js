
let sequelize = require('sequelize');
let connection = require('../connection');

let Desejo = connection.define('Desejo', {
  nome: {
    type: sequelize.STRING
  },
    descricao: {
    type: sequelize.STRING
  },
    valor: {
    type: sequelize.DOUBLE
  },
    dataCriacao: {
    type: sequelize.DATE
  },
    dataAtualizacao: {
    type: sequelize.DATE
  },
});

module.exports = Desejo;




