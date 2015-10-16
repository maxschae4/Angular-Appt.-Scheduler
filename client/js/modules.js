var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/home.partial.html'
	})
	.when('/appointments', {
		controller: 'AppointmentsController',
		controllerAs: 'ac',
		templateUrl: '/partials/appointments.partial.html'
	})
	.when('/new_appointment', {
		controller: 'AppointmentsController',
		controllerAs: 'ac',
		templateUrl: '/partials/new_appointment.partial.html'
	})
	.when('/users', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/users.partial.html'
	})
	.when('/users/details', {
		controller: 'UserController',
		controllerAs: 'userCtrl',
		templateUrl: '/partials/user.partial.html'
	})
	
	.otherwise('/')
})