'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodo2App
 */
angular.module('mytodo2App')
  .controller('demoCtrl', function ($scope,$location) {
           var original;
            $scope.username='';
            $scope.password='';
            $scope.showError='false';
            $scope.errorMessage='';
            $scope.brand='Tesoro';
            $scope.submitForm = function() {
            	var username=$scope.username;
            	var password=$scope.password;
            	if(username=='' || password==''){
            		$scope.errorMessage='Please insert Username and Password';
            		$scope.showError='true';
            		return;
            	}
            	else{
            		if(username=='tsoadmin' && password=='tsoadmin'){
                		//window.location.href="../home/dashboard";
						$location.path('/dashboard');
						$scope.username='';
						$scope.password='';
                	}else{
                		$scope.errorMessage='Invalid Username or password';
                		$scope.showError='true';
                		$scope.username='';
                        $scope.password='';
                	}
            	}
            }
  });
