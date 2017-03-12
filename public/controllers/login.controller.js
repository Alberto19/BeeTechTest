(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'auth'];

    function LoginController($state, auth) {
        var vm = this;

        vm.email = 'junior@gmail.com';
        vm.password = '12345';
        vm.login = login;

        ////////////////

        function login() {
            auth.login(vm.email, vm.password).then(
                function () {
                    $state.go('main.desejo.list');
                },
                function (data) {
                    console.log(data);
                });
        }
    }
})();
