(function () {
    'use strict';

    angular
        .module('app')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
            // Use URLs without hash
            $locationProvider.html5Mode(true);

            // Login routes
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginController as vm',
                    templateUrl: 'views/layouts/login.html'
                })

                // Home routes
                .state('main', {
                    abstract: true,
                    url: '/main',
                    controller: 'LayoutController as vm',
                    templateUrl: 'views/layouts/main.html',
                })

                .state('main.desejo', {
                    url: '^/desejo',
                    template: '<ui-view/>'
                })
                // Desejo routes
                .state('main.desejo.list', {
                    url: '/listar',
                    controller: 'ListDesejoController as vm',
                    templateUrl: 'views/partials/desejo.html'
                })
                .state('main.desejo.create', {
                    url: '/create',
                    controller: 'createDesejoController as vm',
                    templateUrl: 'views/partials/desejo.form.html'
                })
                .state('main.desejo.edit', {
                    url: '/edit/:desejoId',
                    controller: 'editDesejoController as vm',
                    templateUrl: 'views/partials/desejo.form.html'
                })


            // Redirect invalid routes to home page
            $urlRouterProvider.otherwise('/desejo/listar');
        }]);
})();
