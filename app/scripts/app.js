'use strict';

/**
 * @ngdoc overview
 * @name mytodo2App
 * @description
 * # mytodo2App
 *
 * Main module of the application.
 */
angular
  .module('mytodo2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	  .when('/retail', {
        templateUrl: 'views/pricing/retail-pricing/RetailPricingView.html',
        controller: 'retailPricingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
