(function () {
	'use strict';

	angular
		.module('app')
		.controller('createDesejoController', createDesejoController);

	createDesejoController.$inject = ['Desejo'];

	function createDesejoController(Desejo) {
		var vm = this;
		vm.title = 'Cadastrar - Desejos';
		vm.nome = null;
		vm.descricao = null;
		vm.valor = null;

		vm.cadastrar = cadastrar;

		////////////////
		function cadastrar() {
			Desejo.cadastrar(vm.nome, vm.descricao, vm.valor).then(
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