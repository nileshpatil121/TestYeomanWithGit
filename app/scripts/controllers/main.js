'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodo2App
 */
angular.module('mytodo2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
