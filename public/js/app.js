var cgwebApp = angular.module('cgwebApp', ['ngRoute'])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('', function() {
          templateUrl: 'partials/home.html',
          controller: 'js/controllers/homeController'
        })
        .when('/portfolio', function() {
          templateUrl: 'partials/portfolio.html'
        })
        .otherwise({ redirectTo: '/' });

      $locationProvider.html5Mode(true);
  }]);
