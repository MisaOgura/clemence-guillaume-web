var cgwebApp = angular.module('cgwebApp', ['ngRoute'])

  cgwebApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html',
          controller: 'homeController'
        })
        .when('/portfolio', {
          templateUrl: 'partials/portfolio.html',
          controller: 'portfolioController'
        })
        .when('/contact', {
          templateUrl: 'partials/contact.html',
          controller: 'contactController'
        })
        .when('/about', {
          templateUrl: 'partials/about.html',
          controller: 'aboutController'
        })
        .otherwise({ redirectTo: '/' });

      $locationProvider.html5Mode(true);
  }]);
