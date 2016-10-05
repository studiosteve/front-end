(function(){
	var app = angular.module('sociaLite');

	var UsersController = function($scope,$http,$routeParams){

		$scope.getUsers = ()=>{
			return $http.get("http://localhost:4000/users")
			.then(function(response){
				return response.data;
			});
		};

		$scope.sendUser = ()=>{
			
			var newUser = {
				name: user.name,
				email: user.email,
				password: user.pw
			};

			$scope.postUser(newUser);
		};

		$scope.postUser = user=>{
			return $http.post("http://localhost:4000/users",user)
			.then(response=>{
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