(function () {
    'use strict';

    angular
        .module('app')
        .controller('editDesejoController', editDesejoController);

    editDesejoController.$inject = ['$state', 'Desejo', '$stateParams'];

    function editDesejoController($state, Desejo, $stateParams) {
        var vm = this;
        vm.title = 'Editar - Usuário'
        vm.desejos = {
            nome: null,
            descricao: null,
            valor: null
        };
        vm.submit = 'Editar Desejo';

        vm.cadastrar = editar;

        getDesejo();

        ////////////////

        function getDesejo() {
            var desejoId = $stateParams.desejoId;

            Desejo.getDesejo(desejoId).then(
                function (desejo) {
                    vm.desejos = desejo.data;
                },
                function (error) {
                    console.log(error);
                }
            );
        }

        function editar() {
            Desejo.editar(vm.desejos).then(
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