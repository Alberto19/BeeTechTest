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
                    abstract: true,
                    url: '^/desejo',
                    template: '<ui-view/>',
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

            // Redirect invalid routes to home page
            $urlRouterProvider.otherwise('/desejo/listar');
        }]);
})();

(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);

    function config() {
        return {
            baseApiUrl: "http://localhost:3001/api"
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .factory('auth', auth);

    auth.$inject = ['$http', 'authData', 'config'];

    function auth($http, authData, config) {
        var service = {
            login: login,
            logout: logout
        };

        return service;

        ////////////////
        function login(email, password) {
            return $http.post(config.baseApiUrl + '/user/login', {
                    email: email,
                    senha: password
                }).then(
                    function(data){
                        var loginData = data.data;

                        authData.parseData(loginData);
                    },
                    function(data){
                        console.log(data);
                    }
                );
        }

        function logout() {
            authData.clearData();
        }
    }
})();

(function () {
	'use strict';

	angular
		.module('app')
		.factory('authData', authData);

	authData.$inject = ['$window'];

	function authData($window) {
		/** Cached Instances **/
		var cachedToken = null;

		/* Service */
		var service = {
			parseData: parseData,
			clearData: clearData,

			getToken: getToken,
			setToken: setToken,
		};

		return service;

		////////////////

		/* Login Data */
		function parseData(data) {
			setToken(data.token);
		}

		function clearData() {
			setToken();
		}

		/* API Token - Value */
		function getToken() {
			if (!cachedToken) {
				var value = $window.sessionStorage.getItem('token');
				cachedToken = value ? value : null;
			}

			return cachedToken;
		}

		function setToken(token) {
			cachedToken = token;

			if (token) {
				$window.sessionStorage.setItem('token', token);
			}else{
			$window.sessionStorage.removeItem('token');
			}

		}
	}
})();
(function () {
    'use strict';

    angular
        .module('app')
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$rootScope', '$q', 'authData'];

    function authInterceptor($rootScope, $q, authData) {
        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        ////////////////

        function request(config) {
            var token = authData.getToken();

            // Inject API token on all requests
            if (token) {
                config.headers['X-AUTH-TOKEN'] = token;
            }

            return config;
        }

        function responseError(response) {
            // Forbidden response
            if (response.status == 403) {
                // Remove login data
                authData.clearData();

                // Emit global forbidden event
                $rootScope.$emit('forbidden');
            }

            return $q.reject(response);
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .factory('Desejo', Desejo);

    Desejo.$inject = ['$http', 'config'];

    function Desejo($http, config) {
        var service = {
            getDesejos: getDesejos,
            cadastrar:cadastrar
            // getDesejo: getDesejo
        };

        return service;

        ////////////////
        function getDesejos() {
            return $http.get(config.baseApiUrl + '/desejo');
        }
        function cadastrar(desejo){
            return $http.post(config.baseApiUrl + '/desejo/create', desejo)
        }

        // function getDesejo(desejoId) {
        //     return $http.get(config.baseApiUrl + '/desejo/edit/' + desejoId);
        // }
    }
})();

(function ($) {
    'use strict';

    angular
        .module('app')
        .component('navigation', {
            templateUrl: 'components/html/navigation.component.html',
            controller: NavigationController,
            bindings: {
                user: '&',
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
})(jQuery);

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

(function () {
	'use strict';

	angular
		.module('app')
		.controller('createDesejoController', createDesejoController);

	createDesejoController.$inject = ['Desejo'];

	function createDesejoController(Desejo) {
		var vm = this;
		vm.title = 'Cadastrar - Desejos';
		vm.nome = null;
		vm.descricao = null;
		vm.valor = null;

		vm.cadastrar = cadastrar;

		////////////////
		function cadastrar() {
			Desejo.cadastrar(vm.nome, vm.descricao, vm.valor).then(
				function () {
					$state.go('main.desejo.list')
				},
				function (err) {
					console.log(err);
				}
			)

		}



	}
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ListDesejoController', ListDesejoController);

    ListDesejoController.$inject = ['Desejos'];

    function ListDesejoController(Desejos) {
        var vm = this;
        vm.title = 'Listar - Desejos';
        vm.desejos = null;

        getDesejos();

          function getDesejos() {
            Desejos.getDesejos().then(
                function (desejos) {
                    vm.desejos = desejos.data;
                },
                function (error) {
                    console.log(error);
                });
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['auth', '$state'];

    function LayoutController(auth, $state) {
        var vm = this;

        vm.logout = logout;

        function logout() {
            auth.logout();
            $state.go('login');
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'auth'];

    function LoginController($state, auth) {
        var vm = this;

        vm.email;
        vm.password;
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

//# sourceMappingURL=script.js.map
