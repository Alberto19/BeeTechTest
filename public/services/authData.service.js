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