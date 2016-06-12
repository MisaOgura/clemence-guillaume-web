var cgwebApp = angular.module('cgwebApp', ['ngRoute'])

  cgwebApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html'
        })
        .when('/portfolio', {
          templateUrl: 'partials/portfolio.html'
        })
        .when('/contact', {
          templateUrl: 'partials/contact.html'
        })
        .when('/about', {
          templateUrl: 'partials/about.html'
        })
        .otherwise({ redirectTo: '/' });

      $locationProvider.html5Mode(true);
  }]);
