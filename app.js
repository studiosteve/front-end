(function(){
	var app = angular.module('sociaLite',['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
		.when("/users",{
			templateUrl: './views/users.html',
			controller: 'UsersController'
		})
		.otherwise({redirectTo:'/users'});
	});
}());