(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(['$httpProvider', function ($httpProvider) {
            // Add http interceptors
            $httpProvider.interceptors.push('authInterceptor');
        }])
        .run(['$rootScope', '$state', 'authData', function ($rootScope, $state, authData) {
            // Page changed event
            $rootScope.$on('$stateChangeStart', function (event, next, current) {
                var token = authData.getToken();

                // Check for valid token
                if (!token && next.name != 'login') {
                    // Cancel redirect
                    event.preventDefault();

                    // Force redirect to login again
                    $state.go('login');
                }
            });

            // Global forbidden event
            $rootScope.$on('forbidden', function () {
                // Force redirect to login again
                $state.go('login');
            });
        }]);
})();