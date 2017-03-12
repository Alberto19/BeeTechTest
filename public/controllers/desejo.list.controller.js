(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListDesejoController', ListDesejoController);

    ListDesejoController.$inject = [];

    function ListDesejoController() {
        var vm = this;
        vm.title = 'Listar - Desejos'
        vm.disabled = null;
        vm.desejos = null;

    }
})();
