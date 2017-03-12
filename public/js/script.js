(function () {
    'use strict';

    angular.module('app', ['ui.router'])
})();

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

                // User routes
                .state('main.desejo', {
                    abstract: true,
                    url: '^/desejo',
                    template: '<ui-view/>',
                })
                .state('main.desejo.list', {
                    url: '/listar',
                    controller: 'ListDesejoController as vm',
                    templateUrl: 'views/partials/desejo.html'
                })

            // Redirect invalid routes to home page
            $urlRouterProvider.otherwise('/login');
        }]);
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListDesejoController', ListDesejoController);

    ListDesejoController.$inject = [];

    function ListDesejoController() {
        var vm = this;
        vm.title = 'Listar - Desejos'
        vm.disabled = null;
        vm.desejos = null;

    }
})();

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

//# sourceMappingURL=script.js.map
