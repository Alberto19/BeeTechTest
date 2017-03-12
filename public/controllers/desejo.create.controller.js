(function () {
	'use strict';

	angular
		.module('app')
		.controller('createDesejoController', createDesejoController);

	createDesejoController.$inject = ['$state', 'Desejo'];

	function createDesejoController($state, Desejo) {
		var vm = this;
		vm.title = 'Cadastrar - Desejos';
		vm.desejos = {
			nome: null,
			descricao: null,
			valor: null
		};
		vm.submit = 'Cadastrar Desejo';

		vm.cadastrar = cadastrar;

		////////////////
		function cadastrar() {
			Desejo.cadastrar(vm.desejos).then(
				function () {
					$state.go('main.desejo.list')
				},
				function (err) {
					console.log(err);
				}
			)
		}
	}
})();