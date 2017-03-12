(function () {
    'use strict';

    angular
        .module('app')
        .factory('auth', auth);

    auth.$inject = ['$http', 'authData', 'config'];

    function auth($http, authData, config) {
        var service = {
            login: login,
            register: register,
            logout: logout
        };

        return service;

        ////////////////
        function login(email, password) {
            return $http.post(config.baseApiUrl + '/user/login', {
                email: email,
                senha: password
            }).then(
                function (data) {
                    var loginData = data.data;

                    authData.parseData(loginData);
                },
                function (data) {
                    console.log(data);
                }
            );
        }

        function register(nome, email, password) {
            return $http.post(config.baseApiUrl + '/user/create', {
                nome: nome,
                email: email,
                senha: password
            }).then(
                function (data) {
                    var loginData = data.data;

                    authData.parseData(loginData);
                },
                function (data) {
                    console.log(data);
                }
            );
        }

        function logout() {
            authData.clearData();
        }
    }
})();