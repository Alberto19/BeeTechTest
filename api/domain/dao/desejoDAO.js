let Desejo = require('../model/desejoSchema');
let q = require('q');

class desejoDAO {

	persist(Desejo) {
		let defer = q.defer();
		Desejo.create({
			nome: Desejo.nome,
			descricao: Desejo.descricao,
			valor: Desejo.valor
		}).then(() => {
			defer.resolve();
		}).catch((error) => {
			defer.reject('Erro create Desejo');
		});

		return defer.promise;
	}

	findAll() {
		let defer = q.defer();
		Desejo.findAll().then((desejo) => {
			defer.resolve(desejo);
		});

		return defer.promise;
	}
}
module.exports = new desejoDAO();