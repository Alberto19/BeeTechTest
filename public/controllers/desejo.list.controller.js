(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListDesejoController', ListDesejoController);

    ListDesejoController.$inject = ['Desejo'];

    function ListDesejoController(Desejo) {
        var vm = this;
        vm.title = 'Listar - Desejos';
        vm.desejos = null;
        vm.delete = deletar;

        getDesejos();

          function getDesejos() {
            Desejo.getDesejos().then(
                function (desejos) {
                    vm.desejos = desejos.data;
                },
                function (error) {
                    console.log(error);
                });
        }

        function deletar(id){
            Desejo.deletar(id).then(()=>{
                getDesejos();
            })
        }
    }
})();
