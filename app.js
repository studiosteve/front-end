(function(){
	var app = angular.module('sociaLite',['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
		.when("/users",{
			templateUrl: './views/users.html',
			controller: 'UsersController'
		})
		.when("/users/new",{
			templateUrl: './views/new.html',
			controller: 'UsersController'
		})
		.when("/users/:id",{
			templateUrl: './views/user.html',
			controller:'UsersController'
		})
		.otherwise({redirectTo:'/users'});
	});
}());