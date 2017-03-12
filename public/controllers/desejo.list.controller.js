(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListDesejoController', ListDesejoController);

    ListDesejoController.$inject = ['Desejos'];

    function ListDesejoController(Desejos) {
        var vm = this;
        vm.title = 'Listar - Desejos'
        vm.disabled = null;
        vm.desejos = null;

        getDesejos();

          function getDesejos() {
            Desejos.getDesejos().then(
                function (desejos) {
                    vm.desejos = desejos.data;
                },
                function (error) {
                    console.log(error);
                }
            );
        }

    }
})();
