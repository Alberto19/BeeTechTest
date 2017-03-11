let User = require('../model/userSchema');
let q = require('q');

class UserDAO {

	persist(user) {
		let defer = q.defer();
		User.create({
			nome: user.nome,
			email: user.email,
			senha: user.senha
		}).then(() => {
			defer.resolve();
		}).catch((error) => {
			defer.reject('Erro create User');
		});

		return defer.promise;
	}

	findAll() {
		let defer = q.defer();
		User.findAll().then((users) => {
			defer.resolve(users);
		});
		return defer.promise;
	}
}
module.exports = new UserDAO();