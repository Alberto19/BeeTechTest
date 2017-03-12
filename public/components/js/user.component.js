(function ($) {
    'use strict';

    angular
        .module('app')
        .component('user', {
            templateUrl: 'components/html/user.component.html',
            controller: UserController,
            bindings: {
                user: '&',
                logout: '&'
            },
        });

    // UserController.$inject = ['dependency1'];

    function UserController() {
        var $ctrl = this;

        ////////////////

        $ctrl.$onInit = function () {};
        $ctrl.$onChanges = function (changesObj) {};
        $ctrl.$onDestory = function () {};

    }
})(jQuery);
