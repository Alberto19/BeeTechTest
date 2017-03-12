(function () {
    'use strict';

    angular
        .module('app')
        .factory('Desejo', Desejo);

    Desejo.$inject = ['$http', 'config'];

    function Desejo($http, config) {
        var service = {
            getDesejos: getDesejos,
            cadastrar:cadastrar
            // getDesejo: getDesejo
        };

        return service;

        ////////////////
        function getDesejos() {
            return $http.get(config.baseApiUrl + '/desejo');
        }
        function cadastrar(desejo){
            return $http.post(config.baseApiUrl + '/desejo/create', desejo)
        }

        // function getDesejo(desejoId) {
        //     return $http.get(config.baseApiUrl + '/desejo/edit/' + desejoId);
        // }
    }
})();
