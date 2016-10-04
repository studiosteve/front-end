(function(){
	var app = angular.module('sociaLite');

	var UsersController = function($scope,github,$http,$routeParams){

		var getUsers = function(){
			return $http.get("http://localhost:4000/users")
			.then(function(response){
				return response.data;
			});
		};

		return {
			getUsers
		}
	};

	app.controller('UsersController',UsersController);
}());