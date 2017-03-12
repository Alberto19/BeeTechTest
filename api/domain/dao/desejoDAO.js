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
	};

	findOne(desejo) {
		let defer = q.defer();
		Desejo.findOne({
			where: {
				id: desejo.id
			}
		}).then(function (result) {
			defer.resolve(result);
		});
		return defer.promise;
	};

	update(desejo) {
		let defer = q.defer();
		Desejo.find({
			where: {
				id: desejo.id
			}
		}).then(result=> {
			if(result){
				result.updateAttributes({
					nome: desejo.nome,
					descricao: desejo.descricao,
					valor: desejo.valor,
				}).then(atualizado=>{
					defer.resolve(atualizado);
				});
			}
		});
		return defer.promise;
	};
	delete(desejo) {
		let defer = q.defer();
		Desejo.destroy({
			where: {
				id: desejo.id
			}
		}).then(result=> {
			defer.resolve(result);
		});
		return defer.promise;
	};
}
module.exports = new desejoDAO();