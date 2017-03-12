(function () {
    'use strict';

    angular
        .module('app')
        .component('user', {
            templateUrl: 'components/html/user.component.html',
            controller: UserController,
            bindings: {
                logout: '&',
            },
        });

    function UserController() {
        var $ctrl = this;

        ////////////////

        $ctrl.$onInit = function () {};
        $ctrl.$onChanges = function (changesObj) {};
        $ctrl.$onDestory = function () {};

    }
})();
