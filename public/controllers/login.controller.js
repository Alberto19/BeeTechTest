(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state'];

    function LoginController($state ) {
        var vm = this;

        vm.email = 'fake@fake.com.br';
        vm.password = '123456';
        ////////////////

 
    }
})();
