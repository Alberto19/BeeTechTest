let Desejo = require('../model/desejoSchema');
let q = require('q');

class desejoDAO {

	persist(desejo) {
		let defer = q.defer();
		Desejo.sync({
			force: false
		}).then(function () {
			// Table created
			return Desejo.create({
				nome: desejo.nome,
				descricao: desejo.descricao,
				valor: desejo.valor
			}).then(() => {
				defer.resolve();
			}).catch((error) => {
				defer.reject('Erro create Desejo');
			});
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