(function () {
    'use strict';

    angular
        .module('app')
        .component('navigation', {
            templateUrl: 'components/html/navigation.component.html',
            controller: NavigationController,
            bindings: {
                logout: '&',
            },
        });

    function NavigationController() {
        var $ctrl = this;

        ////////////////

        $ctrl.$onInit = function () {};
        $ctrl.$onChanges = function (changesObj) {};
        $ctrl.$onDestory = function () {};

    }
})();
