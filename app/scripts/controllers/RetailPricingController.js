	'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodo2App
 */
 
angular.module('mytodo2App')
  .controller('retailPricingCtrl', function ($scope,$http,$filter,ContactService) {
   			$scope.contacts = ContactService.list();
 
			$scope.saveContact = function () {
				ContactService.save($scope.newcontact);
				$scope.newcontact = {};
			}			 
		 
			$scope.delete = function (id) {			 
				ContactService.delete(id);
				if ($scope.newcontact.id == id) 
					$scope.newcontact = {};
			}			 
		 
			$scope.edit = function (id) {
				$scope.newcontact = angular.copy(ContactService.get(id));
			}

					
  });
