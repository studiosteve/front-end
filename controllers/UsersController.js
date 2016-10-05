(function(){
	var app = angular.module('sociaLite');

	var UsersController = function($scope,$http,$routeParams){

		$scope.getUsers = function(){
			return $http.get("http://localhost:4000/users")
			.then(function(response){
				return response.data;
			});
		};

		var onUserComplete = data =>{
			$scope.users = data;
		};

		var onError = reason =>{
			$scope.error = "Error: " + reason;
		};

		$scope.getUsers().then(onUserComplete,onError);
	};

	app.controller('UsersController',UsersController);
}());