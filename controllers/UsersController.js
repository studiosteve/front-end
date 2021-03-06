(function(){
	var app = angular.module('sociaLite');

	var UsersController = function($scope,$http,$routeParams,$location){

		$scope.getUsers = ()=>{
			return $http.get("http://localhost:4000/users")
			.then(function(response){
				return response.data;
			});
		};

		$scope.getUser = user=>{
			var id = user._id
			return $http.get("http://localhost:4000/users/" + id)
			.then(function(response){
				return response.data;
			});
		};

		$scope.postUser = user=>{
			$http.post("http://localhost:4000/users",user)
			.then(response=>{
				$location.path("/users");
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