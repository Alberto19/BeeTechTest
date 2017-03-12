(function () {
    'use strict';

    angular
        .module('app')
        .factory('Desejo', Desejo);

    Desejo.$inject = ['$http', 'config'];

    function Desejo($http, config) {
        var service = {
            getDesejos: getDesejos,
            getDesejo: getDesejo
        };

        return service;

        ////////////////
        function getDesejos() {
            return $http.get(config.baseApiUrl + '/desejo');
        }

        function getDesejo(desejoId) {
            return $http.get(config.baseApiUrl + '/desejo/edit/' + desejoId);
        }
    }
})();
