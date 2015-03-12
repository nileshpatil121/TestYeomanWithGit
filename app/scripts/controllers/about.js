'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodo2App
 */
angular.module('mytodo2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
