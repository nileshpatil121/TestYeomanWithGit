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
    'ngTouch',
	'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: ''
      })
      .when('/retail', {
        templateUrl: 'app/pricing/retail-pricing/RetailPricingView.html',
        controller: 'retailPricingCtrl'
      })
	  .when('/competitor', {
        templateUrl: 'app/pricing/competitor-pricing/CompetitorPricingView.html',
        controller: 'compPricingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
